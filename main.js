const express = require('express')
const {route} = require('express/lib/application')

const routes = express.Router()



routes.get("/",(req,res)=>{
    res.render("index")
})

routes.get("/gallary",(req,res)=>{
    res.render("gallary")
})

module.exports=routes