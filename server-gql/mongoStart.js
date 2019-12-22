const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'worldMail';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const users = db.collection('users');

    //users.insertOne({ name: "Roman", login: "Romka" })
    users.find({}).toArray((err, data) => {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(data)
        //callback(docs);
    })
    client.close();
});
