const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = "mongodb://localhost:27017/";
const dbname = "restraunt";

MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');
    const db = client.db(dbname);

    dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
        "dishes")
        .then((result) => {
            console.log("Insert Document:\n", result.ops);

            return dboper.findDocuments(db, "dishes");
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);

            return dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes");

        })
        .then((result) => {
            console.log("Updated Document:\n", result.result);

            return dboper.findDocuments(db, "dishes");
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);
                            
            return db.dropCollection("dishes");
        })
        .then((result) => {
            console.log("Dropped Collection: ", result);

            return client.close();
        })
        .catch((err) => console.log(err));

})
.catch((err) => console.log(err));
    // const collection = db.collection('dishes');

    // collection.insertOne({"name":"Uthapizza","description":"test"},(err, result) => {
    //     assert.equal(err, null);

    //     console.log("After insert");
    //     console.log(result.ops); //logs out how many operations have been done like {inserted =1}

    //     collection.find({}).toArray((err, docs) => {
    //         assert.equal(err, null);

    //         console.log("Found:\n");
    //         console.log(docs);

    //         db.dropCollection("dishes", (err,result) => {

    //             client.close();
    //         });
    //     });
    // })
