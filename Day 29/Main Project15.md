# 📅 **Day 29: Order List**

---

## 📝 **Overview**

Today's focus is on displaying the order list for users and admins, ensuring a seamless experience for tracking purchases and order management.

---

## 🎯 **Topics Covered**

- 📦 Fetching Order List from MongoDB
- 🛒 Displaying Orders for Users & Admins
- 🔄 Filtering Orders by Status
- 📩 Sending Order Confirmation Emails

---

## 🛠️ **Implementation Steps**

### 1️⃣ **Frontend (User & Admin Order List Views)**

Update `orderList.hbs` for users:

```html
<h2>Your Orders</h2>
<ul>
  {{#each orders}}
  <li>Order ID: {{this._id}}, Status: {{this.status}}, Amount: ${{this.totalAmount}}</li>
  {{/each}}
</ul>
```

Create `adminOrderList.hbs` for admin order management:

```html
<h2>Admin Order Management</h2>
<table>
  <tr>
    <th>Order ID</th>
    <th>User</th>
    <th>Status</th>
    <th>Total</th>
    <th>Actions</th>
  </tr>
  {{#each orders}}
  <tr>
    <td>{{this._id}}</td>
    <td>{{this.userId}}</td>
    <td>{{this.status}}</td>
    <td>${{this.totalAmount}}</td>
    <td>
      <form action="/admin/updateOrder" method="POST">
        <input type="hidden" name="orderId" value="{{this._id}}">
        <select name="status">
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </td>
  </tr>
  {{/each}}
</table>
```

---

### 2️⃣ **Backend (Routes for Fetching & Updating Orders)**

#### **Fetching User Orders**

Create an API route in `orderRoutes.js`:

```js
router.get('/orders', async (req, res) => {
  const orders = await Order.find({ userId: req.user._id });
  res.render('orderList', { orders });
});
```

#### **Fetching Orders for Admin**

```js
router.get('/admin/orders', async (req, res) => {
  const orders = await Order.find();
  res.render('adminOrderList', { orders });
});
```

#### **Updating Order Status (Admin Only)**

```js
router.post('/admin/updateOrder', async (req, res) => {
  const { orderId, status } = req.body;
  await Order.findByIdAndUpdate(orderId, { status });
  res.redirect('/admin/orders');
});
```

---

## ⚙️ **Edge Cases & Considerations**

- 🛑 Prevent unauthorized access to admin routes.
- 🔄 Allow users to filter orders by status.
- 📩 Send email confirmation when the order status changes.

---

## ✅ **Result**

- 📦 Users can view their order history.
- 🛒 Admins can manage and update orders.
- 🚀 Streamlined order management system.

---

## 🚀 **Next Up:**

👉 Day 30: Final Project Review & Deployment 🌐

---

🔗 [Back to Roadmap](../README.md)

