# 📅 **Day 24: Product Quantity Increment and Decrement**

---

## 📝 **Overview**
Today, we will implement product quantity adjustments (➕ increment and ➖ decrement) in the shopping cart. This improves user experience by allowing quantity changes directly from the cart page. 🛒

---

## 🎯 **Topics Covered**
- ➕ Increasing product quantity  
- ➖ Decreasing product quantity  
- 🛑 Handling edge cases (minimum quantity = 1)  
- 🔄 Updating total price dynamically

---

## 🛠️ **Steps to Implement**

### 1️⃣ **Frontend (Handlebars View)**
Add buttons for incrementing and decrementing quantity in your cart view (`cart.hbs`):

```html
<div class="product-quantity">
  <button class="decrement-btn" data-id="{{product._id}}">➖</button>
  <span>{{product.quantity}}</span>
  <button class="increment-btn" data-id="{{product._id}}">➕</button>
</div>
```

---

### 2️⃣ **Client-Side JavaScript**
Handle button clicks to make API calls:

```js
document.querySelectorAll('.increment-btn').forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.id;
    fetch(`/cart/increment/${productId}`, { method: 'POST' })
      .then(response => location.reload());
  });
});

document.querySelectorAll('.decrement-btn').forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.id;
    fetch(`/cart/decrement/${productId}`, { method: 'POST' })
      .then(response => location.reload());
  });
});
```

---

### 3️⃣ **Backend (Routes)**
Add routes in `cartRoutes.js`:

```js
router.post('/increment/:id', async (req, res) => {
  const productId = req.params.id;
  await Cart.updateOne({ 'items.product': productId }, { $inc: { 'items.$.quantity': 1 } });
  res.sendStatus(200);
});

router.post('/decrement/:id', async (req, res) => {
  const productId = req.params.id;
  const cartItem = await Cart.findOne({ 'items.product': productId });
  if (cartItem.items[0].quantity > 1) {
    await Cart.updateOne({ 'items.product': productId }, { $inc: { 'items.$.quantity': -1 } });
  }
  res.sendStatus(200);
});
```

---

## ⚠️ **Edge Cases & Considerations**
- Prevent quantity from going below 1 🛑  
- Update total price dynamically 💵  
- Reflect changes without a full page reload (optional: use AJAX for better UX) 🚀

---

## ✅ **Result**
- Users can now adjust product quantities directly from the cart! 🛒
- Quantity won't drop below 1 to prevent empty items.  
- Total price updates dynamically with quantity changes. 💰

---

## 🚀 **Next Up:** 
👉 Day 25: Checkout Flow & Payment Integration 💳

---

🔗 [Back to Roadmap](../README.md)

