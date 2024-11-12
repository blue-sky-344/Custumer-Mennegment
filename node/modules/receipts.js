
require("dotenv").config()
const { MongoOperations } = require("../services/mongo/mongo-operation")
const { MONGO_RECEIPT_COLLECTION = "receipt", MONGO_ACCOUNTANCY_DB = "expenses" } = process.env
const mongoConnection = new MongoOperations(MONGO_ACCOUNTANCY_DB)
const createReceipt = async (receipt) => {
    try {
        mongoConnection.Collection = MONGO_RECEIPT_COLLECTION
        let receiptNumber = await mongoConnection.findMax("receiptNumber")
        receiptNumber++

        receipt.receiptNumber = receiptNumber
        const response = await mongoConnection.insertItem(receipt)
        const {acknowledged}=response
        if(acknowledged)
        return {receipt}
    else{
        throw new Error("failed to issue receipt")
    }
    } catch (error) {
        throw error
    }
}

const getRecieptsByMonth= async (month)=>{
    try{
        mongoConnection.Collection = MONGO_RECEIPT_COLLECTION
        const filter={$expr:{
            $eq:[{$month:{$toDate:'$date'}}, parseInt(month)]
        }}
        const response = await mongoConnection.find({filter})
        return response
    }
    catch(error){
        throw error
    }
}

const getRecieptsByYear= async (year)=>{
    try{
        mongoConnection.Collection = MONGO_RECEIPT_COLLECTION
        const filter={$expr:{
            $eq:[{$year:{$toDate:'$date'}}, parseInt(year)]
        }}
        const response = await mongoConnection.find({filter})
        return response
    }
    catch(error){
        throw error
    }
}

const getRecieptsBetweenDates= async (startDate, endDate)=>{
    try{
        mongoConnection.Collection = MONGO_RECEIPT_COLLECTION
        const filter = {date:{
            $gte:startDate,
            $lte:endDate
        }}
        const receipts = mongoConnection.find({filter})
        return receipts
    }catch(error){
        throw error
    }
}

const getRecieptsByCustomer=(useName)=>{
    try{
        mongoConnection.Collection = MONGO_RECEIPT_COLLECTION
        const receipts = mongoConnection.find({filter:{customerUserName:useName}})
        return receipts
    }catch(error){
        throw error
    }
}
    
module.exports = {createReceipt, getRecieptsByMonth, getRecieptsByYear, getRecieptsBetweenDates, getRecieptsByCustomer}

