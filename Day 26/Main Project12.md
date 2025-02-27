# 📅 **Day 26: Total Price of Cart Products**

---

## 📝 **Overview**
Today’s focus is on calculating and displaying the total price of items in the cart dynamically. Users will be able to:
- 🛒 View the total price of all products in the cart  
- 🔄 Update total price dynamically when adding or removing items  
- 🚀 Improve the checkout experience with accurate pricing  

---

## 🎯 **Topics Covered**
- 🧮 Total price calculation  
- 🔄 Real-time updates upon cart changes  
- 💵 Display formatted prices  
- 🖥️ Optimized user experience  

---

## 🛠️ **Implementation Steps**

### 1️⃣ **Frontend (Handlebars View)**
Update `cart.hbs` to include the total price section:

```html
<div class="cart-total">
  <h3>Total Price: $<span id="total-price">{{totalPrice}}</span></h3>
</div>
```

---

### 2️⃣ **Client-Side JavaScript**
Ensure the total price updates dynamically:

```js
function updateTotalPrice() {
  fetch('/cart/total-price')
    .then(response => response.json())
    .then(data => {
      document.getElementById('total-price').textContent = data.totalPrice.toFixed(2);
    });
}

document.querySelectorAll('.increment-btn, .decrement-btn, .remove-btn').forEach(button => {
  button.addEventListener('click', () => setTimeout(updateTotalPrice, 300));
});
```

---

### 3️⃣ **Backend (Routes)**
Create an API route in `cartRoutes.js` to calculate total price:

```js
router.get('/total-price', async (req, res) => {
  const cart = await Cart.findOne();
  const totalPrice = cart.items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
  res.json({ totalPrice });
});
```

---

## ⚙️ **Edge Cases & Considerations**
- 🛑 Ensure calculations reflect real-time updates.  
- 💰 Format prices correctly to 2 decimal places.  
- 🔄 Reload total price smoothly without refreshing the page.  

---

## ✅ **Result**
- 🛒 Users can see the total cost of their cart.  
- 🔄 Changes in quantity reflect instantly.  
- 💵 Checkout process becomes seamless.  

---

## 🚀 **Next Up:** 
👉 Day 27: Checkout & Payment Gateway Integration 💳

---

🔗 [Back to Roadmap](../README.md)

