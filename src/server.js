require('dotenv').config()

const express = require('express');
const app = express();

const expressLayout = require('express-ejs-layouts');

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.set('layout', './layouts/layout.ejs')


app.use(expressLayout);
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index/index')
})

app.get('/aboutMe', (req, res) => {
  res.render('site/aboutMe')
})

app.get('/contactMe', (req, res) => {
  res.render('site/contactMe')
})

app.get('/references', (req, res) => {
  res.render('site/references')
})



app.listen(process.env.PORT);