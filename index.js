//require express package
const express = require('express')
const app = express()

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT


//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//CONTROLLERS 
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
  })
  

app.get('*', (req, res) => {
  res.render('error404')
})


app.listen(PORT, ()=> {
  console.log('Listening on port', PORT)
})

