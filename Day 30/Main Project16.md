# 📅 **Day 30: Product Search & Admin Login**

---

## 📝 **Overview**
Today's focus is on implementing a search functionality for products and setting up an admin login system for better management.

---

## 🎯 **Topics Covered**
- 🔍 Implementing Product Search  
- 🔑 Admin Login with Authentication  
- 🔄 Secure Route Handling  
- 📊 Optimized Query Performance  

---

## 🛠️ **Implementation Steps**

### 1️⃣ **Product Search (User Side)**

#### **Frontend (Search Bar UI)**
Update `index.hbs`:

```html
<form action="/search" method="GET">
  <input type="text" name="query" placeholder="Search products..." required>
  <button type="submit">🔍 Search</button>
</form>
```

#### **Backend (Search Route)**
Add the following route in `productRoutes.js`:

```js
router.get('/search', async (req, res) => {
  const query = req.query.query;
  const products = await Product.find({ name: { $regex: query, $options: 'i' } });
  res.render('productList', { products });
});
```

---

### 2️⃣ **Admin Login System**

#### **Frontend (Admin Login Page UI)**
Create `adminLogin.hbs`:

```html
<h2>Admin Login</h2>
<form action="/admin/login" method="POST">
  <input type="text" name="username" placeholder="Username" required>
  <input type="password" name="password" placeholder="Password" required>
  <button type="submit">🔑 Login</button>
</form>
```

#### **Backend (Admin Authentication Route)**
Add the following route in `adminRoutes.js`:

```js
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(400).send('Invalid credentials');

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).send('Invalid credentials');

  req.session.admin = admin;
  res.redirect('/admin/dashboard');
});
```

---

## ⚙️ **Edge Cases & Considerations**
- 🔒 Protect admin routes using session authentication.  
- 🚀 Optimize search queries for performance.  
- 📧 Implement password hashing for security.  

---

## ✅ **Result**
- 🔍 Users can search for products efficiently.  
- 🔑 Admins can securely log in to manage the store.  
- 🏗️ Better security and user experience.  

---

## 🎉 **Final Project Review & Deployment**
👉 🚀 Deploying the E-commerce App on **Vercel / Heroku**  
👉 🔧 Debugging & Final Fixes  
👉 📂 Documentation & Code Cleanup  

---

🔗 [Back to Roadmap](../README.md)

