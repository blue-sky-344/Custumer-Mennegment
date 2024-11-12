
const express=require("express")
const {checkBodyContainsKeys}=require("../utils/middleware")
const {getRecieptsByMonth,getRecieptsByYear, getRecieptsBetweenDates, getRecieptsByCustomer, createReceipt}=require("../modules/receipts")
const router=express.Router()

router.get('/getRecieptsByMonth/:month',async (req, res)=>{
    try{
    const{month}=req.params
    const reciepts = await getRecieptsByMonth(month)
    res.status(200).json(reciepts)
    }catch(error){
        res.status(500).send(error.message)
    }
})

router.get('/getReciptsByYear/:year',async (req,res)=>{
    try{
        const{year}=req.params
        const reciepts = await getRecieptsByYear(year)
        res.status(200).json(reciepts)
    }catch(error){
        res.status(500).json(error.message)
    }
})

router.get('/getRecieptsBetweenDates/:startDate/:endDate',async(req, res)=>{
    try{
    const{startDate} = req.params
    const {endDate}  = req.params
    const reciepts = await getRecieptsBetweenDates(startDate, endDate)
    res.status(200).json(reciepts)
    }catch(error){
        res.status(500).send(error.message)
    }
})

router.get('/getRecieptsByCustomer/:userName', async(req,res)=>{
    try{
        const{userName}=req.params
        const reciepts = await getRecieptsByCustomer(userName)
        res.status(200).json(reciepts)
    }catch(error){
        res.status(500).send(error.message)
    }
})

router.use(express.json())
router.post('/issuingReceipt',checkBodyContainsKeys(["customerUserName","sum","payment","details"]),async(req,res)=>{
    try{
const receipt=req.body
const newReceipt=await createReceipt(receipt)
res.status(201).json(newReceipt)
    }
    catch(error){
 res.status(500).send(error.message)
    }
})
module.exports=router