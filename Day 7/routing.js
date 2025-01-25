const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer(
    (req, res) => {
        const q = url.parse(req.url, true)
        if(q.pathname==='/'){
            fs.readFile(
                'index.html',
                (err, data) => {
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.write(data)
                    res.end()
                }
            )
        }else if(q.pathname==='/signup'){
            fs.readFile(
                'signup.html',
                (err, data) =>{
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.write(data)
                    res.end()
                }
            )
        }else if(q.pathname==='/signup_action'){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('<h1>Hello, ' + q.query.fname + ' You are registered succesfully...</h1>')  
            res.end()          
        }else{
            res.write('Invalid URL...')
            res.end()
        }
    }
).listen(7000, () => console.log('Server created...'))