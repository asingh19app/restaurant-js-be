const React = require('react')

function Default(html) {
    return (
    <html>
        <head>
            <title>Title</title>
            <body>
                {html.children}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>
                <link rel="stylesheet" href="/css/style.css" />
            </body>
        </head>
    </html>
    )

}

module.exports = Default 