const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home.hbs', {
        nombre: 'julian'
    });
});

app.get('/about', function(req, res) {

    res.render('about.hbs', {

    });
});


app.get('/Data', function(req, res) {
    req.url;
    res.send('Hola Data');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});