const express = require('express')
const Bread = require('../models/bread.js')
const breads = express.Router()

breads.get('/', (req,res) =>{
    res.render('Index', 
    {
        breads: Bread,
        title:'Bread Index'
    })
    res.send(Bread)
})

//SHOW
breads.get('/:arrayIndex', (req,res) => {
    if(Bread[req.params.arrayIndex]){
    res.render('Show', {
        bread:Bread[req.params.arrayIndex]
    })
} else {
    res.render('err404')
}
})

module.exports = breads