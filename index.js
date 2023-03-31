const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 8080

//Usando Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {console.log(err)});

//Servir contenido estatico
app.use(express.static('public'))
//Al declarar contenido estatico, esta función no se tiene en consideración por node
/*
app.get('/Hola', function (req, res) {
  res.send('Hello World')
}) */


app.get('/', function (req, res) {
  res.render('Home.hbs',{
    nombre:'Ivan Barrera',
    titulo:'JSX'
  })
})
app.get('/generic', function (req, res) {
  res.render('generic.hbs',{
    nombre:'Ivan Barrera',
    titulo:'JSX'
  })
})
app.get('/elements', function (req, res) {
  res.render('elements.hbs',{
    nombre:'Ivan Barrera',
    titulo:'JSX'
  })
})
/* 
app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/generic.html')
})
app.get('/elements', function (req, res) {
  res.sendFile(__dirname + '/public/elements.html')
}) */
app.get('*', function (req, res) {
  //Para mandar un archivo se utiliza sendFile(Path + Direción del archivo)
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Funcionando en el puerto: ${port}`)
})
