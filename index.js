require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('Hello World')
})


app.get('*', (req,res)=> {
    res.send('This a 404 page, the link you have entered does not exist.')
})
app.listen(process.env.PORT)