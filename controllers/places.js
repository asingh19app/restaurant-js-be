const express = require('express')
const router = express.Router()
const places = require('../models/places.js')


//static code here
router.get('/', (req,res)=> {
    res.render('places/index', {places})

})

//NEW
router.get('/new', (req,res)=> {
    res.render('places/new')
})

//CREATE
router.post('/', (req, res) => {
   // console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  


module.exports = router
//TO SET FOR IMAGE


//res.send(~<img src=x></img>
