const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Configure the MySQL database connection
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Latha@2911',
  database: 'Footsal',
};

//Initialize the connection pool
const pool = mysql.createPool(dbConfig);

//Test the database connection
app.get('/api/test-connection', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error occurred during database connection:', err);
      return res.status(500).json({ message: 'Database connection failed.' });
    }
    connection.release();
    return res.status(200).json({ message: 'Database connection successful.' });
  });
});

const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
//registeration
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  if (!isValidPassword(password)) {
    return res.status(400).json({ message: 'Password does not meet the requirements.' });
  }
  // Insert user data into the users table

  const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
  const userValues = [username, password];

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error occurred during database connection:', err);
      return res.status(500).json({ message: 'Database connection failed.' });
    }

    connection.query(insertUserQuery, userValues, (err, userResults) => {
      if (err) {
        console.error('Error occurred during user registration:', err);
        connection.release();
        return res.status(500).json({ message: 'User registration failed. Please try again later.' });
      }
      
      // After successful user registration, perform audit logging
      const event = 'User Registration';
const description = `User "${username}" registered.`;
const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

// Get the ID of the user that was just inserted
const userId = userResults.insertId;

const insertLogQuery = 'INSERT INTO audit_log (user_id, event_type, timestamp, description) VALUES (?, ?, ?, ?)';
const logValues = [userId, event, timestamp, description];

connection.query(insertLogQuery, logValues, (err, logResults) => {
  connection.release();

  if (err) {
    console.error('Error occurred during audit logging:', err);
    // Handle the error as needed (e.g., logging to a separate error log).
    return res.status(500).json({ message: 'User registration was successful, but audit logging failed.' });
    // Depending on your use case, you may want to roll back the user registration
    // if logging fails, or you may want to continue with user registration and just log
    // the failure to add the audit log.
  }

  return res.status(201).json({ message: 'User registration successful.' });
});
    });
  });
});
// Function to validate password against password policy
function isValidPassword(password) {
  // Implement your password policy validation logic here
  // Return true if the password meets the requirements, otherwise false
  // Example: Check length, character types, etc.
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
  
  return (
    password.length >= minLength &&
    hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
  );
}

// User Login API
app.post('/api/user-login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match in the users table
  const query = 'SELECT COUNT(*) AS count FROM users WHERE username = ? AND password = ?';
  const values = [username, password];

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error occurred during database connection:', err);
      return res.status(500).json({ message: 'Database connection failed.' });
    }

    connection.query(query, values, (err, results) => {
      connection.release();

      if (err) {
        console.error('Error occurred during user login:', err);
        return res.status(500).json({ message: 'Login failed. Please try again later.' });
      }

      if (results[0].count === 0) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }

      return res.status(200).json({ message: 'Login successful.', username });
    });
  });
});

// Fetch Available Turfs API
app.get('/api/turfs', (req, res) => {
  // Fetch all turfs and their owners from the database
  const query = `
    SELECT
      t.name AS turf_name,
      t.location AS turf_location,
      o.name AS owner_name
    FROM
      turfs t
      INNER JOIN owners o ON t.owner_id = o.id
  `;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error occurred during database connection:', err);
      return res.status(500).json({ message: 'Database connection failed.' });
    }

    connection.query(query, (err, results) => {
      connection.release();

      if (err) {
        console.error('Error occurred while fetching turfs:', err);
        return res.status(500).json({ message: 'Failed to fetch turfs. Please try again later.' });
      }

      return res.status(200).json(results);
    });
  });
});

// Book Slot API
app.post('/api/book', (req, res) => {
  const { turfId, slot } = req.body;

  const query = 'SELECT COUNT(*) AS count FROM turfs WHERE id = ? AND ? = ANY(slots)';
  const values = [turfId, slot];

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error occurred during database connection:', err);
      return res.status(500).json({ message: 'Database connection failed.' });
    }

    connection.query(query, values, (err, results) => {
      connection.release();

      if (err) {
        console.error('Error occurred during slot booking:', err);
        return res.status(500).json({ message: 'Slot booking failed. Please try again later.' });
      }

      if (results[0].count === 0) {
        return res.status(400).json({ message: 'Invalid slot selection.' });
      }

      // Here you can add code to handle the booking and store it (replace with database insert)

      return res.status(200).json({ message: 'Slot booked successfully.' });
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
