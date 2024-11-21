
const express = require('express')
const customers_router = require('./routers/customers')
const receipt_router=require('./routers/receipts')
const expenses_router=require('./routers/expenses')

const app = express()

app.use('/customers',customers_router)
app.use('/receipts',receipt_router)
app.use('/expenses',expenses_router)


app.get('/',(req,res)=>{
    res.status(200).json({massege:"welcome"})
})


module.exports = app
