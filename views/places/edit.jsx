const React = require('react')
const Default = require('../default.jsx')

function edit (data) {
    return(
        <Default>
            <main>
                <h1>Edit Page</h1>
                <form action = {`/places/${data.id}?_method=PUT`} method = "POST" >
                <div className = "form-group">
                    <label htmlFor="name">Place Name</label>
                    <input 
                    className="form-control"
                    type="text" 
                    name = "name" 
                    id = "name" 
                    defaultValue = {data.place.name}
                    required
                    />
                    </div>

                    <div className = "form-group">
                     <label htmlFor="pic">Place Picture</label>
                     <input
                     className="form-control"
                      type="url" 
                      name ="pic"
                      id="pic" 
                      defaultValue = {data.place.image}
                       />
                    </div>

                    <div className= "form-group">
                     <label htmlFor="city">City</label>
                     <input
                     className="form-control"
                      type="text" 
                      name ="city" 
                      id="city" 
                      defaultValue = {data.place.city}
                      />
                    </div>

                    <div className = "form-group">
                     <label htmlFor="state">State</label>
                     <input
                     className="form-control"
                     type="text"
                     name ="state"
                     id="state" 
                     defaultValue = {data.place.state}
                     />
                    </div>

                    <div className = "form-group">
                     <label htmlFor="cuisine">Cuisines</label>
                     <input 
                     className="form-control"
                     type="text" 
                     name ="cuisines"
                     id="cuisines" 
                     required
                     defaultValue = {data.place.cuisines}
                     />
                    </div>

                    <input 
                    className= "btn btn-primary"
                    type="submit" 
                    value="Edit Place"/>
                </form>
            </main>
        </Default>
    )
}

module.exports = edit 