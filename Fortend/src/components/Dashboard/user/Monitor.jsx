import React, { use, useEffect, useRef, useState } from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
function Monitor(scores) {
  const [workout, setWorkout] = useState(0);
  const [diet, setDiet] = useState(0);
  const [water, setWater] = useState(0);
  const [overall, setOverall] = useState(0);

  const goal = 90;
  const previousOverall = useRef(0);

  const overallData = [{ name: "Progress", value: overall, fill: "#10b981" }];

  //  console.log("Received scores prop:", scores);
useEffect(() => {
  if (scores?.scores) {
    const Workout = scores.scores.match(/Workout:\s*(\d+)/)?.[1] || "0";
    const Diet = scores.scores.match(/Diet:\s*(\d+)/)?.[1] || "0";
    const Water = scores.scores.match(/Water Intake:\s*(\d+)/)?.[1] || "0";

    const w = Number(Workout);
    const d = Number(Diet);
    const wa = Number(Water);

    setWorkout(w);
    setDiet(d);
    setWater(wa);

    const dailyWorkoutPercent = w > 0 ? (w / 100) * (100 / goal) : 0;
    const dailyDietPercent = d > 0 ? (d / 100) * (100 / goal) : 0;
    const dailyWaterPercent = wa > 0 ? (wa / 100) * (100 / goal) : 0;

    let cumulativeOverall = dailyWorkoutPercent + dailyDietPercent + dailyWaterPercent;

    if (cumulativeOverall === 0) {
      cumulativeOverall = 0;
    }

    const stored = parseFloat(localStorage.getItem('overallProgress')) || 0;
    let newOverall = stored + cumulativeOverall;

    newOverall = Math.min(newOverall, 100);

    // Save back to localStorage
    localStorage.setItem('overallProgress', newOverall.toString());

    // Update state
    setOverall(newOverall);

    // Keep ref in sync if you use it
    previousOverall.current = newOverall;

    // ✅ Alert when completed
      if (w === 100 && d === 100 && wa === 100) {
      alert("🎉 Workout, Diet, and Water — All tasks completed!");
    }
    
    if (newOverall === 100) {
      alert("🎉 All tasks completed successfully!");
    }
  }
}, [scores, goal]);


 

  console.log("workout:", workout, "diet:", diet, "water:", water);


  return (
    <>
    <div className="w-full p-4 bg-gray-50">
  {/* Charts Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

    {/* Overall Progress (standout) */}
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4">
      <RadialBarChart
        width={150}
        height={150}
        innerRadius="80%"
        outerRadius="100%"
        data={overallData}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="value" cornerRadius="50%" fill="#10b981" />
        <text
          x="75"
          y="75"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={20}
          fontWeight="bold"
        >
          {overall.toFixed(2)}%
        </text>
      </RadialBarChart>
      <p className="mt-2 text-lg font-semibold text-gray-700">Overall Progress</p>
    </div>

    {/* Workout Chart */}
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4">
      <RadialBarChart
        width={120}
        height={120}
        innerRadius="80%"
        outerRadius="100%"
        data={[{ name: "Progress", value: workout, fill: "#14b8a6" }]}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="value" cornerRadius="50%" fill="#14b8a6" />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={16}
          fontWeight="bold"
        >
          {workout}%
        </text>
      </RadialBarChart>
      <p className="mt-2 text-md font-semibold text-gray-700">Workout</p>
    </div>

    {/* Diet Chart */}
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4">
      <RadialBarChart
        width={120}
        height={120}
        innerRadius="80%"
        outerRadius="100%"
        data={[{ name: "Progress", value: diet, fill: "#f59e0b" }]}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="value" cornerRadius="50%" fill="#f59e0b" />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={16}
          fontWeight="bold"
        >
          {diet}%
        </text>
      </RadialBarChart>
      <p className="mt-2 text-md font-semibold text-gray-700">Diet</p>
    </div>

    {/* Water Intake Chart */}
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4">
      <RadialBarChart
        width={120}
        height={120}
        innerRadius="80%"
        outerRadius="100%"
        data={[{ name: "Progress", value: water, fill: "#3b82f6" }]}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="value" cornerRadius="50%" fill="#3b82f6" />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={16}
          fontWeight="bold"
        >
          {water}%
        </text>
      </RadialBarChart>
      <p className="mt-2 text-md font-semibold text-gray-700">Water Intake</p>
    </div>

  </div>
</div>


    </>
  )
}

export default Monitor