require("dotenv").config()
const { MongoOperations } = require("../services/mongo/mongo-operation")
const { MONGO_EXPENSES_COLLECTION = "expenses", MONGO_ACCOUNTANCY_DB = "expenses" } = process.env
const mongoConnection = new MongoOperations(MONGO_ACCOUNTANCY_DB)
const saveExpenses=async(expenses)=>{
    try{
        mongoConnection.Collection=MONGO_ACCOUNTANCY_DB
        const response=await mongoConnection.insertItem(expenses)
        const {acknowledged} = response
        if(acknowledged)
            return {expenses}
        else{
            throw new Error("failed to issue expense")
        }

    }
    catch(error){
        throw error
    }
}




const getExpensesByMonth= async (month)=>{
    try{
        mongoConnection.Collection = MONGO_EXPENSES_COLLECTION
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

const getExpensesByYear= async (year)=>{
    try{
        mongoConnection.Collection = MONGO_EXPENSES_COLLECTION
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

const getExpensesBetweenDates= async (startDate, endDate)=>{
    try{
        mongoConnection.Collection = MONGO_EXPENSES_COLLECTION
        const filter = {date:{
            $gte:startDate,
            $lte:endDate
        }}
        const response = mongoConnection.find({filter})
        return response
    }catch(error){
        throw error
    }
}


    
module.exports = {saveExpenses,getExpensesByMonth, getExpensesByYear, getExpensesBetweenDates}

