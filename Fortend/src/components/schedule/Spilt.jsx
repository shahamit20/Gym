import React, { useEffect, useState } from 'react';

function Spilt() {

    const split = [
    {
      name: "push_pull_leg",
      data: [{
        push: [{
          workout: "chest tricep shoulder",
          exercises: [
            "Barbell Bench Press (Chest)",
            "Incline Dumbbell Press (Chest)",
            "Overhead Dumbbell Press (Shoulders)",
            "Cable Lateral Raise (Shoulders)",
            "Tricep Rope Pushdown (Triceps)",
            "Skull Crushers (Triceps)"
          ]
        }]
      },
      {
        pull: [{
          workout: "back bicep",
          exercises: [
            "Deadlift (Full Back)",
            "Lat Pulldown (Lats)",
            "Seated Cable Row (Mid Back)",
            "Barbell Curl (Biceps)",
            "Hammer Curl (Forearms & Biceps)"
          ]
        }],
      },
      {
        leg: [{
          workout: "quads hamstrings glutes calves",
          exercises: [
            "Barbell Back Squat (Quads & Glutes)",
            "Romanian Deadlift (Hamstrings)",
            "Walking Lunges (Glutes & Quads)",
            "Standing Calf Raise (Calves)",
            "Leg Curl Machine (Hamstrings)"
          ]
        }]
      }]
    },
    {
      name: "full_body",
      data: [{
        day1: [{
          workout: "full body day 1",
          exercises: [
            "Squat (Legs)",
            "Bench Press (Chest)",
            "Bent Over Row (Back)",
            "Overhead Press (Shoulders)",
            "Barbell Curl (Biceps)",
            "Tricep Dips (Triceps)"
          ]
        }]
      },
      {
        day2: [{
          workout: "full body day 2",
          exercises: [
            "Deadlift (Back & Legs)",
            "Incline Dumbbell Press (Chest)",
            "Lat Pulldown (Back)",
            "Lateral Raise (Shoulders)",
            "Hammer Curl (Biceps)",
            "Tricep Rope Pushdown (Triceps)"
          ]
        }]
      }]
    },
    {
      name: "bro_split",
      data: [
        {
          chest_day: [
            {
              workout: "chest focused day",
              exercises: [
                "Barbell Bench Press",
                "Incline Dumbbell Press",
                "Cable Fly",
                "Pushups"
              ]
            }
          ]
        },
        {
          back_day: [
            {
              workout: "back focused day",
              exercises: [
                "Deadlift",
                "Pull Ups",
                "Barbell Row",
                "Seated Cable Row"
              ]
            }
          ]
        },
        {
          leg_day: [
            {
              workout: "leg focused day",
              exercises: [
                "Back Squat",
                "Romanian Deadlift",
                "Leg Press",
                "Lunges",
                "Standing Calf Raise"
              ]
            }
          ]
        },
        {
          shoulder_day: [
            {
              workout: "shoulder focused day",
              exercises: [
                "Overhead Press",
                "Lateral Raise",
                "Front Raise",
                "Rear Delt Fly",
                "Shrugs"
              ]
            }
          ]
        },
        {
          arm_day: [
            {
              workout: "arm focused day",
              exercises: [
                "Barbell Curl",
                "Tricep Rope Pushdown",
                "Dumbbell Hammer Curl",
                "Skull Crushers",
                "Concentration Curl"
              ]
            }
          ]
        },
        {
          core_day: [
            {
              workout: "core focused day",
              exercises: [
                "Plank",
                "Hanging Leg Raises",
                "Russian Twists",
                "Cable Crunches",
                "Bicycle Crunches"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "upper_lower",
      data: [
        {
          upper: [{
            workout: "upper body (chest, back, shoulders, arms)",
            exercises: [
              "Incline Barbell Press (Chest)",
              "Bent Over Row (Back)",
              "Overhead Press (Shoulders)",
              "Lateral Raise (Shoulders)",
              "Barbell Curl (Biceps)",
              "Tricep Rope Pushdown (Triceps)"
            ]
          }]
        },
        {
          lower: [{
            workout: "lower body (quads, hamstrings, glutes, calves)",
            exercises: [
              "Back Squat (Quads)",
              "Romanian Deadlift (Hamstrings)",
              "Leg Press (Quads & Glutes)",
              "Standing Calf Raise (Calves)",
              "Glute Bridge (Glutes)"
            ]
          }]
        }
      ]
    },
    {
      name: "push_pull",
      data: [
        {
          push: [{
            workout: "chest shoulders triceps",
            exercises: [
              "Barbell Bench Press",
              "Incline Dumbbell Press",
              "Overhead Press",
              "Cable Lateral Raise",
              "Tricep Dips"
            ]
          }]
        },
        {
          pull: [{
            workout: "back biceps",
            exercises: [
              "Deadlift",
              "Lat Pulldown",
              "Barbell Row",
              "Dumbbell Curl",
              "Face Pull"
            ]
          }]
        }
      ]
    },
    {
      name: "bodyweight",
      data: [
        {
          upper: [{
            workout: "bodyweight upper body",
            exercises: [
              "Push-ups",
              "Pike Push-ups",
              "Inverted Rows",
              "Dips on Chair",
              "Diamond Push-ups"
            ]
          }]
        },
        {
          lower: [{
            workout: "bodyweight lower body",
            exercises: [
              "Bodyweight Squats",
              "Walking Lunges",
              "Glute Bridges",
              "Wall Sit",
              "Calf Raises"
            ]
          }]
        },
        {
          core: [{
            workout: "bodyweight core",
            exercises: [
              "Plank",
              "Leg Raises",
              "Russian Twists",
              "Bicycle Crunches",
              "Mountain Climbers"
            ]
          }]
        }
      ]
    },
    {
      name: "push_pull_leg_advanced",
      data: [
        {
          day1_push: [{
            workout: "push - strength focused",
            exercises: [
              "Barbell Bench Press",
              "Standing Overhead Press",
              "Close Grip Bench Press",
              "Lateral Raise",
              "Overhead Dumbbell Extension"
            ]
          }]
        },
        {
          day2_pull: [{
            workout: "pull - strength focused",
            exercises: [
              "Deadlift",
              "Pull Ups",
              "Barbell Row",
              "EZ Bar Curl",
              "Hammer Curl"
            ]
          }]
        },
        {
          day3_legs: [{
            workout: "legs - strength focused",
            exercises: [
              "Barbell Back Squat",
              "Romanian Deadlift",
              "Walking Lunges",
              "Seated Calf Raise",
              "Leg Extensions"
            ]
          }]
        },
        {
          day4_push: [{
            workout: "push - hypertrophy focused",
            exercises: [
              "Incline Dumbbell Press",
              "Arnold Press",
              "Cable Fly",
              "Rope Pushdown",
              "Face Pull"
            ]
          }]
        },
        {
          day5_pull: [{
            workout: "pull - hypertrophy focused",
            exercises: [
              "Lat Pulldown",
              "T-Bar Row",
              "Cable Rear Delt Fly",
              "Preacher Curl",
              "Concentration Curl"
            ]
          }]
        },
        {
          day6_legs: [{
            workout: "legs - hypertrophy focused",
            exercises: [
              "Leg Press",
              "Bulgarian Split Squat",
              "Lying Leg Curl",
              "Standing Calf Raise",
              "Hip Thrust"
            ]
          }]
        }
      ]
    }




  ];

  const [openIndexes, setOpenIndexes] = useState({});
  const [selectedSplit, setSelectedSplit] = useState(null); // Track selected split

  const toggleIndex = (idx, splitName) => {
    setSelectedSplit((prev) => (prev === splitName ? null : splitName));
    setOpenIndexes((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };



  return (
    <div className="p-5 pl-[5rem] h-[25rem] overflow-y-auto border mt-10 flex flex-col">
      <h1 className="text-5xl font-extrabold mb-5">Select Your Perfect Split</h1>
      {split.map((splitItem, idx) => (
        <div key={idx} className="mb-5">
          <div
            className={`w-[95%] h-auto border pl-2 flex justify-between items-center rounded-lg ${selectedSplit === splitItem.name ? 'border-indigo-500 bg-indigo-50' : ''
              }`}
          >
            <div>
              <h1 className="font-bold text-2xl capitalize">{splitItem.name.replaceAll('_', ' ')}</h1>
              <p className="text-gray-400">
                Workout split for {splitItem.name.replaceAll('_', ' ')}
              </p>
            </div>

            <div className="flex items-center gap-2 pr-2">

              <div
                className="w-[2.5rem] h-[2.5rem] bg-gray-200 flex justify-center items-center rounded-full cursor-pointer"
                onClick={() => toggleIndex(idx, splitItem.name)} // 👈 pass name also
              >
                <i
                  className={`fa-solid fa-angle-down text-lg transform transition-transform duration-300 ${openIndexes[idx] ? "rotate-180" : ""
                    }`}
                />
              </div>
            </div>
          </div>

          {openIndexes[idx] && (
            <div className="w-[95%] h-auto border p-2 flex flex-wrap justify-evenly rounded-bl-lg rounded-br-lg">
              {Array.isArray(splitItem.data)
                ? splitItem.data.map((dayObj, i) => (
                  <div key={i} className="mb-3 w-full sm:w-[45%]">
                    {Object.entries(dayObj).map(([dayName, workouts], j) => (
                      <div key={j}>
                        <h2 className="text-xl font-semibold capitalize mt-2">{dayName}</h2>
                        {workouts.map((workout, k) => (
                          <div key={k}>
                            <p className="font-medium mt-1">{workout.workout}</p>
                            <ul className="list-disc ml-5 text-gray-600">
                              {workout.exercises.map((exercise, l) => (
                                <li key={l}>{exercise}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))
                : null}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Spilt;
