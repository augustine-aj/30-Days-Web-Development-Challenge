# Day 12: Simple User Signup Page & Storing Data in MongoDB 🚀

## Overview 🌟
Today, we will create a **simple user signup page** and store the submitted user data into **MongoDB**. We will cover:

1. Setting up a basic Express.js server.
2. Creating a simple signup page using HTML & CSS.
3. Connecting to MongoDB using **Mongoose**.
4. Storing user data upon form submission.

<div align="center">
    <img src="../resources/images/nodejs_mongo.png" alt="Node Express Image" width="500" />
</div>

---

## **1. Setting Up Express.js Server** 🛠️

### **Install Dependencies**
First, ensure you have Node.js installed, then install the required packages:
```bash
npm init -y
npm install express mongoose body-parser ejs
```

### **Create Server (`server.js`)**
```javascript
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.render('signup');
});

app.post('/signup', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    await newUser.save();
    res.send("User Registered Successfully!");
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## **2. Create Signup Page (Views/signup.ejs)** 🎨

### **Signup Form**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup Page</title>
</head>
<body>
    <h2>Signup Form</h2>
    <form action="/signup" method="POST">
        <input type="text" name="name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Sign Up</button>
    </form>
</body>
</html>
```

---

## **3. Running the Application** 🚀

### **Start MongoDB Server**
Make sure MongoDB is running before executing the project:
```bash
mongod
```

### **Run the Node.js Server**
```bash
node server.js
```

### **Test the Application**
1. Open a browser and go to **`http://localhost:3000/`**
2. Fill out the form and click **Sign Up**.
3. Check MongoDB to see if the user is stored:
   ```bash
   mongo
   use userDB
   db.users.find().pretty()
   ```

---

## **Exercise for Day 12** 📝
1. Modify the form to include **age** and **phone number** fields.
2. Add client-side validation using JavaScript.
3. Redirect the user to a welcome page after successful registration.
4. Hash the password before storing it using **bcrypt.js**.

---

## **Key Takeaways** 🧾
- **Express.js** is used to handle routing.
- **MongoDB + Mongoose** allows structured data storage.
- Basic **EJS templating** is used for rendering views.
- **body-parser** processes form data efficiently.

---

### Next Steps 🚀
In **Day 13**, we will add **user login functionality** and password encryption for improved security. 🌟

