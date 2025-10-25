import React, { use, useEffect, useState } from "react";
import { Check, Monitor } from "lucide-react";
import { useNavigate } from "react-router-dom";

const weekPlan = {
  Monday: [
    {
      title: "Workout",
      color: "bg-red-300",
      items: ["Push-ups", "Squats", "Plank"],
    },
    {
      title: "Diet",
      color: "bg-yellow-300",
      items: ["Oats Breakfast", "Chicken Salad", "Fruit Bowl"],
    },
    {
      title: "Water Intake",
      color: "bg-green-300",
      items: ["8 Glasses Target", "Track every 2 hrs"],
    },
  ],
  Tuesday: [
    {
      title: "Workout",
      color: "bg-red-300",
      items: ["Pull-ups", "Lunges", "Crunches"],
    },
    {
      title: "Diet",
      color: "bg-yellow-300",
      items: ["Smoothie", "Grilled Fish", "Veg Soup"],
    },
    {
      title: "Water Intake",
      color: "bg-green-300",
      items: ["9 Glasses Target"],
    },
  ],
  // … baaki days
};

const weekDays = Object.keys(weekPlan);

function Routine() {
  const navigate = useNavigate();
  const [dayIndex, setDayIndex] = useState(0);
  const currentDay = weekDays[dayIndex];
  const todayPlan = weekPlan[currentDay];
  const [done, setDone] = useState({});
  const [scores, setScores] = useState({})
  const [data, setdata] = useState();


  const nextDay = () =>
    setDayIndex((prev) => (prev + 1) % weekDays.length);
  const prevDay = () =>
    setDayIndex((prev) => (prev - 1 + weekDays.length) % weekDays.length);

  useEffect(() => {
    setDone({});
    setScores({});
  }, [currentDay]);

  function check(key, idx, isDone, perItemValue) {
    setDone(prev => {
      const newDone = { ...prev, [key]: !prev[key] };

      // Update category score
      setScores(prevScore => {
        const current = prevScore[idx] || 0;
        const updated = isDone ? current - perItemValue : current + perItemValue;
        const newScores = { ...prevScore, [idx]: updated };

        // Print all category scores
        const allScores = todayPlan
        .map((cat, catIdx) => `${cat.title}: ${Math.round(newScores[catIdx] || 0)}`)
        .join(", ");

      // Update data state and console log
      setdata(allScores);
      console.log("Updated scores:", allScores);
       navigate("/dashboard", { state: { allScores: allScores } });

        return newScores;
      });
      return newDone;
    });
  }


  return (
    <div className="w-[95%] h-[20rem] p-1 bg-transparent grid grid-cols-[60%_40%]">
      <div className="p-2 flex justify-center items-center">
        <div className="w-[98%] h-[98%] rounded-xl bg-gray-100 shadow-lg">
          <div className="flex justify-between p-1 ml-2 items-center">
            <i
              className="fa-solid fa-arrow-left text-2xl cursor-pointer"
              onClick={prevDay}
            ></i>
            <h1 className="text-3xl font-semibold">{currentDay}</h1>
            <i
              className="fa-solid fa-arrow-right text-2xl mr-2 cursor-pointer"
              onClick={nextDay}
            ></i>
          </div>
          <hr />
          <div className="w-full h-[81%] mt-1 flex gap-2 justify-evenly px-1">
            {todayPlan.map((item, idx) => {
              const perItemValue = 100 / item.items.length; // divide 100 among items
              return (
                <div
                  key={idx}
                  className={`${item.color} w-full p-2 rounded-2xl shadow-lg text-center`}
                >
                  <h1 className="text-xl font-semibold mb-2">
                    {item.title} – {Math.round(scores[idx] || 0)} / 100
                  </h1>
                  <ul className="space-y-1 text-lg text-left">
                    {item.items.map((ex, i) => {
                      const key = `${idx}-${i}`;
                      const isDone = !!done[key];

                      return (
                        <li
                          key={i}
                          className="flex justify-between items-center"
                        >
                          <span>{ex}</span>
                          <Check
                            onClick={() => { check(key, idx, isDone, perItemValue) }}
                            className={`w-5 h-5 p-1 cursor-pointer ${isDone
                              ? "bg-green-600 text-white"
                              : "bg-white text-green-600"
                              }`}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Routine;
