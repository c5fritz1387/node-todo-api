// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // delete many
  // db.collection('Users').deleteMany({name: 'Jen'}).then((result) => {
  //   console.log(result);
  // });

  // detele one
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // })
  // findOneandDelete
  db.collection('User').findOneAndDelete({_id: new ObjectID("5afa3eacafb4741bdc32f4bc")}).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  })
  // client.close();
});
