# Day 20: User Validation – Checking Valid and Invalid Users ✅❌

## Overview 🚀
Today’s focus is on **validating user login** by checking credentials against stored data in MongoDB. We’ll handle:
- **Login form creation** 📝
- **Valid and invalid user handling** ✅❌
- **Session management for logged-in users** 🛡️
- **Error messages for invalid attempts** ⚠️

---

## **1. Installing Required Packages** 📦
Ensure you have `bcrypt` and `express-session` installed:

```bash
npm install bcrypt express-session
```

---

## **2. Setting Up Login Routes** 🛠️
Create a login route in `routes/auth.js`:

```javascript
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// GET Login Page
router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// POST Login Form
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.render('login', { error: 'User not found ❌' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.render('login', { error: 'Invalid password 🔒' });
        }

        req.session.userId = user._id;  // Save user session
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).send('Server error ⚠️');
    }
});

module.exports = router;
```

---

## **3. Creating the Login Form** 📝
Add `views/login.handlebars`:

```handlebars
<h2>🔑 Login</h2>
<form action="/login" method="POST">
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Login</button>
</form>
{{#if error}}
    <p style="color:red;">⚠️ {{error}}</p>
{{/if}}
```

---

## **4. Protecting Routes with Middleware** 🛡️
Use the authentication middleware to restrict access:

```javascript
const auth = (req, res, next) => {
    if (req.session.userId) return next();
    res.redirect('/login');
};

router.get('/dashboard', auth, (req, res) => {
    res.render('dashboard', { message: 'Welcome back! 🎉' });
});
```

---

## **5. Logout Route** 🚪
Add the following to `routes/auth.js`:

```javascript
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});
```

Add a logout button to `dashboard.handlebars`:

```handlebars
<a href="/logout">🚪 Logout</a>
```

---

## **6. Testing the Flow** 🧪
✅ **Valid user credentials:** Redirects to dashboard with a welcome message 🎊  
❌ **Invalid email or password:** Displays an error message ⚠️  
🚪 **Logout:** Ends the session and redirects to login 🔒  

---

## **7. Summary & Next Steps** ✅
✅ Implemented **user login validation** 🛡️  
✅ Handled **valid/invalid credential checking** ✅❌  
✅ Added **logout functionality** 🚪  

### **Coming Up – Day 21:**
➡️ Password reset functionality and email verification! 📧✨

