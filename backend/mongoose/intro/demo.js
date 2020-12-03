let mongoose = require("mongoose");

//  Connect to MongoDB
let strConnectionUrl = "mongodb://localhost/sample";
mongoose.connect(strConnectionUrl);

//  Initialize Employee Schema
let empSchema = mongoose.Schema({
    empId: Number,
    name: String
});

//  Initialize Emp model
let Emp = mongoose.model("Employee", empSchema);

// Create new document using Emp model
let tempEmp = new Emp({
    id: 101,
    name: "John Doe"
});

//  Save the document by explicitly invoking save method
tempEmp.save(function (err, document) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("\nDocument saved in DB.");
    console.log(document);
});


//  Find all the Employees
Emp.find({}, function (err, emps) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Existing Documents:");
    console.log(emps);
});

//  Create & add new document to DB
Emp.create({
    empId: 123,
    name: "ABC"
}, function (err, document) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("\nNew Document has been added.");
    console.log(document);
});
