const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const fi = require('./uno');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//fi.fibonacci(6)

app.get('/:id', function(req, res) {
//

    res.json({ fibonacci: fi.fibonacci(req.params.id)})
    //res.send(fi.fibonacci(6));
});

app.listen('3000', function() {
    console.log('Servidor web escuchando en el puerto 3000');
}

);
