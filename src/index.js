const path = require('path');
const express = require('express')
var morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'/public')));

app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));


app.get('/', (req, res) => {
  res.render('home');
})
app.get('/new', (req, res) => {
  res.render('news');
})



app.use(morgan('combined'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})