const {getClient} = require('./mongo-connection')

class MongoOperations{
    constructor(dbName){
        this.databaseName = dbName;
    }

    set Collection(value){
        this.myCollection = getClient().db(this.databaseName).collection(value);
    }
    get Collection(){
        return this.myCollection.collectionName;
    }

    async insertItem(item){
        const result = await this.myCollection.insertOne(item);
        return result;
    }

    async find({filter={}}={}){
        const result = await this.myCollection.find(filter).toArray();
        return result;
    }
    
    async findMax(field){
        const projection={}
        projection[field]=1
      const result=await this.myCollection.find({},projection).sort({[field]:-1}).limit(1).toArray()  
      if(result.length){  
      return result[0][field]
    }
    else{
        
        return 0;
    }
}
}

module.exports = {MongoOperations}