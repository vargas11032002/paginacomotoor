
const express = require('express');
const morgan = require('morgan');
const path = require('path');


const app = express();


app.use(morgan('dev'));


app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.render('inicio');
});

app.get('/atencion_al_cliente', (req, res) => {
  res.render('atencion_al_cliente');
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
