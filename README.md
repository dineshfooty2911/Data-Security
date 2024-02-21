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

Client Interface:
The client interface is the application's front end that users interact with. It is developed using HTML, CSS, and JavaScript. The interface allows users to register, log in, search for available turfs, and book slots. The user inputs are validated in real-time to ensure data integrity and security. Additionally, password policy constraints are enforced during password creation.

Server:
The server is the application's core and is responsible for handling client requests, processing data, and interacting with the database. It is implemented using Node.js and Express.js. The server includes APIs for user registration, login, fetching available turfs, and booking slots. It enforces security measures such as input validation, parameterized queries, and protection against SQL injection.

Database:
The database stores user information, turf details, and booking records. It is implemented using MySQL. The database design includes user, owner, turf, and booking tables. The relationship between owners and turfs is established through foreign keys. This architecture ensures data consistency, integrity, and proper access control.


## Workflow
User Registration and Login:
Users register by providing a username and password...

## Security Measures Implemented
User Authentication:
User authentication is a critical aspect of the application's security...

## Data Breaching and Security
For educational purposes, a controlled security breach was performed to demonstrate a common vulnerability: SQL injection...

## Conclusion
While developing this web application, we have achieved several significant milestones...

## Reflection
Throughout the course of this project, we encountered several challenges...
