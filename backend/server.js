require('colors');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000

app.use(cors());

app.use(cors()); 
app.use(express.static(__dirname + '/public'))
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }))


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../', 'frontend', 'build')));
  app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')); });
}

app.listen(port, () => {
  console.log(`Port is listening on port ${port} , happy hacking!` .bgMagenta.underline)
})