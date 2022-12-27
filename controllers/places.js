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
            image:' https://www.eitanbernath.com/2020/10/22/chicken-tikka/'

        },

        {
            name:'Chinese Food Place',
            city:'Yonkers',
            state:'New York',
            cuisines:'Orange Chicken',
            image:' https://www.modernhoney.com/chinese-orange-chicken/ '
        },
        {
            name:'Burger Food Place',
            city:'Bronx',
            state:'New York',
            cuisines:'Burger',
            image:'https://www.nbcnews.com/better/lifestyle/8-chefs-share-their-favorite-burger-recipes-summer-ncna1009186'
        }
    ]
    res.render('places/index', {places})
    //Pass the places array into the render method as shown below. This will allow us to use that array inside of our view. We're one step closer to showing this data to our user!
 //The one additional change here is that since we have a folder inside(places) of our views folder, we do need to reference that folder. Therefore, your index route inside of places.js should look like this:
})

module.exports = router