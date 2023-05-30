
 const {MongoClient} = require("mongodb");
 const URL = "mongodb://localhost:27017";
//  const URL = "mongodb://127.0.0.1:27017";
 const client = new MongoClient(URL);

async function getConnection()
 {
    let result = await client.connect();
    let db = result.db("HDatabase");
    let collection = db.collection("Batches");
    let res = await collection.find({}).toArray();
    console.log(res);
 }

 getConnection();
