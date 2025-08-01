const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.Mongodb)
  
const userSchema = new mongoose.Schema({ 
  fullname:{
    type:String
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
    min: 12,
    max: 100,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  fitnessGoal: {
    type: String,
    enum: ['lose', 'gain', 'maintain'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  workout:[]
});

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', userSchema);
