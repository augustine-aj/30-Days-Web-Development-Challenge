# Day 8: Introduction to Express.js 🚀

## Overview 🌐
Today, we will begin our journey with **Express.js**, a fast and minimalist web framework for Node.js. It simplifies the process of building robust and scalable web applications and APIs.

---

## **What is Express.js?** 📖
Express.js is a lightweight framework built on top of Node.js to:
- Handle routing efficiently.
- Provide middleware for various tasks.
- Simplify web and API development.

Express.js allows you to do more with fewer lines of code compared to the core `http` module of Node.js.

<div align="center">
    <img src="../resources/images/express.png" alt="Node Express Image" width="500" />
</div>

---

## **Installing Express.js** 🛠️
To use Express.js, you must install it in your project.

### **Steps to Install:**
1. Navigate to your project directory.
2. Run the following command to initialize your project if you haven’t already:
   ```bash
   npm init -y
   ```
3. Install Express.js:
   ```bash
   npm install express
   ```
4. Verify that it’s installed by checking your `package.json` file under dependencies.

---

## **Setting Up Your First Express Server** ✨
Let’s create a basic Express.js server that responds to requests.

### **Example Code**
File: `server.js`
```javascript
// Import Express
const express = require('express');
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to Express.js! 🚀');
});

// Define a route for the About page
app.get('/about', (req, res) => {
  res.send('This is the About Page of our Express.js app.');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

### **Steps to Run the Server:**
1. Save the file as `server.js`.
2. Run the server using:
   ```bash
   node server.js
   ```
3. Open a browser and visit:
   - `http://localhost:3000/` for the homepage.
   - `http://localhost:3000/about` for the About page.

---

## **Key Features of Express.js** ✨
1. **Simplified Routing:**
   - Handle HTTP requests with ease using methods like `.get()`, `.post()`, `.put()`, and `.delete()`.

2. **Middleware Support:**
   - Use built-in and third-party middleware for tasks like logging, parsing requests, and handling static files.

3. **Template Engines:**
   - Render dynamic HTML using templating engines like EJS, Pug, or Handlebars.

4. **Extensibility:**
   - Add functionality via thousands of npm packages.

---

## **Enhance Your Server with Middleware** 🛠️
Middleware are functions that execute between a request and response cycle.

### Example: Logging Middleware
File: `server.js`
```javascript
// Import Express
const express = require('express');
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); // Pass control to the next middleware/route
});

// Route Handlers
app.get('/', (req, res) => {
  res.send('Welcome to Express with Middleware!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

## **Key Takeaways** 🧾
1. Express.js simplifies server and API creation compared to the core Node.js `http` module.
2. Setting up a basic Express server involves only a few lines of code.
3. Middleware enhances functionality by adding features like logging, security, and parsing.

---

### Next Steps 🚀
Tomorrow, we will learn about handling **POST Requests and Middleware in Express.js** to handle form data. See you then! 🎉

