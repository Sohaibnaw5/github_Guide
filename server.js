import http from 'http';
const PORT=8000;

const server = http.createServer((req,res)=>{

    if(req.url === '/home') {
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end('<h1>Homepage</h1>');
    } else if (req.url === '/about'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end('<h1>About</h1>');
    } else {
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end('<h1>About</h1>');

    }

});

server.listen(PORT,()=> {
    console.log(`Server running on Port ${PORT}`);
});

