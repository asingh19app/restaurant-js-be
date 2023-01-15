const db = require('../models')

async function seed() {
    //Get the place, H-Thai-ML
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    //Create a fake sample comment
    let comment = await db.Comment.create({
        author:'Famished Fran',
        rant: false,
        stars: 5,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    //add comment to place's comment array 
    place.comments.push(comment.id)

    //save the place now that it has a comment
    await place.save()

    //exit program 
    process.exit()
}

seed()