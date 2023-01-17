const router = require('express').Router()
const db = require('../models')
const comment = require('../models/comment')


//INDEX
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })

})

//TAKES INFO FROM NEW PLACE FORM AND CREATES A NEW PLACES AND REDIRECT TO INDEX TO SHOWCASE THAT PLACE
router.post('/', (req, res) => {
 db.Place.create(req.body)
 .then(() => {
  res.redirect('/places')
 })
 .catch(err => {
  console.log('err', err)
  res.render('error404')
 })
})

// NEW PLACE FORM VIEWS
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW THE NEW PLACES INFO
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.redirect('error404')
  })
})

//UPDATE
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


//DELETE
router.delete('/:id', (req, res) => {
 db.Place.findByIdAndDelete(req.params.id)
 .then(place => {
  res.redirect('/places')
 })
 .catch(err => {
  console.log('err',err)
  res.render('error404')
 })
})

//EDIT
router.get('/:id/edit', (req, res) => {
db.Place.findById(req.params.id)
.then(place => {
  res.render('places/edit', {place})
})
.catch(err => {
  res.render('error404')
})
})

//CREATE 
router.post('/:id/comment', (req, res) => {
    if (req.body.rant) {
      req.body.rant = true
    } 
    else {
      req.body.rant = false
    }
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
          console.log(err)
      })
  })
  .catch(err => {
      res.render('error404')
      console.log(err)
  })
})



//DELETE
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router







module.exports = router


