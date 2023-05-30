
 const {MongoClient} = require("mongodb");
 const URL = "mongodb://localhost:27017";
//  const URL = "mongodb://127.0.0.1:27017";
 const client = new MongoClient(URL);


 //////////////////////////////////
 //
 //getConnection
 //Used to connect with MongoDBServer -> Database -> Collection
 //
 //////////////////////////////////
async function getConnection()
 {
    let result = await client.connect();
    let db = result.db("HDatabase");
    return db.collection("Batches");
 }

 getConnection();



 //////////////////////////////////
 //
 //readData
 //Used to read data from database
 //
 //////////////////////////////////

 async function readData()
 {
   let data = await getConnection();
   data = await data.find().toArray();
   console.log("Data from HDatabase is : ");
   console.log(data);
 }


 //////////////////////////////////
 //
 //deleteData
 //Used to delete data from database
 //
 //////////////////////////////////

 async function deleteData()
 {
   let data = await getConnection();
   let result = await data.deleteOne({"Batch" : "Commerce"});
   if(result.acknowledged)
   {
      console.log("Delete operation is performed successfully");
   }

 }



 //////////////////////////////////
 //
 //insertData
 //Used to insert data from database
 //
 //////////////////////////////////

 async function insertData()
 {
   let data = await getConnection();
   let result = await data.insertOne({"Batch" : "Commerce", "Fees" : 5000});
   if(result.acknowledged)
   {
      console.log("Insert operation is performed successfully");
   }

 }



 //////////////////////////////////
 //
 //updateData
 //Used to update data from database
 //
 //////////////////////////////////

 async function updateData()
 {
   let data = await getConnection();
   let result = await data.updateOne({"Batch" : "Commerce"}, {$set : {"Fees": 7000}});
   if(result.acknowledged)
   {
      console.log("Update operation is performed successfully");
   }

 }




  //////////////////////////////////
 //
 //main
 //It should be considered as entry point function of node,js+express server
 //
 //////////////////////////////////

 function main()
 {
   // deleteData();     //D : Delete
   // insertData();     //C : Create
   updateData();        //U : Update
   readData();          //R : Read
 }

 //Starter of the application
 main();