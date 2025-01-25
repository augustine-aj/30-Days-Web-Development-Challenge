# Day 7: Routing and GET Requests (Without Using Express)

## Overview 🌐
Today, we will explore how to handle routing and process GET requests using the core Node.js `http` module without relying on Express.js or other frameworks.

This session will help us understand how servers handle client requests and serve different responses based on the URL.

---

## **What is Routing?** 🚦
Routing refers to defining application endpoints (routes) and how the server responds to client requests to these endpoints.

For example:
- Visiting `http://localhost:3000/` serves a homepage.
- Visiting `http://localhost:3000/about` serves an "About" page.

<div align="center">
    <img src="../resources/images/routing.jpg" alt="Node Express Image" width="500" />
</div>

---

## **Creating a Server with Routing** 🖥️
Here, we define multiple routes and respond differently based on the client's request URL.

### **Example Code**
File: `server.js`
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Homepage!');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the About Page.');
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact us at: contact@example.com');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

### **Steps to Run the Code:**
1. Save the file as `server.js`.
2. Start the server using:
   ```bash
   node server.js
   ```
3. Open a browser or use a tool like Postman to test the routes:
   - Visit `http://localhost:3000/` for the homepage.
   - Visit `http://localhost:3000/about` for the About page.
   - Visit `http://localhost:3000/contact` for the Contact page.
   - Visit an undefined route (e.g., `http://localhost:3000/random`) to see the 404 error message.

---

## **Serving HTML Content** 📄
We can enhance the server to serve actual HTML pages instead of plain text.

### **Example Code**
File: `server.js`
```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

### **Creating the HTML File**
File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome</title>
</head>
<body>
  <h1>Welcome to My Node.js Server</h1>
  <p>This is served as HTML content.</p>
</body>
</html>
```

---

## **Key Takeaways** 🧾
By the end of Day 7, you will:
1. Understand how to implement routing using the `http` module. 🚦
2. Create a Node.js server that processes GET requests.
3. Serve static HTML content based on the request URL.

---

### Next Steps 🚀
Tomorrow, we will dive into **POST Requests and Handling Form Data Without Express**. Stay tuned!

