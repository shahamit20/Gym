const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.Mongodb)

const gymdata = new mongoose.Schema({
    gymName: {
        type: String,
        required: true,
    },
    gymowner: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    aadhar: {
        type: String,
        required: true,
        unique: true,
    },
    contact: {
        type: String,
        required: true,
    },
    shoplicense: {
        type: String, // Store filename or URL
        required: true,
    },
    healthcert: {
        type: String, // Store filename or URL
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
    logo: {
        type: String, // Store filename or URL
    },
    features: {
        type: [String], // Example: ['Cardio', 'Zumba']
        default: [],
    },
    desc: {
        type: String,
        maxlength: 1000,
    }
}, {
    timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model("Gym", gymdata);

