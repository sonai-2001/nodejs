

// this code is server code ..

var express = require('express');
const app= express();

app.use(function(req,res,next){ /// it is middle ware which is the phrase between 
    // a request to come and send a response .. first it happens nd then a resonse 
    //  use to go , more than one use can possible and every middleware will heat 
    //first next() is mandatory to jump at the next phrase even for any other 
   // middle ware also
console.log("hi");
next();
})
app.get('/', function (req,res) {
    res.send("hiiiiii  tytghhhrs ok re bhai kya re  yes yaaarrr")// if we run the server bu node then if we want to change anything
    // then we have to restart the server then we can see the changes.
    // so we need to use  npx nodemon

app.get('/contact',function(req,res){
    res.send("it is from contact");
})

});

app.listen(3000);