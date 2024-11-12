
const express = require('express')
const {getExpensesByMonth, getExpensesByYear, getExpensesBetweenDates}=require("../modules/receipts")
const router = express.Router()

router.get('/getExpensesByMonth/:month',async (req, res)=>{
    try{
    const{month}=req.params
    const expenses = await getExpensesByMonth(month)
    res.status(200).json(expenses)
    }catch(error){
        res.status(500).send(error.message)
    }
})

router.get('/getExpensesByYear/:year',async (req,res)=>{
    try{
        const{year}=req.params
        const expenses = await getExpensesByYear(year)
        res.status(200).json(expenses)
    }catch(error){
        res.status(500).json(error.message)
    }
})

router.get('/getExpensesBetweenDates/:startDate/:endDate',async(req, res)=>{
    try{
    const{startDate} = req.params
    const {endDate}  = req.params
    const expenses = await getExpensesBetweenDates(startDate, endDate)
    res.status(200).json(expenses)
    }catch(error){
        res.status(500).send(error.message)
    }
})

module.exports=router