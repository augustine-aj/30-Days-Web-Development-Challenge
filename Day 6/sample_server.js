const http = require('http')
const fs = require('fs')

http.createServer(
    (req, res) =>{
        fs.readFile(
            'index.html',
            (err, data) =>{
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                res.end()
            }
        )
    }
).listen(7000, () => console.log('Server started...'))
