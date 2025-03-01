# 📅 **Day 27: Order Placing**

---

## 📝 **Overview**
Today's focus is on implementing the order placement feature. Users will be able to:
- 🛍️ Place an order from their cart  
- 📦 Store order details in the database  
- ✉️ Receive order confirmation  
- 🚀 Improve checkout process efficiency  

---

## 🎯 **Topics Covered**
- 🛒 Capturing order details  
- 💾 Storing orders in MongoDB  
- 🔔 Sending confirmation messages  
- 🚀 Enhancing user experience  

---

## 🛠️ **Implementation Steps**

### 1️⃣ **Frontend (Handlebars View)**
Update `checkout.hbs` to include the order button:

```html
<button id="place-order-btn">Place Order</button>
```

---

### 2️⃣ **Client-Side JavaScript**
Ensure order placement on button click:

```js
document.getElementById('place-order-btn').addEventListener('click', () => {
  fetch('/order/place', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      window.location.href = '/orders';
    });
});
```

---

### 3️⃣ **Backend (Routes)**
Create an API route in `orderRoutes.js` to handle order placement:

```js
router.post('/place', async (req, res) => {
  const cart = await Cart.findOne();
  const order = new Order({
    userId: req.user._id,
    items: cart.items,
    totalAmount: cart.items.reduce((sum, item) => sum + item.quantity * item.product.price, 0),
    status: 'Pending'
  });
  await order.save();
  await Cart.deleteOne({ userId: req.user._id });
  res.json({ message: 'Order placed successfully!' });
});
```

---

## ⚙️ **Edge Cases & Considerations**
- 🛑 Ensure stock availability before placing an order.  
- 📨 Send order confirmation via email or notification.  
- 🔄 Allow users to track their orders.  

---

## ✅ **Result**
- 🛒 Users can successfully place orders.  
- 💾 Orders are stored and managed efficiently.  
- 🚀 Checkout process is streamlined.  

---

## 🚀 **Next Up:** 
👉 Day 28: Order History & Status Tracking 📦

---

🔗 [Back to Roadmap](../README.md)

