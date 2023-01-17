const React = require('react')
const Default = require('../default')

function Show(data) {
  let comments = (
    <h3 className='inactive'>No comments yet!</h3>
  )
  let rating = (
    <h3 className="inactive">Not rated yet</h3>
  )
  if(data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot,c) => {
      return tot + c.stars
    }, 0)
    let averageRating = sumRatings / data.place.comments.length
    rating = (
      <h3>
        {Math.round(averageRating)} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return(
        <div className='border'>
         <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
         <h4>{c.content}</h4>
         <h3>
          <strong>{c.author}</strong>
         </h3>
         <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return(
        <Default>
  <main>
    <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
    
        <h2>
          {data.place.name}
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        <h5>
          {rating}
        </h5>
              <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>

             <form method ="POST" action = {`/places/${data.id}?_method=DELETE`} >
                <button type='submit' className='btn btn-danger'>DELETE</button>
             </form>
    </div>
    </div>

    <h2>Comments</h2>
    {comments}
    <h2>Leave A Rating?</h2>
    <form action={`/places/${data.place.id}/comment`} method='POST'>
      <div className='form-group'>
      <label htmlFor="author">Name:</label>
      <input 
      className='form-control'
      type='text' 
      name='author'
      id='author'
      />
      </div>
      <div className='form-group'>
      <label htmlFor="content">Comment:</label>
      <input 
      className='form-control'
      type='textarea' 
      name='content'
      id='content'
      />
      </div>
      <div className='form-group'>
      <label htmlFor="stars">Stars:</label>
      <input 
      className='form-control'
      type='Number' 
      name='stars'
      id='stars'
      min={0.5}
      max = {5.0}
      step = {0.5}
      />
      </div>
      <div className='form-group'>
      <label htmlFor="rant">Rant? Click Here:</label>
      <input 
      className='form-control'
      type='checkbox' 
      name='rant'
      id='rant'
      />
      </div>
      <input 
       className= "btn btn-primary"
       type="submit" 
       value="Add Comment"/>
      
    </form>
  </main>

        </Default>
    )
}



                
module.exports = Show