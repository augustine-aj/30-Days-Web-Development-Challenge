# Day 19: User Signup | Bcrypt | Session Management 🔒

## Overview 🚀
Today, we will implement **user signup** functionality, **password hashing** using `bcrypt`, and **session management** to maintain user login states.

---

## **1. Installing Required Packages** 📦
Run the following command to install necessary packages:

```bash
npm install bcrypt express-session connect-mongo
```

- **bcrypt**: For securely hashing passwords 🔑
- **express-session**: To handle user sessions 🗝️
- **connect-mongo**: To store sessions in MongoDB 🗄️

---

## **2. Setting Up Session Middleware** 🛡️
Update `app.js` to include session handling:

```javascript
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/ecommerce' }),
    cookie: { maxAge: 1000 * 60 * 60 } // 1-hour session expiry
}));
```

---

## **3. Creating the User Model** 📝
Create a file `models/User.js`:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

module.exports = mongoose.model('User', userSchema);
```

---

## **4. Building the Signup Route** 📝
Create a route in `routes/auth.js` for user registration:

```javascript
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        req.session.userId = user._id;
        res.redirect('/dashboard');
    } catch (err) {
        res.status(400).send('Error creating user');
    }
});

module.exports = router;
```

---

## **5. Creating Signup Form** 🖊️
Add `views/signup.handlebars`:

```handlebars
<h2>Signup</h2>
<form action="/signup" method="POST">
    <input type="text" name="name" placeholder="Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Signup</button>
</form>
```

---

## **6. Protecting Routes** 🛡️
Create middleware to protect routes in `middleware/auth.js`:

```javascript
module.exports = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    res.redirect('/signup');
};
```

Apply it to protected routes:

```javascript
const auth = require('../middleware/auth');
router.get('/dashboard', auth, (req, res) => {
    res.render('dashboard');
});
```

---

## **7. Summary & Next Steps** ✅
✅ Implemented **user signup** and **password hashing** 🔑  
✅ Established **session management** to maintain login states 🗝️  
✅ Secured protected routes 🔒  

### **Next Part:**
On **Day 20**, we will focus on **user login** functionality and **logout handling**! 🚪✨
