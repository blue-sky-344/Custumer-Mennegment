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
        const result = await this.myCollection.inserOne(item);
        return result;
    }

    async find({filter={}}={}){
        const result = await this.myCollection.find(filter).toArray();
        return result;
    }
}

module.exports = {MongoOperations}