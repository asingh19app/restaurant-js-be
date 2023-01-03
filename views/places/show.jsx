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

                
                   <img src= {data.place.image}  alt={data.place.cuisines} height = {500} width = {500}/>
                
                 
                    <div className='buttons' >
              <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>

             <form method ="POST" action = {`/places/${data.id}?_method=DELETE`} >
                <button type='submit' className='btn btn-danger'>DELETE</button>
             </form>
             
             </div>
                

              
            </main>
        </Default>
    )
}

module.exports = Show