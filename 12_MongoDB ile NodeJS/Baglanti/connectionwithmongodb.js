const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ahmet:nodejs@cluster0-reyox.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if(err) throw err;
  console.log("başarılı bağlantı!");
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
