var express = require('express')
var router = express.Router()
const MongoClient = require('mongodb').MongoClient

const client = new MongoClient('mongodb://localhost:27017/')

router.get('/', function(req, res, next){
  res.render('index')
})

router.post('/submit', async (req, res) => {
  console.log(req.body)
  try{
    await client.connect()
    let result = await client.db('sample').collection('Users').insertOne(req.body)
    console.log(result.insertedId)
  }catch(err){
    console.log(err)
    res.send('Error while creating your account...')
  }finally{
    res.send('Account created..')
  }
})

module.exports = router;
