const { append } = require("express/lib/response");
const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
    if(req.url === "/home"){
        res.writeHead(200, {"Content-Type":'text/html'});
        res.end('<h1>home page</h1>');
    }
    if(req.url === "/user"){
        const users = [
            {
                nome:"Othon",
                email:"othon@botelho.com",

            },
            {
                nome:"Erica",
                email:"erica@ferreira.com",

            },
        ];

        res.writeHead(200, {"Content-Type":'text/html'});
        res.end(JSON.stringify(users));
    }
});

append.get('/users', (req, res) => {
    const users = [
        {
            nome:"Othon",
            email:"othon@botelho.com",

        },
        {
            nome:"Erica",
            email:"erica@ferreira.com",

        },
    ];
    res.JSON(200).json(users);
});

server.listen(port,() => console.log(`Rodando na porta ${port}`));

