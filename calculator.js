const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the addition calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI result is " + bmi);
});

app.listen(3000, function() {
    console.log("Server started on port 3000")
});

app.get("/name", function(req,res) {
    res.sendFile(__dirname + "/name.html");
})

app.post("/name", function(req,res) {
    var truename = req.body.truename
    res.send("Your name is " + truename + ".");
})