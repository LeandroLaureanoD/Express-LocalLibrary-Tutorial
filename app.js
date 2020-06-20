
// Configurar conexao mongoose
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbcotemig:lal88@cluster0-9mupw.azure.mongodb.net/local_library?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


