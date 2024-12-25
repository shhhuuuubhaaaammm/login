const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    employeeID: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        maxLength: 50,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
});

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;