const React = require('react')
const Default = require('../default')

function Show(data) {
    return(
        <Default>
            <main>
                <h1>{data.place.name}</h1>
                <div>  
                    <h2>Rating</h2> 
                    <p>Not rated</p>
                </div>

                <div>
                    <h2>Description</h2>
                    <p> Located in {data.place.city} {data.place.state}</p>
                    <p>Speciality Dish: {data.place.cuisines}</p>
                </div>

                <div>
                   <img src= {data.place.image}  alt={data.place.cuisines}/>
                </div>
              
            </main>
        </Default>
    )
}

module.exports = Show