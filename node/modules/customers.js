
require('dotenv').config()
const{v4} = require('uuid')
const {MongoOperations} = require('../services/mongo/mongo-operation')
const {MONGO_ACCOUNTANCY_DB = "expenses", MONGO_CUSTOMER_COLLECTION = 'customers'} = process.env
const mongoConnection = new MongoOperations(MONGO_ACCOUNTANCY_DB)

const existUserName= async (username)=>{
    try{
        mongoConnection.Collection = MONGO_CUSTOMER_COLLECTION
        const response = await mongoConnection.find({filter:{username}})
        if(response.length>0)
            return true
        else
            return false
    }catch(error){
        throw error
    }
}

const getAllCustomers = async ()=>{
    try{
        mongoConnection.Collection = MONGO_CUSTOMER_COLLECTION
        const result = mongoConnection.find({})
        return result
    }catch(error){
        throw error
    }
}

const createCustomer = async(customer) =>{
    const res = await existUserName(customer.userName)
    if(res){
        throw new Error(`username ${customer.userName} alredy exist in db`)
    }
    const id = v4()
    customer.id=id
    try{
        mongoConnection.Collection = MONGO_CUSTOMER_COLLECTION
        const response = await mongoConnection.insertItem(customer)
        const{acknowledged} = response
        if(acknowledged){
            return {customer}
        }else{
            throw new Error('customer was not saved')
        }
    } catch(error){
        throw error
    }
}

module.exports={getAllCustomers, createCustomer}