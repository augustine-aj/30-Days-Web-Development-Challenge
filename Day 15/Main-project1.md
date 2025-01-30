# Ecommerce Website: Part 1 🚀

## Overview 🌟
In this part of the **Ecommerce Website Project**, we will focus on:
- Installing necessary libraries 📦
- Creating a **Card View** 🛒
- Setting up a product **Array** 📋
- Integrating **Express Handlebars** 🏗️

<div align="center">
    <img src="../resources/images/df.png" alt="" width="500" />
</div>

---

## **1. Installing Required Libraries** 📦
To start, install the following dependencies:
```bash
npm init -y  # Initialize Node.js project
npm install express express-handlebars body-parser
```
### **Library Explanation**
- `express`: Fast, minimal web framework for Node.js 🌐
- `express-handlebars`: Templating engine for dynamic HTML rendering 🎨
- `body-parser`: Middleware to handle form data processing 📝

---

## **2. Setting Up Express & Handlebars** 🏗️
Create an **Express server** and configure **Handlebars**:

### **server.js**
```javascript
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = 3000;

// Set Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Middleware to serve static files
app.use(express.static('public'));

// Sample route
app.get('/', (req, res) => {
    res.render('home', { title: 'Ecommerce Store' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## **3. Creating the Product Array** 📋
Define a sample list of products:
```javascript
const products = [
    { id: 1, name: "Book A", price: 10, image: "book-a.jpg" },
    { id: 2, name: "Book B", price: 15, image: "book-b.jpg" },
    { id: 3, name: "Book C", price: 20, image: "book-c.jpg" }
];
```

---

## **4. Creating the Card View** 🛒
Create a **home.handlebars** file inside the `views/` directory:
```handlebars
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <h1>Welcome to the Ecommerce Store</h1>
    <div class="product-list">
        {{#each products}}
        <div class="card">
            <img src="{{this.image}}" alt="{{this.name}}">
            <h3>{{this.name}}</h3>
            <p>Price: ${{this.price}}</p>
        </div>
        {{/each}}
    </div>
</body>
</html>
```

---

## **5. Summary & Next Steps** ✅
✅ Installed required libraries 🛠️
✅ Set up Express & Handlebars 🏗️
✅ Created a product array 📋
✅ Developed a basic Card View 🛒

### **Next Part:**
In **Part 2**, we will **connect MongoDB**, implement **Add to Cart functionality**, and handle **product details**! 🚀

