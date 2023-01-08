//globalizations and configurements 
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
mongoose.set('strictQuery', true)

//connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopolgy: true },
    () => {
        console.log('running from mongoose:', MONGO_URI)
    }
)

module.exports.Place = require('./places')
