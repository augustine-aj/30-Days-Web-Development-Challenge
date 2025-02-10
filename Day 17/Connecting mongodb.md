# Day 17: Connecting MongoDB with Node.js | Fetching and Storing Data 📦

## Overview 🌟
Today, we will connect **MongoDB** with our **Node.js** application and learn how to fetch and store data using **Mongoose**.

---

## **1. Installing MongoDB & Mongoose** 🛠️

### **Install MongoDB (if not installed)**
Follow the official guide to install MongoDB:
- [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/installation/)

### **Install Mongoose**
```bash
npm install mongoose
```

---

## **2. Setting Up MongoDB Connection** ⚡

Create a new file `db.js` inside a `config/` folder and set up the connection:

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected Successfully!');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
```

In `server.js`, import and call `connectDB()`:

```javascript
const connectDB = require('./config/db');
connectDB();
```

---

## **3. Creating a Model for Users** 👤

Inside `models/`, create a `User.js` file:

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
```

---

## **4. Storing Data into MongoDB** 📥

Inside `routes/user.js`, modify the file to include a route for saving users:

```javascript
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.send('User registered successfully!');
    } catch (error) {
        res.status(500).send('Error saving user');
    }
});

module.exports = router;
```

---

## **5. Fetching Data from MongoDB** 📤

Inside `routes/user.js`, add a route to fetch users:

```javascript
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
});
```

---

## **6. Summary & Next Steps** ✅
✅ Installed & Connected MongoDB
✅ Created a User Model
✅ Implemented Data Storage & Retrieval

### **Next Part:**
In **Day 18**, we will work on **authentication (JWT) and password encryption (bcrypt.js)! 🔐**
