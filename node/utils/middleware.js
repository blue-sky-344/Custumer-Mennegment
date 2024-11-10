
function checkBodyContainsKeys(keys){
    return(req,res,next)=>{
        const { body } = req
        const allKeys = Object.keys(body)
        const keysNotFound = keys.filter(key=> !allKeys.includes(key))
        if(keysNotFound.length!==0){
            const message = `body does not contains all the keys missing keys: '${keysNotFound.join("', '")}'.`
            return res.status(403).send({message})
        }else{
            next()
        }   
    }
}

module.exports={checkBodyContainsKeys}