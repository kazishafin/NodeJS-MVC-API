const express = require('express')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
const bodyParser = require('body-parser')


//set up express app
const app = express();

app.use(bodyParser.json());
//connect to Mongdb


const uri = "mongodb+srv://shafin:theheart123@nodejs-app.0jpjp.mongodb.net/Blogdb?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

app.listen(8080,() => {
  console.log("server running now")
});


app.get("/", (req, res) => {
  res.json({
    title: "welcome to blog",
    ranking: 10
  });
});

// Initialize route
app.use('/blog', blogRoutes);

//error handling middleware

app.use((err, req, res, next)=>{

  res.status(400).send({Error: err.message});

});





