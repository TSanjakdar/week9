module.exports = (db, result) => {
    const collection = db.collection('products');
    collection.find({}).toArray(function(err, res){
        if(err){return console.log(err)}
        result(res);
    });
}