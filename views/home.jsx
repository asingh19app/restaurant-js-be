const React = require('react')
const Default = require('./default')

function home() {
  return(
  <Default>
    <h1>Welcome to the homepage!</h1>
    <a href="/places"> 
    <button className="btn-primary">Places Page </button>
    </a>
  </Default>
  )
}

module.exports = home 