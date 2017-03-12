var mongoose = require("mongoose");
mongoose.connect("mongodb://user:testapp@ds129050.mlab.com:29050/ecdata")

//==========
//Define pattern for data, expectation of format must be defined. Otherwise define a solution.
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
//Build a complex model complete with methods used
var Cat = mongoose.model("Cat", catSchema);
//==========

//Add a new cat to DB
var bigbob = new Cat({
    name: "Bigbob",
    age: 11,
    temperament: "Fiesty"
});

bigbob.save(function (err, cat) {
    if(err){
        console.log("Error: "+ err);
    } else {
        console.log("We just assimilated the cat to the DB...");
        console.log(cat);
    }
});

//Retrieve all cats from the DB and console.log each one