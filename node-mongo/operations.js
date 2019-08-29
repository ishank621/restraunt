// const assert = require('assert');

// exports.insertDocument = (db, document, collection, callback) => {
//     const coll = db.collection(collection);
//     return coll.insert(document);
//     // , (err, result) => {
//     //     assert.equal(err, null);
//     //     console.log("Inserted " + result.result.n + " documents into the collection " + collection);
//     //     callback(result);
//     // }
// };

// exports.findDocuments = (db, collection, callback) => {
//     const coll = db.collection(collection);
//     return coll.find({}).toArray();
//     // (err, docs) => {
//     //     assert.equal(err, null);
//     //     callback(docs);
//     // }
    
// }

// exports.removeDocuments = (db, document, collection, callback) => {
//     const coll = db.collection(collection);
//     return coll.deleteOne(document);
//     // , (err, result) => {
//     //     assert.equal(err, null);
//     //     console.log("Remove the document ", document);
//     //     callback(result);
//     // }

    
// }

// exports.updateDocument = (db, document, update, collection, callback) => {
//     const coll = db.collection(collection);
//     return coll.updateOne(document);
//     // , { $set : update }, null, (err,result) => {
//     //     assert.equal(err, null);
//     //     console.log("Updated the document ", update);
//     //     callback(result);
//     // }

    
// }
const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.insert(document);
};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    return coll.updateOne(document, { $set: update }, null);
};