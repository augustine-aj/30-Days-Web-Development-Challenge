# Day 22: 🛒 Add to Cart & Aggregation 📊

## Overview 📄
Today's focus is on implementing the **Add to Cart** functionality and using **MongoDB aggregation** to manage cart details. Users will be able to:
- Add products to their cart 🛍️
- View cart with product details 🛒
- Calculate total prices using aggregation 📈

---

## **1. Setting Up Routes** 🛣️
### 🔗 `routes/user.js`
```javascript
const express = require('express');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const router = express.Router();

// POST: Add to Cart 🛒
router.post('/cart/add/:productId', async (req, res) => {
    const { productId } = req.params;
    const userId = req.session.userId;

    await Cart.updateOne(
        { user: userId },
        { $push: { items: { product: productId, quantity: 1 } } },
        { upsert: true }
    );

    res.redirect('/cart');
});

// GET: View Cart 📋
router.get('/cart', async (req, res) => {
    const cartItems = await Cart.aggregate([
        { $match: { user: req.session.userId } },
        { $unwind: '$items' },
        {
            $lookup: {
                from: 'products',
                localField: 'items.product',
                foreignField: '_id',
                as: 'productDetails'
            }
        },
        { $unwind: '$productDetails' },
        {
            $group: {
                _id: null,
                items: { $push: { name: '$productDetails.name', price: '$productDetails.price', quantity: '$items.quantity' } },
                total: { $sum: { $multiply: ['$productDetails.price', '$items.quantity'] } }
            }
        }
    ]);

    res.render('user/cart', { cart: cartItems[0] });
});

module.exports = router;
```

---

## **2. Creating Models** 🗄️
### 📝 `models/Cart.js`
```javascript
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 }
        }
    ]
});

module.exports = mongoose.model('Cart', cartSchema);
```

---

## **3. Creating Views** 🖥️
### 🛍️ `views/user/cart.handlebars`
```handlebars
<h2>🛒 Your Cart</h2>
<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        {{#each cart.items}}
        <tr>
            <td>{{this.name}}</td>
            <td>{{this.quantity}}</td>
            <td>${{this.price}}</td>
        </tr>
        {{/each}}
    </tbody>
</table>
<h3>Total: ${{cart.total}}</h3>
<a href="/">🔙 Continue Shopping</a>
```

---

## **4. Testing the Flow** 🧪
✅ Visit the product page and add items to the cart 🛍️  
✅ Check the **cart page** to see products, quantities, and the total amount 📊  
✅ Verify that MongoDB aggregates data correctly 💾  

---

## **5. Optional Enhancements 🌟**
- Add **quantity adjustment buttons** ➕➖  
- Implement **cart item removal** 🗑️  
- Display **product images** in the cart 🖼️  
- Add **checkout functionality** 💳  

---

## **6. Summary & Next Steps** ✅
✅ Implemented **Add to Cart** functionality 🛒  
✅ Utilized **MongoDB aggregation** for cart totals 📈  
✅ Enhanced the user shopping experience 🛍️  

### **Coming Up – Day 23:**
➡️ **Checkout process and payment gateway integration** 💳🚀

