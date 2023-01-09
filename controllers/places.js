const router = require('express').Router()
const db = require('../models')

//INDEX
router.get('/', (req, res) => {
db.Place.find()
.then((places) => {
  res.render('places/index', { places })
})
.catch(err => {
  console.log(err)
  res.render('error404')
})
})

//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

//EDIT
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

//SHOW
router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

//CREATE
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


//UPDATE
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

//DELETE
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})


router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router


