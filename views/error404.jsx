const React = require('react')
const Default = require('./default')

function error404 () {
    return(
<Default>
    <div>
    <h1>404 error page</h1>
    <p>The page you have entered does not exist</p>
    </div>
    <div>
        <img src="/images/404page.jpg" alt="404 error page image" height={500} width = {1000} />
    </div>
    <div>
    Photo by <a href="https://unsplash.com/@jae462?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">jae bano</a> on <a href="https://unsplash.com/photos/Xbf_4e7YDII?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    </div>

</Default>
    )

}

module.exports = error404