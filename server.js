const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;



app.use( express.static(__dirname + '/public') )

// Directorio que nos trae trozos de codigo reutilizable de nuestro sitio
hbs.registerPartials(__dirname + '/views/parciales');
// Express HBS  engine
app.set('view engine', 'hbs');
// Helpers 


app.get('/', ( req, res ) => {
    //res.send('Hello World');

    // Obtener objeto
    res.render('home', {
        nombre: 'Brandon',
        anio: new Date().getFullYear()
    });

});
app.get('/about', ( req, res ) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`)
});