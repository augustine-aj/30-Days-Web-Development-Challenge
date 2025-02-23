# Day 21: 🛠️ Product Editing – Admin Page

## Overview 📄
Today's focus is on **implementing product editing functionality** in the admin panel of the eCommerce application. Admins will be able to:
- View the list of products 🛍️
- Edit product details ✏️
- Update the database with new values 💾

---

## **1. Setting Up Routes** 🛣️
Create or update `routes/admin.js`:

```javascript
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// GET: Admin - Product List 📋
router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.render('admin/products', { products });
});

// GET: Edit Product Form ✏️
router.get('/products/edit/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('admin/editProduct', { product });
});

// POST: Update Product 🔄
router.post('/products/edit/:id', async (req, res) => {
    const { name, price, description } = req.body;

    await Product.findByIdAndUpdate(req.params.id, {
        name,
        price,
        description
    });

    res.redirect('/admin/products');
});

module.exports = router;
```

---

## **2. Creating Views** 🖥️
### 📋 `views/admin/products.handlebars` – Product List
```handlebars
<h2>📦 Product List</h2>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
        {{#each products}}
        <tr>
            <td>{{this.name}}</td>
            <td>${{this.price}}</td>
            <td>{{this.description}}</td>
            <td><a href="/admin/products/edit/{{this._id}}">✏️ Edit</a></td>
        </tr>
        {{/each}}
    </tbody>
</table>
```

---
### 📝 `views/admin/editProduct.handlebars` – Edit Form
```handlebars
<h2>✏️ Edit Product</h2>
<form action="/admin/products/edit/{{product._id}}" method="POST">
    <label>Name:</label>
    <input type="text" name="name" value="{{product.name}}" required>

    <label>Price:</label>
    <input type="number" name="price" value="{{product.price}}" step="0.01" required>

    <label>Description:</label>
    <textarea name="description" required>{{product.description}}</textarea>

    <button type="submit">💾 Save Changes</button>
</form>
<a href="/admin/products">🔙 Back to Products</a>
```

---

## **3. Testing the Flow** 🧪
✅ Visit `/admin/products` to see the product list.  
✏️ Click on **Edit** to modify details.  
💾 Save changes and verify the updates in the database.  

---

## **4. Optional Enhancements 🌟**
- Add image upload functionality 📷
- Use modals for in-page editing 🪟
- Add confirmation prompts before saving changes ✅

---

## **5. Summary & Next Steps** ✅
✅ Implemented **product editing** for admins ✏️  
✅ Updated products stored in **MongoDB** 💾  
✅ Enhanced admin control over the product catalog 🛍️  

### **Coming Up – Day 22:**
➡️ **Product deletion** with confirmation prompts 🗑️⚠️

