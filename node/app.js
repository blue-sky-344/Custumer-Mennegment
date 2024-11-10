
const express = require('express')
const customers_router = require('./routers/customers')

const app = express()

app.use('/customers',customers_router)

app.get('/',(req,res)=>{
    res.status(200).json({massege:"welcome"})
})


module.exports = app
