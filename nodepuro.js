const http = require('http');

http.createServer((req,res)=>{


    //Le da el aviso al navegador que se descarge automaticante, con el nombre que se desee
    res.setHeader('Content-Disposition', 'attachmen; filename=Lista.csv')
    //Envia el mensaje de status de la solicitud recibida.
    //res.writeHead(404);
    //res.writeHead(201);
    //res.writeHead(200,{'Content-Type':'text/plain'}) ->Indica el tipo de archivo que se esta enviando
    //res.writeHead(200,{'Content-Type':'text/plain'});
    res.writeHead(200,{'Content-Type':'application/csv'});
   /*  const objt= {
        value:1,
        name:'Ivan'
    }
    res.write(JSON.stringify(objt)) */
    //res.write('Hola mundo');
    res.end();
}).listen(8080);