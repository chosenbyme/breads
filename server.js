const { application } = require('express')
const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

console.log(PORT)

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

app.set('views', __dirname + '/views')
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.status(404).send('404')
  })
  

app.listen(PORT, () => {
    console.log('listening on port',PORT)
})