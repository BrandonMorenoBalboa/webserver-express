// Levantar servidor
const http = require('http');

// Crear servidor (request, response)
http.createServer( ( req, res ) => {

    res.writeHead(200, {'Content-Type': 'aplication/json'});
    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    }

    res.write(JSON.stringify( salida ));
    //res.write('Hola mundo');
    // Debemos decirle al servidor que la pagina ya termino de cargar con: res.end()
    res.end();
    

}) // Puerto local
.listen(8080);

console.log('Escuchando el puerto 8080');