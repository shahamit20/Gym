var express = require('express');
var router = express.Router();
var api = require('../model/api')

router.post("/", async (req, res) => {
  const { questions } = req.body;
  console.log("qus", questions)

  const answer = await api(`What’s your primary fitness goal?: ${questions[0]},
What is your current fitness level?: ${questions[1]}
How many days can you train per week?: ${questions[2]}
What type of workouts do you enjoy?: ${questions[3]}
How much time can you spend per session?: ${questions[4]} 

Generate only the weekly workout schedule in JSON format. 
⚠️ Important: Return only pure JSON object, no text outside JSON. 

Rules:
1. Each workout day must have exactly 6 exercises.
2. All major body parts must be covered across the week (Chest, Back, Shoulders, Arms, Legs, Core).
3. Sunday must always be "Rest".
4. If user chooses 6 or more workouts, assign workouts Monday–Saturday, Sunday is Rest.
5. If user chooses less than 6 workouts, distribute workout days and rest days evenly in Monday–Saturday, Sunday is always Rest.
6. Only include days with workouts or Rest in the JSON.
7. Do not include any extra text or explanation outside JSON.

Example output (6-day plan):
{
  "Monday": "Bench Press, Incline Dumbbell Press, Chest Fly, Pushups, Tricep Dips, Plank",
  "Tuesday": "Pullups, Deadlift, Barbell Row, Lat Pulldown, Bicep Curl, Hammer Curl",
  "Wednesday": "Squats, Lunges, Leg Press, Calf Raises, Romanian Deadlift, Leg Curl",
  "Thursday": "Overhead Press, Arnold Press, Lateral Raises, Face Pull, Shrugs, Plank",
  "Friday": "Crunches, Russian Twist, Mountain Climbers, Hanging Leg Raise, Side Plank, Superman",
  "Saturday": "Burpees, Jump Squat, HIIT Sprints, Pushups, Pullups, Plank",
  "Sunday": "Rest"
}

Example output (4-day plan):
{
  "Monday": "Bench Press, Incline Dumbbell Press, Chest Fly, Pushups, Tricep Dips, Plank",
  "Tuesday": "Rest",
  "Wednesday": "Pullups, Deadlift, Barbell Row, Lat Pulldown, Bicep Curl, Hammer Curl",
  "Thursday": "Rest",
  "Friday": "Squats, Lunges, Leg Press, Calf Raises, Romanian Deadlift, Leg Curl",
  "Saturday": "Rest",
  "Sunday": "Rest"
}
`);
console.log(answer)

  if (answer) {
    return res.json(answer);
  } else {
    return res.status(500).json({ error: "❌ Gemini AI se response nahi mila" });
  }
});

module.exports = router;
