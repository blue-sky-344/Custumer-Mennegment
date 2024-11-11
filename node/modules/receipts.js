
require("dotenv").config()
const { maxHeaderSize } = require("http")
const { MongoOperations } = require("../services/mongo/mongo-operation")
const { MAX } = require("uuid")
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
module.exports = {createReceipt}