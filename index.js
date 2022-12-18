require('dotenv').config()
const express = require('express')
const app = express()



app.get('/',(req,res) => {
    res.send('Hello World')
})


app.use('/places', require('./controllers/places'))

app.get('*', (req,res)=> {
    res.send('<h1>This a 404 page, the link you have entered does not exist.</h1>')
})
app.listen(process.env.PORT)