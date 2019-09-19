module.exports = (db, result) => {
    let productToUpdate = {id: 1};
    let updatedValues = {$set: {Name: 'Acer Nitro 6', price: 2500.00, units: 1}};
    const collection = db.collection('products');
    collection.updateOne(productToUpdate, updatedValues, function(err, res){
        if(err){return console.log(err)}
        result(res);
    });
}