import http from 'http';

const host = '127.0.0.1';
const port = '8000';

const server = http.createServer((req, res) => {
    switch (req.method){
        case 'GET':
            switch (req.url){
                case '/hello':
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    res.end('Привет!');
            }
            break;
    }
});

server.listen(port, host, () => {
    console.log(`Сервер запущен на ${port}:${host}`);
});