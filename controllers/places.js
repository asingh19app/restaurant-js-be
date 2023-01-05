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


//EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id], id })
  }
})

//SHOW 
router.get('/:id', (req,res)=> {
  let id = Number(req.params.id)
  if(isNaN(id)) {
    res.render('error404')
  }
  else if(!places[id]) {
    res.render('error404')
  }
  else{
    res.render('places/show', {place: places[id], id})
}
  
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



//UPDATE
router.put('/:id', (req,res) => {
  let id  = Number(req.params.id)
  if(isNaN(id)) {
    res.render('error404')
  }
  else if(!places[id]) {
    res.render('error404')
  }
  else{
    if(!req.body.pic) {
      req.body.pic = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wikihow.com%2FGet-the-URL-for-Pictures&psig=AOvVaw2_nsKGRYLV14woN4MSTPwH&ust=1672855159405000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLiohZ79q_wCFQAAAAAdAAAAABAE'
    }
    if(!req.body.city) {
      req.body.city = 'Anytown'
    }
    if(!req.body.status) {
      req.body.state = 'USA'
    }

    //save new dtaa into the places[id]
    places[id] = req.body
    res.redirect(`/places/${id}`)
  }
})


//DELETE
router.delete('/:id', (req,res)=> {
  let id = Number(req.params.id)
  if(isNaN(id)) {
    res.render('error404')
  }
  else if(!places[id]) {
    res.render('error404')
  }
  else{
    places.splice(id,1)
    res.redirect('/places')
}
  
})

module.exports = router

