const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

//set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/userdb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());


// Initialize route
app.use('/api',require('./routes/api'));

//error handling middleware

app.use((err, req, res, next)=>{

    res.status(400).send({Error: err.message});

});
//listen for request
app.listen(8080, ()=>{
    console.log('server start running')
})