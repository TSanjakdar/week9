module.exports = (db, result) => {
    let products = [
        {id: 1, Name: 'Acer Nitro 5', Description: 'A laptop', price: 1200.00, units: 10},
        {id: 2, Name: 'Samsung 55inch 4K QLED TV', Description: 'A TV', price: 2200.00, units: 5},
        {id: 3, Name: 'Playstation 4', Description: 'A gaming console', price: 350.00, units: 23}
    ];
    const collection = db.collection('products');
    collection.insertMany(products, function(err, res){
        if(err){return console.log(err)}
        result(res);
    });
}