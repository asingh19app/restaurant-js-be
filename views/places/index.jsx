//MODULES AND GLOBALS
const React = require('react')
const Default = require('../default')

//need double period in order to access default bc this jsx is inside of a folder in side of the parent folder which default.jsx is also located


//Go back to your view, views/places/index.jsx. In order to accept the data we just passed in, we need to make a parameter in the index function. Let's call that parameter 'data'. The places array will be accessed as 'data.places' within the function.
function index (data) {
let placesFormatted = data.places.map((place) => {
    return(
        <div className='col-sm'>
            <h2>
                <a href={`/places/${place.id}`}> {place.name}</a>
            </h2>
            <p >{place.cuisines}</p>
            <img src={place.image} alt={place.name} height = {500} width = {500} />
            <p>
                Located in {place.city}, {place.state}
            </p>
        </div>
    )
})
    return(
    <Default>
     <main>
     <h1>Places to Rant or Rave About!</h1>
     <div className="row">
     {placesFormatted}
     </div>
     </main>
    </Default>
)
}

module.exports = index