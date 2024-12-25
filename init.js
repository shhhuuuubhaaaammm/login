const mongoose = require("mongoose");
const INfo = require("./models/info.js");

main()
    .then(() => {
        console.log("connection succesfull");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/login');
}

let allinfos = [
    {
        name: "yo",
        employeeID: "yoho",
        email: "yohoho",
        password: "yohohoho",
        contact: 123,
    },
];

Info.insertMany(allinfos);