const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://node-user:nodecomplete@cluster0.p1tfc.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
