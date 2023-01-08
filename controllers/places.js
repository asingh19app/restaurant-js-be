const router = express.Router()
const db = require('../models')

//INDEX 
router.get('/', (req,res)=> {
   res.send('GET/ places stub')

})

//CREATE
router.post('/', (req, res) => {
  res.send('POST/ places stub')
   })

//NEW
router.get('/new', (req,res)=> {
    res.render('places/new')
})


//UPDATE
router.put('/:id', (req,res) => {
  res.send('PUT/places/:id stub')
  })

//SHOW 
router.get('/:id', (req,res)=> {
res.send('GET/places/:id stub')
})

//DELETE 
router.delete('/:id', (req,res) => {
  res.send('DELETE /places/:id stub')
})

//EDIT
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
  })



//PUT
router.post('/:id/rant', (req,res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})


//DELETE
router.delete('/:id/rant/:rantId', (req,res)=> {
res.send('GET/ places/:id/rant/:rantId stub')
})

module.exports = router

