const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    let filePath = path.join(__dirname,'resources',req.url === '/' ? 'index.html' :req.url );
    let extName = path.extname(filePath);
    let contentType = 'text/html';
    console.log(extName)
    switch (extName){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case 'png':
            contentType = 'image/png';
            break;
        case 'jpg':
            contentType = 'image/jpg';
            break;
    }
    //Read File
    fs.readFile(filePath,(err,content)=>{
        if(err)
        {
            if(err.code == 'ENOENT')
            {
                //Page not found
                fs.readFile(path.join(__dirname,'resources','404.html'),(err,content)=>{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(content,'utf8')
                })
            }
            else
            {
                res.writeHead(500)
                res.end(`Server error ${err.code}`)
            }
        }
        else
        {
            //success
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content,'utf8')
        }
    })
});
const PORT = process.env.PORT || 8080
server.listen(PORT,()=>console.log(`Server running on port ${PORT}...`))
