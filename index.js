//Call express to be used in this app 
const express = require("express");
const path = require("path");
var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const searchController = require("./controllers/searchController.js");

// Set your port locally or in Heroku
const PORT = process.env.PORT || 5000;


 
//public folder availible
app.use(express.static(path.join(__dirname, 'public')));



app.get("/search",searchController.searchMovieLists);

//set the listening to the server
app.listen(PORT, function(){
   console.log("Listening on port: "+ PORT);
});
