const mongoose = require('mongoose')

const {Schema} = mongoose

//placeSchema 
const placeSchema = new Schema({
name: {type: String, required: true},
image: String,
cuisines: {type:String, required: true},
city: {type:String, default: 'Anytown'},
state: {type:String, default: 'USA'},
founded: Number

})

placeSchema.methods.showEstablished =  function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}


const Place = mongoose.model('Place', placeSchema)
module.exports = Place





















