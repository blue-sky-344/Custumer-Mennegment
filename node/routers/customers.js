const express = require('express')
//TODO this functions
const{getAllCustomers, createCustomer,checkCustomerId} = require('./modules')
//TODO this function
const{checkBodyContainsKeyes} = require ('./utils.middlware')

const router = express.Router()

router.get('/getAllCustomers',async(req,res)=>{
    const customers = await  getAllCustomers()
    res.status(200).json(customers)
})

router.use(express.json())

router.post('/createCustomer',checkBodyContainsKeyes(['id','name','phone']),async(req,res)=>{
    try{
    const exist = await checkCustomerId(req.body.id)
    if (exist)
        throw new Error("can not add this customer because id already exist")
    const customer = req.body
    const newCustomer = await createCustomer(customer)
    res.status(200).json(newCustomer)
}catch(error){
    res.status(500).send(error.message)
}

})