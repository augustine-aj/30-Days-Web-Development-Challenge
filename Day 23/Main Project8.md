# Day 23: 🛒 Add to Cart (Continued) & Checkout Integration 💳

## Overview 📄
Building upon the previous day, today’s focus is on:
- Adjusting **product quantities** in the cart ➕➖
- **Removing items** from the cart 🗑️
- **Implementing the checkout** process with order placement ✅

---

## **1. Enhancing Cart Functionality 🛍️**
### 🔄 Update Quantity Route
#### 📁 `routes/user.js`
```javascript
// POST: Update Quantity ➕➖
router.post('/cart/update/:productId', async (req, res) => {
    const { productId } = req.params;
    const { action } = req.body; // 'increase' or 'decrease'
    const userId = req.session.userId;

    const cart = await Cart.findOne({ user: userId });
    const item = cart.items.find(i => i.product.toString() === productId);

    if (item) {
        item.quantity += action === 'increase' ? 1 : -1;
        if (item.quantity <= 0) {
            cart.items = cart.items.filter(i => i.product.toString() !== productId);
        }
        await cart.save();
    }

    res.redirect('/cart');
});
```

---

## **2. Removing Items from Cart 🗑️**
#### 📁 `routes/user.js`
```javascript
// POST: Remove Item 🗑️
router.post('/cart/remove/:productId', async (req, res) => {
    const { productId } = req.params;
    await Cart.updateOne(
        { user: req.session.userId },
        { $pull: { items: { product: productId } } }
    );
    res.redirect('/cart');
});
```

---

## **3. Creating Views 🖥️**
#### 🛒 `views/user/cart.handlebars`
```handlebars
<h2>🛒 Your Cart</h2>
<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {{#each cart.items}}
        <tr>
            <td>{{this.name}}</td>
            <td>{{this.quantity}}</td>
            <td>${{this.price}}</td>
            <td>
                <form action="/cart/update/{{this.productId}}" method="POST" style="display:inline;">
                    <button name="action" value="increase">➕</button>
                    <button name="action" value="decrease">➖</button>
                </form>
                <form action="/cart/remove/{{this.productId}}" method="POST" style="display:inline;">
                    <button>🗑️</button>
                </form>
            </td>
        </tr>
        {{/each}}
    </tbody>
</table>
<h3>Total: ${{cart.total}}</h3>
<a href="/checkout">Proceed to Checkout 💳</a>
```

---

## **4. Checkout Process 💳**
### 📝 `routes/checkout.js`
```javascript
const express = require('express');
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const router = express.Router();

// GET: Checkout Page 🧾
router.get('/checkout', async (req, res) => {
    const cart = await Cart.findOne({ user: req.session.userId });
    res.render('user/checkout', { cart });
});

// POST: Place Order ✅
router.post('/checkout', async (req, res) => {
    const userId = req.session.userId;
    const cart = await Cart.findOne({ user: userId });

    if (!cart || cart.items.length === 0) return res.redirect('/cart');

    const order = new Order({ user: userId, items: cart.items, total: cart.items.reduce((acc, item) => acc + (item.quantity * item.product.price), 0) });
    await order.save();

    await Cart.updateOne({ user: userId }, { $set: { items: [] } });
    res.render('user/confirmation', { order });
});

module.exports = router;
```

---

## **5. Checkout View 🖥️**
#### 🧾 `views/user/checkout.handlebars`
```handlebars
<h2>💳 Checkout</h2>
<p>Total Amount: ${{cart.total}}</p>
<form action="/checkout" method="POST">
    <button type="submit">Place Order ✅</button>
</form>
```

#### 🎉 `views/user/confirmation.handlebars`
```handlebars
<h2>✅ Order Confirmed!</h2>
<p>Your order total is ${{order.total}}. Thank you for shopping with us! 🛍️</p>
<a href="/">🔙 Return Home</a>
```

---

## **6. Optional Enhancements 🌟**
- **Payment gateway integration** 💳 (Stripe/PayPal)
- **Order history** for users 📜
- **Email confirmation** after order placement 📧
- **Coupon codes** for discounts 🎟️

---

## **7. Summary & Next Steps 🚀**
✅ Added **quantity adjustments** ➕➖ and **item removal** 🗑️  
✅ Implemented **checkout process** with order placement 💳  
✅ Improved overall shopping experience 🛍️  

### **Coming Up – Day 24:**
➡️ **Payment gateway integration** and **order tracking** 🔔📦

