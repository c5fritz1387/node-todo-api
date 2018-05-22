// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5afa3eacafb4741bdc32f4bc')
  },{
    $set: {
      name: 'Jen'
    },
      $inc: {
        age: 1,
      }
    },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});
