const React = require('react')
const Default = require('./default')

function home() {
  return(
  <Default>
    <h1>Welcome to the homepage!</h1>
    <div><img src="/images/chiaSeeds.jpg" alt="Chia Fruit Shake" height={500} width= {500}/></div>
    <div>Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </div>
    <a href="/places"> 
    <button className="btn-primary">Places Page </button>
    </a>
  </Default>
  )
}

module.exports = home 