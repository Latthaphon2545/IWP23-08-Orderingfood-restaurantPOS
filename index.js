const http = require('http');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName === '/' || pathName === '/home') {
        res.end('This is the home page');
    }
    else if(pathName === '/products') {
        res.end('This is the products page');
    }
    else{
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});