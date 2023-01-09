const React = require('react')
const Default = require('../default')

function new_form() {
    return(
        <Default>
            <main>
                <h1>Add a new place</h1>
                <form method = "POST" action = "/places">

                    <div className = "form-group">
                    <label htmlFor="name">Place Name</label>
                    <input 
                    className="form-control"
                    type="text" 
                    name = "name" 
                    id = "name" 
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
                       />
                    </div>

                    <div className= "form-group">
                     <label htmlFor="city">City</label>
                     <input
                     className="form-control"
                      type="text" 
                      name ="city" 
                      id="city" />
                    </div>

                    <div className = "form-group">
                     <label htmlFor="state">State</label>
                     <input
                     className="form-control"
                     type="text"
                     name ="state"
                     id="state" />
                    </div>

                    <div className = "form-group">
                     <label htmlFor="cuisines">Cuisines</label>
                     <input 
                     className="form-control"
                     type="text" 
                     name ="cuisines"
                     id="cuisines" 
                     required
                     />
                    </div>

                    <div className="form-group">
                    <label htmlFor="founded">Founded Year</label>
                    <input className="form-control" 
                    name="founded"
                    id = "founded" />
                    </div>

                    <input 
                    className= "btn btn-primary"
                    type="submit" 
                    value ="Add Place"/>
                </form>
            </main>
        </Default>
    )
}

module.exports = new_form

