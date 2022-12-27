const React = require('react')
const Default = require('../default')
//need double period in order to access default bc this jsx is inside of a folder in side of the parent folder which default.jsx is also located


//Go back to your view, views/places/index.jsx. In order to accept the data we just passed in, we need to make a parameter in the index function. Let's call that parameter 'data'. The places array will be accessed as 'data.places' within the function.
function index (data) {
let placesFormatted = data.places.map((place) => {
    return(
        <div>
            <h1>{place.name}</h1>
            <h4>{place.cuisines}</h4>
            <img src={place.name} alt={place.image} />
        </div>
    )
})
    return(
    <Default>
     <main>
     <h1>Welcome to the Place Index Page!</h1>
     {placesFormatted}
     </main>
    </Default>
)
}

module.exports = index