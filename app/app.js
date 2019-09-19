const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';

const addjs = require('./add.js');
const readjs = require('./read.js');
const updatejs = require('./update.js');
const removejs = require('./remove.js');

MongoClient.connect(url, function(err, client){
    if(err){return console.log(err)}
    const dbName = 'mydb';
    const db = client.db(dbName);
    
    // db.collection("products").drop(function(err, res){
    //     if(err) throw err;
    //     if(res){console.log("Collection deleted")};
    // });
    db.createCollection('products', function(err, res){
        if(err){return console.log(err)}
        console.log('collection created');
        addjs(db, function(res){
            console.log(res);
        });
        readjs(db, function(res){
            console.log(res);
        });
        updatejs(db, function(res){
            console.log(res);
        });
        removejs(db, function(res){
            console.log(res);
        });
        readjs(db, function(res){
            console.log(res);
        });
    });
});