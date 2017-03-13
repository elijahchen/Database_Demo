var mongoose = require("mongoose");
mongoose.connect("mongodb://user:testapp@ds129050.mlab.com:29050/ecdata");

//========== SCHEMA START
//Define pattern for data, expectation of format must be defined. Otherwise define a solution.
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
//Build a complex model complete with methods used
var Cat = mongoose.model("Cat", catSchema);
//========== SCHEMA END

//Add a new cat to DB
// var bigbob = new Cat({
//     name: "Smallbob",
//     age: 3,
//     temperament: "Evil"
// });
//
// bigbob.save(function (err, cat) {
//     if(err){
//         console.log("Error: "+ err);
//     } else {
//         console.log("We just assimilated the cat to the DB...");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function (err, cat) {
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//Retrieve all cats from the DB and console.log each one
Cat.find({}, function (err, cats) {
    if(err){
        console.log("ERROR");
        console.log(err);
    } else {
        console.log("ALL THE CATS...");
        console.log(cats);
    }
});