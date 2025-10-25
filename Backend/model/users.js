const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB Connected");
}).catch(err => {
  console.error("❌ MongoDB Connection Error:", err);
});

const userSchema = new mongoose.Schema({ 
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true },
  age: { type: Number, min: 12, max: 100, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  fitnessGoal: { type: String, enum: ['lose', 'gain', 'maintain'], required: true },
  calories: { type: Number, required: true },
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  createdAt: { type: Date, default: Date.now },
});

// 👇 email ko login ke liye use karo
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', userSchema);
