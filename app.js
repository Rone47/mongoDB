const  MongoClient  = require("mongodb").MongoClient;
const assert = require("assert");

// Replace the uri string with your connection string.
const url = "mongodb://localhost:27017";

const dbName = 'fruitsDB';

const client = new MongoClient(url);

client.connect(function(err) {
    assert.equal(null, err);
    console.log("connected successfully to server");

    const db = client.db(dbName);

    client.close();
});