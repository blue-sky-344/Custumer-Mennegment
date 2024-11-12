
const express=require("express")
const {checkBodyContainsKeys}=require("../utils/middleware")
const {createReceipt}=require("../modules/receipts")
const router=express.Router()

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