# Day 18: Data Added to Admin Page | Card Alignment 🎨

## Overview 🌟
Today, we will enhance the **Admin Dashboard** by displaying stored data in a structured card format and aligning elements properly.

---

## **1. Fetching Data for Admin Page** 📥
Modify `routes/admin.js` to retrieve and display product/user data:

```javascript
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');

router.get('/dashboard', async (req, res) => {
    try {
        const users = await User.find();
        const products = await Product.find();
        res.render('admin-dashboard', { users, products });
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

module.exports = router;
```

---

## **2. Updating Admin Dashboard View** 📊
Modify `views/admin-dashboard.handlebars` to display fetched data in **cards**:

```handlebars
<h2>Admin Dashboard</h2>
<div class="container">
    <h3>Users</h3>
    <div class="card-container">
        {{#each users}}
        <div class="card">
            <h4>{{this.name}}</h4>
            <p>Email: {{this.email}}</p>
        </div>
        {{/each}}
    </div>

    <h3>Products</h3>
    <div class="card-container">
        {{#each products}}
        <div class="card">
            <h4>{{this.name}}</h4>
            <p>Price: ${{this.price}}</p>
        </div>
        {{/each}}
    </div>
</div>
```

---

## **3. Styling the Cards for Alignment** 🎨
Modify `public/css/style.css` to align cards properly:

```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.card {
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    width: 200px;
    text-align: center;
}
```

---

## **4. Summary & Next Steps** ✅
✅ Added fetched data to the **Admin Dashboard**
✅ Designed and aligned cards using **CSS**
✅ Improved the user interface for better readability

### **Next Part:**
In **Day 19**, we will work on **adding CRUD operations for products and users from the Admin Page! 🛠️**

