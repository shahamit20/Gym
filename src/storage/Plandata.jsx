const workoutPlan = {
   Monday: {
    muscleGroup: "Chest",
    duration: "45 mins",
    color: "red",
    icon: "https://cdn-icons-png.flaticon.com/128/3214/3214987.png",
    exercises: [
      "Push-ups (3 sets of 10-15)",
      "Dumbbell Chest Press (3 sets of 12)",
      "Chest Fly (Machine or Dumbbells) (3 sets of 12)",
      "Incline Dumbbell Press (3 sets of 10)"
    ]
  },
  Tuesday: {
    muscleGroup: "Back",
    duration: "45 mins",
    color: "blue",
    icon: "https://cdn-icons-png.flaticon.com/128/190/190307.png",
    exercises: [
      "Assisted Pull-ups or Lat Pulldown (3 sets of 8-10)",
      "One-arm Dumbbell Rows (3 sets of 12 each side)",
      "Seated Cable Rows (3 sets of 12)",
      "Superman Hold (3 sets of 30 seconds)"
    ]
  },
  Wednesday: {
    muscleGroup: "Legs",
    duration: "50 mins",
    color: "green",
    icon: "https://cdn-icons-png.flaticon.com/128/3050/3050276.png",
    exercises: [
      "Bodyweight Squats (3 sets of 15)",
      "Glute Bridges (3 sets of 15)",
      "Leg Press (Light Weight) (3 sets of 12)",
      "Calf Raises (3 sets of 20)"
    ]
  },
  Thursday: {
    muscleGroup: "Shoulders",
    duration: "40 mins",
    color: "purple",
    icon: "https://cdn-icons-png.flaticon.com/128/2965/2965567.png",
    exercises: [
      "Dumbbell Shoulder Press (3 sets of 12)",
      "Lateral Raises (3 sets of 12)",
      "Front Raises (3 sets of 12)",
      "Dumbbell Shrugs (3 sets of 15)"
    ]
  },
  Friday: {
    muscleGroup: "Arms",
    duration: "40 mins",
    color: "orange",
    icon: "https://cdn-icons-png.flaticon.com/128/1197/1197695.png",
    exercises: [
      "Dumbbell Bicep Curls (3 sets of 12)",
      "Tricep Kickbacks (3 sets of 12)",
      "Cable Tricep Pushdown (3 sets of 12)",
      "Bench Dips (3 sets of 10)"
    ]
  },
  Saturday: {
    muscleGroup: "Core + Cardio",
    duration: "40 mins",
    color: "pink",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828721.png",
    exercises: [
      "Plank Hold (3 sets of 20-30 sec)",
      "Bicycle Crunches (3 sets of 15 each side)",
      "Leg Raises (3 sets of 12)",
      "Jumping Jacks (3 sets of 1 min)"
    ]
  },
  Sunday: {
    muscleGroup: "Active Recovery + Stretching",
    duration: "30-40 mins",
    color: "teal",
    icon: "https://cdn-icons-png.flaticon.com/128/4140/4140046.png",
    exercises: [
      "Gentle Yoga Flow",
      "Foam Rolling",
      "Hip and Shoulder Mobility Drills",
      "Standing Hamstring Stretch",
      "Cat-Cow Stretch"
    ]
  }};

const intermediatePlan = {
  "Monday": {
    muscleGroup: "Chest + Tricep (Incline Focus)",
    duration: "60 mins",
    color: "teal",
    icon: "https://cdn-icons-png.flaticon.com/128/3230/3230881.png",
    exercises: [
      "Incline Bench Press",
      "Incline Dumbbell Press",
      "Chest Fly (Machine/Cable)",
      "Close-Grip Bench Press",
      "Overhead Tricep Extension"
    ]
  },
  "Tuesday": {
    muscleGroup: "Back + Bicep (Deadlift Focus)",
    duration: "65 mins",
    color: "blue",
    icon: "https://cdn-icons-png.flaticon.com/128/8139/8139354.png",
    exercises: [
      "Deadlifts",
      "Lat Pulldown",
      "Seated Row",
      "Barbell Curl",
      "Hammer Curl"
    ]
  },
  "Wednesday": {
    muscleGroup: "Legs (Quads + Calves)",
    duration: "70 mins",
    color: "amber",
    icon: "https://cdn-icons-png.flaticon.com/128/656/656761.png",
    exercises: [
      "Barbell Squat",
      "Leg Press",
      "Walking Lunges",
      "Leg Extension",
      "Standing Calf Raise"
    ]
  },
  "Thursday": {
    muscleGroup: "Shoulders + Traps",
    duration: "55 mins",
    color: "purple",
    icon: "https://cdn-icons-png.flaticon.com/128/10189/10189638.png",
    exercises: [
      "Overhead Shoulder Press",
      "Lateral Raises",
      "Rear Delt Fly",
      "Shrugs",
      "Upright Rows"
    ]
  },
  "Friday": {
    muscleGroup: "Arms (Superset Heavy)",
    duration: "60 mins",
    color: "orange",
    icon: "https://cdn-icons-png.flaticon.com/128/709/709496.png",
    exercises: [
      "Barbell Curl + Tricep Pushdown",
      "Incline Dumbbell Curl + Skullcrusher",
      "Cable Curl + Overhead Rope Extension",
      "Wrist Curl + Reverse Wrist Curl"
    ]
  },
  "Saturday": {
    muscleGroup: "HIIT + Core Circuit",
    duration: "40 mins",
    color: "pink",
    icon: "https://cdn-icons-png.flaticon.com/128/9791/9791357.png",
    exercises: [
      "Jump Squats",
      "Burpees",
      "Mountain Climbers",
      "Plank (1 min)",
      "Russian Twists",
      "Leg Raises"
    ]
  },
  "Sunday": {
    muscleGroup: "Active Recovery (Yoga/Walk)",
    duration: "30 mins",
    color: "red",
    icon: "https://cdn-icons-png.flaticon.com/128/3771/3771365.png",
    exercises: [
      "30-minute walk",
      "15-minute yoga/stretch",
      "Deep breathing",
      "Foam rolling"
    ]
  }
};


const advancePlan = {
  Monday: {
    muscleGroup: "Chest + Tricep (Heavy Compound Focus)",
    duration: "75 mins",
    color: "red",
    icon: "https://cdn-icons-png.flaticon.com/128/3214/3214987.png",
    exercises: [
      "Barbell Bench Press",
      "Incline Dumbbell Press",
      "Weighted Dips",
      "Close-grip Bench Press",
      "Tricep Overhead Extension"
    ]
  },
  Tuesday: {
    muscleGroup: "Back + Bicep (Weighted Pull-ups & Rows)",
    duration: "70 mins",
    color: "blue",
    icon: "https://cdn-icons-png.flaticon.com/128/190/190307.png",
    exercises: [
      "Weighted Pull-ups",
      "Barbell Rows",
      "Seated Cable Rows",
      "Barbell Curls",
      "Hammer Curls"
    ]
  },
  Wednesday: {
    muscleGroup: "Legs (Squats + Deadlifts)",
    duration: "80 mins",
    color: "green",
    icon: "https://cdn-icons-png.flaticon.com/128/3050/3050276.png",
    exercises: [
      "Back Squats",
      "Romanian Deadlifts",
      "Leg Press",
      "Leg Curls",
      "Standing Calf Raises"
    ]
  },
  Thursday: {
    muscleGroup: "Shoulders + Traps (Olympic Lifts Focus)",
    duration: "65 mins",
    color: "purple",
    icon: "https://cdn-icons-png.flaticon.com/128/2965/2965567.png",
    exercises: [
      "Push Press",
      "Clean and Press",
      "Barbell Shrugs",
      "Lateral Raises",
      "Face Pulls"
    ]
  },
  Friday: {
    muscleGroup: "Arms (Heavy Supersets + Drop Sets)",
    duration: "70 mins",
    color: "orange",
    icon: "https://cdn-icons-png.flaticon.com/128/1197/1197695.png",
    exercises: [
      "Superset: Barbell Curl + Tricep Pushdown",
      "Drop Set: Dumbbell Hammer Curl",
      "Superset: Skull Crushers + Cable Rope Overhead Extension",
      "Concentration Curls",
      "Close-Grip Push-ups"
    ]
  },
  Saturday: {
    muscleGroup: "HIIT + Core Strengthening",
    duration: "50 mins",
    color: "pink",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828721.png",
    exercises: [
      "HIIT Sprints",
      "Mountain Climbers",
      "Plank Holds",
      "Russian Twists",
      "Leg Raises"
    ]
  },
  Sunday: {
    muscleGroup: "Active Recovery + Mobility Work",
    duration: "45 mins",
    color: "teal",
    icon: "https://cdn-icons-png.flaticon.com/128/4140/4140046.png",
    exercises: [
      "Yoga Flow",
      "Foam Rolling",
      "Hip Openers",
      "Shoulder Mobility Drills",
      "Deep Stretching"
    ]
  }
};



export const setlocalstorage = ()=>{
    localStorage.setItem("plan",JSON.stringify(workoutPlan))
    localStorage.setItem("inter",JSON.stringify(intermediatePlan))
    localStorage.setItem("advance",JSON.stringify(advancePlan))
}
export const getlocalstorage = ()=>{
   const plandata = JSON.parse(localStorage.getItem("plan"))
   const interplan = JSON.parse(localStorage.getItem("inter"))
   const advancePlan = JSON.parse(localStorage.getItem("advance"))
   return{plandata,interplan, advancePlan}

}

