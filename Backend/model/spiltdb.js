const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.Mongodb)


const splitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  splitName: String,
  days: [
    {
      dayName: String,
      workouts: [
        {
          workout: String,
          exercises: [String]
        }
      ]
    }
  ]
}, { timestamps: true });
module.exports = mongoose.model('SelectedSplit', splitSchema);
