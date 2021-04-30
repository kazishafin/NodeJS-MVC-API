const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


//set up express app
const app = express();


//connect to Mongdb
//const dbURI = "mongodb+srv://shafin:theheart123@nodejs-app.0jpjp.mongodb.net/Blogdb?retryWrites=true&w=majority";


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://shafin:theheart123@nodejs-app.0jpjp.mongodb.net/Blogdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Blogdb").collection("BlogCollection");
  // perform actions on the collection object
  //client.close();
});


app.listen(8080);

//mongoose.set(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//.then((result) => app.listen(8080))
//.catch((err) => console.log(err));


//mongoose.Promise = global.Promise;

//app.use(bodyParser.json());


// Initialize route
app.use('/blog', blogRoutes);

//error handling middleware

app.use((err, req, res, next)=>{

    res.status(400).send({Error: err.message});

});
