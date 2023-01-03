const express = require('express')
const router = express.Router()


//static code here
router.get('/', (req,res)=> {
    let places = [
        {
            name:'Indian Food Place',
            city:'Mohali',
            state:'Panjab',
            cuisines:'Chicken Tikka',
            image:'/images/indianFood.jpg'

        },

        {
            name:'Chinese Food Place',
            city:'Yonkers',
            state:'New York',
            cuisines:'Orange Chicken',
            image:'/images/orangeChicken.jpg'
        },
        {
            name:'Burger Food Place',
            city:'Bronx',
            state:'New York',
            cuisines:'Burger',
            image:'/images/burgerImage.webp'
        }
    ]
    res.render('places/index', {places})
    //Pass the places array into the render method as shown below. This will allow us to use that array inside of our view. We're one step closer to showing this data to our user!
 //The one additional change here is that since we have a folder inside(places) of our views folder, we do need to reference that folder. Therefore, your index route inside of places.js should look like this:
})

//NEW
router.get('/new', (req,res)=> {
    res.render('places/new')
})

//CREATE
router.post('/', (req,res) => {
    res.send('POST/places')
})
  


module.exports = router
//TO SET FOR IMAGE


//res.send(~<img src=x></img>
