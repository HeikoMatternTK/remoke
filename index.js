const express = require("express");
const path = require('path')

const app = express();

// set templating engine
app.set('view engine', 'html');
app.set('views', __dirname);

// configure static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app index
app.get('/', function(req, res) {
  res.send('Hello');
});

// Heroku uses dynamic port binding
const port = process.env.PORT || 3333;
app.listen(port,  () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
