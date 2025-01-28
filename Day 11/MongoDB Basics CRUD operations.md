# Day 11: Introduction to MongoDB & Basic CRUD Operations 🚀

## Overview 🌟
Today, we dive into **MongoDB**, a popular NoSQL database that stores data in JSON-like documents. We will cover:

1. An introduction to MongoDB.
2. Installation and setup.
3. Performing basic CRUD (Create, Read, Update, Delete) operations.

---

## **What is MongoDB?** 🤔
MongoDB is a **NoSQL database** designed for:
- **Flexibility**: Stores data in **documents** (similar to JSON objects).
- **Scalability**: Supports large-scale distributed applications.
- **Schema-less Design**: No fixed schema, enabling dynamic and nested fields.

<div align="center">
    <img src="../resources/images/mongodb.png" alt="" width="500" />
</div>

---

## **Installing MongoDB** 🛠️

### **Step 1: Download and Install MongoDB**
1. Go to the official [MongoDB website](https://www.mongodb.com/try/download/community) 🌐.
2. Choose your operating system and download the MongoDB Community Server.
3. Install MongoDB by following the installation wizard steps:
   - Select the setup type (**Complete** recommended).
   - Choose the default installation directory.

### **Step 2: Add MongoDB to PATH** (Windows Users)
To access MongoDB from the command line:
1. Add `C:\Program Files\MongoDB\Server\<version>\bin` to the PATH environment variable.
2. Restart your command prompt.

### **Step 3: Start MongoDB Server**
Start the MongoDB server using the following command:
```bash
mongod
```
This starts the database server.

---

## **Basic MongoDB Commands** 🛠️

### 1. **Access the MongoDB Shell**
To access the MongoDB shell, run:
```bash
mongo
```

### 2. **Check the Current Databases**
```bash
show dbs
```

### 3. **Create or Use a Database**
```bash
use myDatabase
```
If the database doesn't exist, it will be created when you insert data.

---

## **Basic CRUD Operations** ✨
CRUD represents the four basic operations: **Create**, **Read**, **Update**, and **Delete**.

### 1. **Create (Insert Data)**
Use the `insertOne` or `insertMany` command to add documents to a collection.
```javascript
// Insert a single document
use myDatabase;
db.users.insertOne({ name: "Alice", age: 25, city: "New York" });

// Insert multiple documents
use myDatabase;
db.users.insertMany([
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Carol", age: 22, city: "Chicago" }
]);
```

### 2. **Read (Query Data)**
Retrieve data using `find`.
```javascript
// Retrieve all documents
use myDatabase;
db.users.find();

// Retrieve documents with a filter
use myDatabase;
db.users.find({ age: { $gt: 25 } });
```

### 3. **Update (Modify Data)**
Update data using `updateOne`, `updateMany`, or `replaceOne`.
```javascript
// Update a single document
use myDatabase;
db.users.updateOne({ name: "Alice" }, { $set: { city: "San Francisco" } });

// Update multiple documents
use myDatabase;
db.users.updateMany({ age: { $lt: 30 } }, { $set: { isYoung: true } });
```

### 4. **Delete (Remove Data)**
Delete data using `deleteOne` or `deleteMany`.
```javascript
// Delete a single document
use myDatabase;
db.users.deleteOne({ name: "Carol" });

// Delete multiple documents
use myDatabase;
db.users.deleteMany({ age: { $lt: 25 } });
```

---

## **Exercise for Day 11** 📝
1. Install MongoDB and start the server.
2. Create a database named `testDatabase`.
3. Insert the following data into a collection named `products`:
    ```javascript
    [
        { name: "Laptop", price: 1000, category: "Electronics" },
        { name: "Chair", price: 100, category: "Furniture" },
        { name: "Pen", price: 2, category: "Stationery" }
    ]
    ```
4. Query for all products under `Electronics` category.
5. Update the price of all products in `Furniture` category by 20%.
6. Delete all products cheaper than $5.

---

## **Key Takeaways** 🧾
1. MongoDB uses a flexible JSON-like structure for storing data.
2. The CRUD operations form the building blocks of database management.
3. Dynamic schema design allows easy updates and extensions.

---

### Next Steps 🚀
In **Day 12**, we will explore Mongoose, an ODM (Object Data Modeling) library for MongoDB, and how it simplifies database interaction in Node.js applications. 🌟

