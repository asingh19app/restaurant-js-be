//globalizations
require('dotenv').config()
const mongoose = require('mongoose')

//variable
MONGO_URI = process.env.MONGO_URI
mongoose.set('strictQuery', true)

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true}, 
   () => {
    console.log('connected to mongo:', MONGO_URI)
   } 
)


module.exports.Place = require('./places')
module.exports.Comment = require('./comment')