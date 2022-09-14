const React = require('react')
const Default = require('./layouts/Default')

function err404() {
    return (
      <Default>
        <h2>404 Page</h2>
        <h3><a href="/breads">Take Me Back</a></h3>
      </Default>
    )
}

module.exports = err404