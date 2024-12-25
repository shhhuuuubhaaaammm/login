const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Info = require("./models/info.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

main()
    .then(() => {
        console.log("connection succesfull");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/login');
}

//login
app.get("/infos", (req, res) => {
    // res.send("login page");
    res.render("index.ejs");
});

//Create Route
app.post("/infos/data", (req, res) => {
    // res.send("fine");
    let { name, employeeID, email, password, contact } = req.body;
    let newInfo = new Info ({
        name: name,
        employeeID: employeeID,
        email: email,
        password: password,
        contact: contact,
    });
    console.log(newInfo)
    newInfo
        .save()
        .then((res) => {
            console.log("data was saved");
        })
        .catch((err) => {
            console.log(err);
        });
    // res.send("fine");
    // res.redirect("/infos/data");
    // res.send("fine");
});

app.get("/", (req, res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});