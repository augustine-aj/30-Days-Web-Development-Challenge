# Day 16: Route Setting | Project E-commerce Application for Admin and Users 🚀

## Overview 🌟
In this section, we will set up routing for our **E-commerce Application** to handle both **admin** and **user** functionalities.

---

## **1. Setting Up Routes in Express** 🛠️
We will create separate routes for **admin** and **users**.

### **Installation (if not already installed)**
```bash
npm install express
```

### **Create Route Files**
Inside the `routes/` folder, create two files: `admin.js` and `user.js`.

#### **admin.js (Admin Routes)**
```javascript
const express = require('express');
const router = express.Router();

// Admin Dashboard Route
router.get('/dashboard', (req, res) => {
    res.send('Admin Dashboard');
});

// Manage Products Route
router.get('/products', (req, res) => {
    res.send('Manage Products');
});

module.exports = router;
```

#### **user.js (User Routes)**
```javascript
const express = require('express');
const router = express.Router();

// User Homepage Route
router.get('/', (req, res) => {
    res.send('Welcome to the E-commerce Store');
});

// User Product Listing Route
router.get('/shop', (req, res) => {
    res.send('Browse Products');
});

module.exports = router;
```

---

## **2. Integrating Routes in Server.js** 🚀
Modify `server.js` to include the newly created routes.

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Import Routes
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

// Middleware to use routes
app.use('/admin', adminRoutes);
app.use('/', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## **3. Summary & Next Steps** ✅
✅ Created separate routes for **Admin** and **User**
✅ Integrated routes into the main server file
✅ Organized the project structure

### **Next Part:**
In **Day 17**, we will implement **authentication and authorization** for users and admins! 🔐

