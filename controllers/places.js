const express = require('express')
const router = express.Router()

//static code here
router.get('/', (req,res)=> {
    res.send('GET/places')
 //Make the first route in places.js. We can use the index page (i.e., the GET route that will eventually show a list of all places).
})

module.exports = router