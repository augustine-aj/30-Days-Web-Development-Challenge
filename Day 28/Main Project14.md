# 📅 **Day 28: Payment Gateway & Order List**

---

## 📝 **Overview**

Today's focus is on integrating a payment gateway for secure transactions and implementing an order list feature for users to track their purchases.

---

## 🎯 **Topics Covered**

- 💳 Integrating Payment Gateway (e.g., Stripe, PayPal)
- 🛒 Processing Payments Securely
- 📦 Displaying Order List for Users
- 🚀 Enhancing User Experience

---

## 🛠️ **Implementation Steps**

### 1️⃣ **Frontend (Payment Button & Order List View)**

Update `checkout.hbs` to include the payment button:

```html
<form action="/pay" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js"
    class="stripe-button"
    data-key="YOUR_PUBLIC_STRIPE_KEY"
    data-amount="{{totalPrice}}"
    data-name="E-commerce Store"
    data-description="Complete your purchase"
    data-currency="usd">
  </script>
</form>
```

Create `orderList.hbs` to display order history:

```html
<h2>Your Orders</h2>
<ul>
  {{#each orders}}
  <li>Order ID: {{this._id}}, Status: {{this.status}}, Amount: ${{this.totalAmount}}</li>
  {{/each}}
</ul>
```

---

### 2️⃣ **Backend (Routes for Payment & Order List)**

#### **Payment Processing (Stripe Example)**

Create an API route in `paymentRoutes.js` to handle payments:

```js
const stripe = require('stripe')('YOUR_SECRET_STRIPE_KEY');

router.post('/pay', async (req, res) => {
  const { stripeToken, amount } = req.body;
  try {
    await stripe.charges.create({
      amount,
      currency: 'usd',
      source: stripeToken,
      description: 'E-commerce Purchase'
    });
    res.redirect('/orders');
  } catch (error) {
    res.status(500).send('Payment failed!');
  }
});
```

#### **Fetching Order List**

Create an API route in `orderRoutes.js` to fetch user orders:

```js
router.get('/orders', async (req, res) => {
  const orders = await Order.find({ userId: req.user._id });
  res.render('orderList', { orders });
});
```

---

## ⚙️ **Edge Cases & Considerations**

- 🛑 Validate payment details before processing transactions.
- 🔄 Allow users to filter orders by status.
- 📩 Send email confirmation upon successful payment.

---

## ✅ **Result**

- 💳 Secure payment integration implemented.
- 📦 Users can view their order history.
- 🚀 Enhanced user experience with a smooth checkout process.

---

## 🚀 **Next Up:**

👉 Day 29: Order Status Updates & Refund Processing 🔄

---

🔗 [Back to Roadmap](../README.md)

