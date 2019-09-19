module.exports = (db, result) => {
    let productToDelete = {id: 3};
    const collection = db.collection('products');
    collection.deleteOne(productToDelete, function(err, res){
        if(err){return console.log(err)}
        result(res);
    });
}