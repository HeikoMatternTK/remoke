const express = require("express");
const path = require('path')
const fs = require('fs');

const app = express();

// set templating engine
app.set('view engine', 'pug');
app.set('views', __dirname);

// configure static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app index
// app.get('/', function(req, res) {
//  res.send('Hello');
// });

app.get('/', function (req, res) {
  const song = JSON.parse(fs.readFileSync('./public/come_together.json'));
  res.render('index', song);
});

// Heroku uses dynamic port binding
const port = process.env.PORT || 3333;
app.listen(port,  () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
