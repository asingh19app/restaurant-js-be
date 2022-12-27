const React = require('react')
const Default = require('./default')

function error404 () {
    return(
<Default>
    <h1>404 error page</h1>
    <p>The page you have entered does not exist</p>
</Default>
    )

}

module.exports = error404