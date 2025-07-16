import React, { use, useState } from 'react'
import { motion } from 'framer-motion';

function Traning() {

  const [toggle, setToggle] = useState({
    strength: false,
    speed: false,
    endurance: false,
    agility: false,
    recovery: false,
  });

  const handleToggle = (section) => {
    setToggle((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
    console.log(toggle)

  };

  return (
    <>
      <div className='w-[99%] pb-2 mt-10 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-center'>Targeted Training for Peak Performance</h1>
        <p className='text-2xl text-center text-gray-500'>Every Rep Has a Role. Every Zone Has a Goal.</p>

        <div className='w-full px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

          {/* Strength Training */}
          <div className={`w-[30rem] pt-5 flex flex-col items-center transition-all duration-500 rounded-xl ${toggle.strength ? 'h-auto' : 'h-[13rem]'} bg-gradient-to-br from-blue-700 via-blue-600 to-gray-700`}>
            <div className='flex gap-2'>
              <img className='w-[4rem]' src="https://cdn-icons-png.flaticon.com/128/5114/5114256.png" alt="" />
              <h1 className='text-3xl text-white'>Strength Training</h1>
            </div>
            <p className='text-2xl text-white'>Build Your Power and Muscle Mass</p>
            <div className='flex justify-between w-[90%] items-center mt-6'>
              <h1 className='text-white text-xl'>4 Exercises</h1>
              <i className="fa-solid fa-angle-down text-white" onClick={() => handleToggle('strength')}></i>
            </div>
            {toggle.strength &&
              (<div
                className={`w-full h-auto border bg-white rounded-b-xl transition-all duration-300 ease-in-out ${toggle ? 'max-h-[1000px]' : 'max-h-0 overflow-hidden'}`}>
                {[
                  { name: "Deadlift", duration: "40min", set: "4-5", rep: "5-8", rest: "90sec" },
                  { name: "Barbell Squat", duration: "35min", set: "4", rep: "6-10", rest: "90sec" },
                  { name: "Overhead Press", duration: "30min", set: "3-4", rep: "6-8", rest: "60sec" },
                  { name: "Pull Ups", duration: "20min", set: "4", rep: "6-12", rest: "60sec" },
                ].map((ex, i) => (
                  <div key={i} className='w-full p-1 border-b-4 mt-5'>
                    <div className='flex justify-between border-b-2'>
                      <h1 className='text-2xl'>{ex.name}</h1>
                      <p className='text-lg'><span className='font-bold'>Duration:</span> {ex.duration}</p>
                    </div>
                    <p className='text-lg mt-2'><span className='font-bold'>Set:</span> {ex.set}</p>
                    <p className='text-lg mt-1'><span className='font-bold'>Rep:</span> {ex.rep}</p>
                    <p className='text-lg mt-1'><span className='font-bold'>Rest:</span> {ex.rest}</p>
                  </div>
                ))}
              </div>)}
          </div>

          {/* Speed & Power */}
          <div className={`w-[30rem] pt-5 flex flex-col items-center transition-all duration-500 rounded-xl ${toggle.speed ? 'h-auto' : 'h-[13rem]'} bg-gradient-to-br from-red-700 via-pink-600 to-gray-700`}>
            <div className='flex gap-2'>
              <img className='w-[4rem]' src="https://cdn-icons-png.flaticon.com/128/763/763812.png" alt="" />  {/*red pnik gray */}
              <h1 className='text-3xl text-white'>Speed & Power</h1>
            </div>
            <p className='text-2xl text-white'>Boost explosiveness and speed</p>
            <div className='flex justify-between w-[90%] items-center mt-6'>
              <h1 className='text-white text-xl'>4 Exercises</h1>
              <i className="fa-solid fa-angle-down text-white" onClick={() => handleToggle('speed')} ></i>
            </div>
            {toggle.speed && (<div className='w-full h-auto border bg-white rounded-b-xl'>
              {[
                { name: "Sled Push", duration: "15min", set: "4", rep: "15m x 5", rest: "90sec" },
                { name: "Power Clean", duration: "25min", set: "3", rep: "3-5", rest: "2min" },
                { name: "Box Jump", duration: "20min", set: "4", rep: "6-10", rest: "90sec" },
                { name: "Sprints", duration: "20min", set: "5", rep: "50m", rest: "1min" },
              ].map((ex, i) => (
                <div key={i} className='w-full p-1 border-b-4 mt-5'>
                  <div className='flex justify-between border-b-2'>
                    <h1 className='text-2xl'>{ex.name}</h1>
                    <p className='text-lg'><span className='font-bold'>Duration:</span> {ex.duration}</p>
                  </div>
                  <p className='text-lg mt-2'><span className='font-bold'>Set:</span> {ex.set}</p>
                  <p className='text-lg mt-1'><span className='font-bold'>Rep:</span> {ex.rep}</p>
                  <p className='text-lg mt-1'><span className='font-bold'>Rest:</span> {ex.rest}</p>
                </div>
              ))}
            </div>)}
          </div>

          {/* Endurance */}
          <div className={`w-[30rem] pt-5 flex flex-col items-center transition-all duration-500 rounded-xl ${toggle.endurance ? 'h-auto' : 'h-[13rem]'} bg-gradient-to-br from-green-700 via-lime-600 to-gray-700`}>
            <div className='flex gap-2'>
              <img className='w-[4rem]' src="https://cdn-icons-png.flaticon.com/128/11367/11367755.png" alt="" />{/** green lime gray */}
              <h1 className='text-3xl text-white'>Endurance</h1>
            </div>
            <p className='text-2xl text-white'>Improve cardiovascular and muscular stamina</p>
            <div className='flex justify-between w-[90%] items-center mt-6'>
              <h1 className='text-white text-xl'>4 Exercises</h1>
              <i className="fa-solid fa-angle-down text-white" onClick={() => handleToggle('endurance')}></i>
            </div>
            {toggle.endurance && (<div className='w-full h-auto border bg-white rounded-b-xl'>
              {[
                { name: "Running", duration: "30min", set: "1", rep: "Continuous", rest: "0" },
                { name: "Rowing Machine", duration: "25min", set: "1", rep: "Steady Pace", rest: "0" },
                { name: "Cycling", duration: "45min", set: "1", rep: "Moderate", rest: "0" },
                { name: "Jump Rope", duration: "20min", set: "3", rep: "2min rounds", rest: "30sec" },
              ].map((ex, i) => (
                <div key={i} className='w-full p-1 border-b-4 mt-5'>
                  <div className='flex justify-between border-b-2'>
                    <h1 className='text-2xl'>{ex.name}</h1>
                    <p className='text-lg'><span className='font-bold'>Duration:</span> {ex.duration}</p>
                  </div>
                  <p className='text-lg mt-2'><span className='font-bold'>Set:</span> {ex.set}</p>
                  <p className='text-lg mt-1'><span className='font-bold'>Rep:</span> {ex.rep}</p>
                  <p className='text-lg mt-1'><span className='font-bold'>Rest:</span> {ex.rest}</p>
                </div>
              ))}
            </div>)}
          </div>

          {/* Agility & Mobility yellow orange gray */}
          <div className={`w-[30rem] pt-5 flex flex-col items-center transition-all duration-500 rounded-xl ${toggle.agility ? 'h-auto' : 'h-[13rem]'} bg-gradient-to-br from-yellow-700 via-orange-600 to-gray-700`}>
            <div className='flex gap-2'>
              <img className='w-[4rem]' src="https://cdn-icons-png.flaticon.com/128/11921/11921748.png" alt="" />
              <h1 className='text-3xl text-white'>Agility & Mobility</h1>
            </div>
            <p className='text-2xl text-white'>Enhance range of motion and coordination</p>
            <div className='flex justify-between w-[90%] items-center mt-6'>
              <h1 className='text-white text-xl'>4 Exercises</h1>
              <i className="fa-solid fa-angle-down text-white" onClick={() => handleToggle('agility')}></i>
            </div>
            {toggle.agility && (<div className='w-full h-auto border bg-white rounded-b-xl'>
              {[
                { name: "Ladder Drills", duration: "15min", set: "4", rep: "4 rounds", rest: "30sec" },
                { name: "Dynamic Stretching", duration: "20min", set: "1", rep: "Full Body", rest: "0" },
                { name: "Cone Drills", duration: "20min", set: "3", rep: "5 rounds", rest: "45sec" },
                { name: "Hip Mobility Flow", duration: "15min", set: "1", rep: "Each Side", rest: "0" },
              ].map((ex, i) => (
                <div key={i} className='w-full p-1 border-b-4 mt-5'>
                  <div className='flex justify-between border-b-2'>
                    <h1 className='text-2xl'>{ex.name}</h1>
                    <p className='text-lg'><span className='font-bold'>Duration:</span> {ex.duration}</p>
                  </div>
                  <p className='text-lg mt-2'><span className='font-bold'>Set:</span> {ex.set}</p>
                  <p className='text-lg mt-1'><span className='font-bold'>Rep:</span> {ex.rep}</p>
                  <p className='text-lg mt-1'><span className='font-bold'>Rest:</span> {ex.rest}</p>
                </div>
              ))}
            </div>)}
          </div>

          {/* Recovery purpule indigo gray */}
          <div className={`w-[30rem] pt-5 flex flex-col items-center transition-all duration-500 rounded-xl ${toggle.recovery ? 'h-auto' : 'h-[13rem]'} bg-gradient-to-br from-purple-700 via-indigo-600 to-gray-700`}>
            <div className='flex gap-2'>
              <img className='w-[4rem]' src="https://cdn-icons-png.flaticon.com/128/10199/10199356.png" alt="" />
              <h1 className='text-3xl text-white'>Recovery</h1>
            </div>
            <p className='text-2xl text-white'>Support your body's repair and relaxation</p>
            <div className='flex justify-between w-[90%] items-center mt-6'>
              <h1 className='text-white text-xl'>4 Exercises</h1>
              <i className="fa-solid fa-angle-down text-white" onClick={() => handleToggle('recovery')}></i>
            </div>
            {toggle.recovery && (<div className='w-full h-auto border bg-white rounded-b-xl'>
              {[
                { name: "Foam Rolling", duration: "10min", set: "1", rep: "Full Body", rest: "0" },
                { name: "Static Stretching", duration: "15min", set: "1", rep: "Hold 30s each", rest: "0" },
                { name: "Yoga (Light)", duration: "25min", set: "1", rep: "Flow", rest: "0" },
                { name: "Breathwork", duration: "10min", set: "1", rep: "3 rounds", rest: "0" },
              ].map((ex, i) => (
                <div key={i} className='w-full p-1 border-b-4 mt-5'>
                  <div className='flex justify-between border-b-2'>
                    <h1 className='text-2xl'>{ex.name}</h1>
                    <p className='text-lg'><span className='font-bold'>Duration:</span> {ex.duration}</p>
                  </div>
                  <p className='text-lg mt-2'><span className='font-bold'>Set:</span> {ex.set}</p>
                  <p className='text-lg mt-1'><span className='font-bold'>Rep:</span> {ex.rep}</p>
                  <p className='text-lg mt-1'><span className='font-bold'>Rest:</span> {ex.rest}</p>
                </div>
              ))}
            </div>)}
          </div>

        </div>

      </div>
          <div className='w-[99%] p-2 mt-3'>
            <p className='text-xl text-gray-700 '>Working out like an athlete isn’t just about hitting the gym hard. It’s about training smart, staying consistent, and taking care of your entire body and mind. Athletes train to be strong, 
              fast, flexible, and focused. Their workouts mix strength training like squats and pushups, cardio like running, cycling, or even 
              swimming, and mobility work to stay injury-free and move better. But it doesn’t stop there. Recovery is just as important. Proper 
              sleep, stretching, rest days, and staying hydrated help muscles bounce back stronger. Food isn’t just fuel, it’s part of the plan.
               Getting the right mix of protein, carbs, and healthy fats really matters. And let’s not forget the mindset. Staying disciplined, 
               pushing through tough days, and showing up even when it’s hard. That’s what makes a real athlete. Whether you're just starting or 
               chasing your next goal, it’s about progress, not perfection.</p>
          </div>
      
    </>
  )
}

export default Traning