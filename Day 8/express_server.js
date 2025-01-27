const express = require('express')
const app = express()
const path = require('path')

const PORT = 3000

app.use((req, res, next)=> {
    console.log(`User requested: ${req.method}, url: ${req.url}`)
    next()
}) 

app.listen(PORT, () => {
    console.log('Server created...')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../signup.html'))
})

app.post('/signup', (req, res) => {
    res.send('Account created....')
})

app.get('/about', (req, res) => {
    res.send('about..')
})