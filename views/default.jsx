const React = require('react')

function Default(html) {
    return (
    <html>
        <head>
            <title>Title</title>
            <body>
                {html.children}
            </body>
        </head>
    </html>
    )

}

module.exports = Default 