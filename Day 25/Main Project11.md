# 📅 **Day 25: Manage Cart**

---

## 📝 **Overview**
Today’s focus is on comprehensive 🛒 cart management! Users will be able to:
- ➕ Add products to the cart  
- 🗑️ Remove items from the cart  
- 🔄 Update product quantities  
- 💵 View total price updates instantly  
- 🚀 Improve user experience with smooth cart operations  

---

## 🎯 **Topics Covered**
- ➕ Adding items to the cart  
- 🗑️ Removing products  
- 🔄 Updating quantities (increment/decrement)  
- 💵 Calculating total price dynamically  
- 🧹 Clearing the entire cart  

---

## 🛠️ **Implementation Steps**

### 1️⃣ **Frontend (Handlebars View)**
Update `cart.hbs` to show product details with action buttons:

```html
<div class="cart-item" id="item-{{product._id}}">
  <p>{{product.name}}</p>
  <div class="product-quantity">
    <button class="decrement-btn" data-id="{{product._id}}">➖</button>
    <span>{{product.quantity}}</span>
    <button class="increment-btn" data-id="{{product._id}}">➕</button>
  </div>
  <p>Price: ${{product.price}}</p>
  <button class="remove-btn" data-id="{{product._id}}">🗑️ Remove</button>
</div>
<p>Total: $<span id="total-price">{{totalPrice}}</span></p>
<button class="clear-cart-btn">🧹 Clear Cart</button>
```

---

### 2️⃣ **Client-Side JavaScript**
Handle quantity changes, removal, and cart clearing:

```js
document.querySelectorAll('.increment-btn').forEach(button => {
  button.addEventListener('click', () => updateQuantity(button.dataset.id, 1));
});

document.querySelectorAll('.decrement-btn').forEach(button => {
  button.addEventListener('click', () => updateQuantity(button.dataset.id, -1));
});

document.querySelectorAll('.remove-btn').forEach(button => {
  button.addEventListener('click', () => {
    fetch(`/cart/remove/${button.dataset.id}`, { method: 'DELETE' })
      .then(() => location.reload());
  });
});

document.querySelector('.clear-cart-btn').addEventListener('click', () => {
  fetch('/cart/clear', { method: 'DELETE' })
    .then(() => location.reload());
});

function updateQuantity(productId, change) {
  fetch(`/cart/update/${productId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ change })
  }).then(() => location.reload());
}
```

---

### 3️⃣ **Backend (Routes)**
Add routes in `cartRoutes.js`:

```js
router.patch('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { change } = req.body;
  await Cart.updateOne({ 'items.product': id }, { $inc: { 'items.$.quantity': change } });
  res.sendStatus(200);
});

router.delete('/remove/:id', async (req, res) => {
  const { id } = req.params;
  await Cart.updateOne({}, { $pull: { items: { product: id } } });
  res.sendStatus(200);
});

router.delete('/clear', async (req, res) => {
  await Cart.updateOne({}, { $set: { items: [] } });
  res.sendStatus(200);
});
```

---

## ⚙️ **Edge Cases & Considerations**
- 🛑 Prevent quantity from dropping below 1.  
- 🧹 Ensure cart clears without issues.  
- 💵 Update total price instantly upon changes.  
- 🖥️ Add loading indicators for better UX (optional).  

---

## ✅ **Result**
- Users can ➕ add, ➖ adjust, and 🗑️ remove products.  
- 🧹 Entire cart can be cleared with one click.  
- 💵 Total price reflects real-time changes.  

---

## 🚀 **Next Up:** 
👉 Day 26: Checkout Page & Payment Gateway Integration 💳

---

🔗 [Back to Roadmap](../README.md)

