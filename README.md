# Sports Turf Management and Booking Web Application

## Table of Contents
1. [Introduction](#introduction)
2. [Goals](#goals)
3. [Objectives](#objectives)
4. [Techniques & Technologies Used](#techniques--technologies-used)
5. [Project Overview](#project-overview)
6. [Context and Significance](#context-and-significance)
7. [Project Architecture](#project-architecture)
8. [Workflow](#workflow)
9. [Security Measures Implemented](#security-measures-implemented)
10. [Data Breaching and Security](#data-breaching-and-security)
11. [Conclusion](#conclusion)
12. [Reflection](#reflection)

## Introduction
This project aims to develop a web-based application that facilitates the management and booking of sports turfs...

## Goals
- Develop a user-friendly web application for turf management and booking.
- Implement secure user authentication and password policies to safeguard user accounts.
- Create a secure environment that prevents unauthorized access and data breaches.
- Incorporate an audit trail mechanism to track critical user actions and system events.
- Demonstrate the importance of adhering to secure coding practices.
- Provide a practical example of identifying security vulnerabilities and rectifying them.
- Educate users about the significance of strong passwords and data protection.

## Objectives

### Step 1: Creating the Web Application
- The primary purpose of this section is to create a website and demonstrate if the website is vulnerable to any attacks from the hackers, such as,
    1. SQL Injection: Attackers can inject malicious SQL code into input fields to manipulate the database, gain unauthorized access to sensitive data, or perform destructive actions.
    2. Cross-Site Request Forgery (CSRF): Attackers trick authenticated users into unknowingly sending unauthorized requests to a website, exploiting the trust between the user and the site.

### Step 2: Data Breaching
- After the website development, this site is tested to see for any vulnerabilities that would allow the hackers to get into the website illegally and access sensitive information.
- The site is checked with illegal username, password access, and HTTP link injection to see if any details regarding the database show up as an error to the user.

### Step 3: Data Security
- The main goal of this step is to find and implement measures to nullify the vulnerabilities found in the previous step.

## Techniques & Technologies Used
- Visual Studio Code (HTML & CSS)
- Bootstrap
- MYSQL
- JavaScript

## Project Overview
The "Sports Turf Management and Booking System" is a web-based application designed to streamline the process of managing and booking sports turfs. With the growing popularity of various sports and recreational activities, there is a need for an efficient platform that allows users to easily find available turfs, book time slots, and manage their bookings. This project aims to address this need while strongly emphasizing cybersecurity and user data protection.

## Context and Significance
In today's digital age, web applications have become integral to our daily lives. From online shopping to social networking, these applications handle sensitive user information, making security a paramount concern. This project's significance lies in demonstrating the importance of incorporating robust security measures into web application development.The context of this project is rooted in the real-world scenario of sports turf management. Sports enthusiasts often face challenges in finding suitable turfs and booking them hassle-free. This application seeks to simplify this process, making it convenient for both turf owners and users seeking recreational opportunities.In addition to its functional goals, the project highlights the critical need for secure coding practices. By intentionally introducing security vulnerabilities and then rectifying them, the project serves as a hands-on educational tool to underscore the importance of writing code that is resistant to potential breaches. Through this project, users will gain an understanding of secure user authentication, data validation, and the implementation of password policies. Moreover, the inclusion of an audit trail mechanism provides insights into tracking user actions, further enhancing the application's accountability and security.By emphasizing security awareness and best practices, this project aims to empower developers and users alike to create and engage with web applications in a secure and responsible manner.



## Project Architecture
The Sports Turf Management and Booking System is built using a client-server architecture, incorporating various technologies to ensure a seamless and secure user experience. The architecture consists of three main components: the client interface, the server, and the database.

*Client Interface:*
The client interface is the application's front end that users interact with. It is developed using HTML, CSS, and JavaScript. The interface allows users to register, log in, search for available turfs, and book slots. The user inputs are validated in real-time to ensure data integrity and security. Additionally, password policy constraints are enforced during password creation.

*Server:*
The server is the application's core and is responsible for handling client requests, processing data, and interacting with the database. It is implemented using Node.js and Express.js. The server includes APIs for user registration, login, fetching available turfs, and booking slots. It enforces security measures such as input validation, parameterized queries, and protection against SQL injection.

*Database:*
The database stores user information, turf details, and booking records. It is implemented using MySQL. The database design includes user, owner, turf, and booking tables. The relationship between owners and turfs is established through foreign keys. This architecture ensures data consistency, integrity, and proper access control.


## Workflow

*User Registration and Login:*
Users register by providing a username and password. Password policies are enforced during registration. Upon successful registration, user data is stored in the database. During login, the server validates the user's credentials and provides access to the dashboard.

*Dashboard and Turf Booking:*
Upon logging in, users are directed to the dashboard to view available turfs. The server fetches turf data from the database and sends it to the client. Users can book available slots for a selected turf. The server validates the booking request and updates the database accordingly.

*Audit Trail:*
The application implements an audit trail mechanism to track user actions. Each action, such as registration, login, and booking, is logged with a timestamp and associated user information. This provides an accountability trail and aids in detecting any unauthorized activities.


## Security Measures Implemented
## Security Measures Implemented

*User Authentication:*
User authentication is a critical aspect of the application's security. It is handled through a secure login process using a username and password. Passwords are stored securely using cryptographic hashing and salting techniques to prevent exposure in case of a data breach.

*Password Policies:*
Password policies are enforced during registration to ensure that users create strong passwords. These policies require passwords to have a minimum length and include a mix of uppercase and lowercase letters, numbers, and special characters. Feedback is provided to users in real-time to guide them in creating compliant passwords.

*Data Validation and Sanitization:*
All user inputs, including registration fields and login credentials, are thoroughly validated, and sanitized to prevent malicious code injection, such as SQL injection and cross-site scripting (XSS) attacks. This ensures that only safe and expected data reaches the server.

*Parameterized Queries:*
All database queries are constructed using parameterized queries to prevent SQL injection attacks. This approach separates user inputs from the query structure, eliminating the risk of unintended SQL execution.

*Secure Communication:*
Communication between the client and server is secured using HTTPS. This encryption prevents eavesdropping and data interception by unauthorized entities during transit.

*Audit Trail:*
An audit trail is implemented to maintain a log of user activities and system actions. Each log entry includes a timestamp, user information, and the action performed. This helps in identifying any suspicious or unauthorized activities.

*Error Handling:*
Comprehensive error handling is in place to ensure that sensitive error messages are not exposed to users. Generic error messages are displayed to users, while detailed error messages are logged on the server for debugging purposes.

*Access Control:*
The application follows the principle of least privilege, ensuring that users have access only to the functionalities they are authorized to use. Authorization checks are performed for actions like booking slots and viewing turfs.

*Session Management:*
User sessions are managed securely with session tokens and expiration mechanisms. This prevents session hijacking and unauthorized access to user accounts.

*Database Security:*
Database access is restricted to the application server, and strong, unique passwords for database accounts are enforced. Additionally, regular backups are taken to ensure data recovery in case of any security incidents.

*Regular Updates and Patch Management:*
The application's software components, libraries, and frameworks are regularly updated to include the latest security patches and fixes.
 By implementing these security measures, the application ensures user data's confidentiality, integrity, and availability. User authentication, data validation, secure communication, and access controls collectively contribute to the robust security posture of the system, safeguarding user information and maintaining user trust.

## Data Breaching and Security
For educational purposes, a controlled security breach was performed to demonstrate a common vulnerability: SQL injection. This breach aimed to showcase how an attacker can manipulate user inputs to gain unauthorized access to the database.


**Description:**
In a hypothetical scenario, an attacker attempted to exploit the application's vulnerability in the user registration process. The vulnerability allowed the attacker to manipulate the SQL query executed on the database, potentially gaining unauthorized access to sensitive data.

**Attack Steps:**

**Identifying Vulnerability:**
The attacker recognized that the application's registration form did not properly sanitize and validate user inputs before executing SQL queries. This made it susceptible to SQL injection attacks.

**Injecting Malicious Code:**
The attacker crafted a malicious input during the registration process. Instead of providing valid registration details, they entered a carefully constructed payload in the username field. The payload was designed to manipulate the SQL query and gain unauthorized access.

**Exploiting the Vulnerability:**
By entering ' OR '1'='1'; -- as the username, the attacker aimed to manipulate the SQL query to always evaluate to true, allowing them to log in without valid credentials.


**Results:**
The attacker successfully registered a user account with the malicious payload as the username. When attempting to log in using the manipulated payload, the application's SQL query mistakenly allowed the attacker to bypass authentication, granting them unauthorized access to the system.


## Conclusion
While developing this web application, we have achieved several significant milestones...

## Reflection
Throughout the course of this project, we encountered several challenges...
