import React, { useEffect, useState } from 'react'
import Beginners from './freeplan/Beginners';
import Ownplan from './Ownplan'
import Intermediate from './freeplan/Intermediate';
import Advance from './freeplan/Advance';
import { motion } from 'framer-motion';
import Spilt from './Spilt';
import { setlocalstorage } from '../../storage/Plandata';
import Navber from '../../other/Navber';


function Workout() {

    setlocalstorage()

    const workoutPlan = {
        Monday: { muscleGroup: "Chest & Tricep", duration: "45min" },
        Tuesday: { muscleGroup: "Back & Bicep", duration: "50min" },
        Wednesday: { muscleGroup: "Legs", duration: "60min" },
        Thursday: { muscleGroup: "Shoulders", duration: "40min" },
        Friday: { muscleGroup: "Arms", duration: "45min" },
        Saturday: { muscleGroup: "Core & Cardio", duration: "30min" },
        Sunday: { muscleGroup: "Rest Day", duration: "0min" }
    };

    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const workout = workoutPlan[today] || { muscleGroup: "No Workout", duration: "0min" };


    const [day, setDay] = useState('beginners');

   



    return (
        <>


            <h1 className='text-center text-3xl font-bold'>Workout plan </h1>
            <p className='text-center text-2xl text-gray-500 mt-2'>Personalize your fitness journey with a workout plan tailored to your goals and schedule.</p>
            <div className='mt-[5rem] h-[15rem] flex justify-evenly items-center'>
                
                
                <motion.div 
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.3,delay:0.2, ease: 'easeInOut'}}
                viewport={{once:true}}
                className='w-[25rem] h-[12rem] border shadow-xl rounded-2xl bg-gradient-to-r from-red-100 via-white to-red-50'>
                    <div className='flex items-top gap-8 '>
                        <img src="https://cdn-icons-png.flaticon.com/128/384/384276.png" alt="" />
                        <div>
                            <h2 className='mt-[1rem] text-3xl font-bold'>Step Counter</h2>
                            <h4 className="text-2xl mt-1">2000 <span className="text-lg text-gray-400">/ 5000 steps</span></h4>
                            <p className="text-lg text-gray-700 mt-1">80 kcal burned</p>
                        </div>

                    </div>
                </motion.div>
                
                <motion.div 
                 initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.3,delay:0.4, ease: 'easeInOut'}}
                viewport={{once:true}}
                className='w-[25rem] h-[12rem] border shadow-xl rounded-2xl bg-gradient-to-r from-orange-100 via-white to-orange-50'>
                    <div className='flex items-top gap-8 '>
                        <img className='mt-1' src="https://cdn-icons-png.flaticon.com/128/7198/7198839.png" alt="" />
                        <div>
                             <h2 className='mt-[1rem] text-3xl font-bold'>Today Workout</h2>
                            <h4 className="text-2xl mt-1">{workout.muscleGroup}</h4>
                            <p className="text-lg text-gray-700 mt-1">{workout.duration}</p>
                        </div>

                    </div>
                </motion.div>
                <motion.div 
                 initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.3,delay:0.4, ease: 'easeInOut'}}
                viewport={{once:true}}
                className='w-[25rem] h-[12rem] border shadow-xl rounded-2xl bg-gradient-to-r from-blue-100 via-white to-blue-50'>
                    <div className='flex items-top gap-8 '>
                        <img className='mt-1' src="https://cdn-icons-png.flaticon.com/128/1249/1249828.png" alt="" />
                        <div>
                           <h2 className='mt-[1rem] text-3xl font-bold'>Water Intake</h2>
                            <h4 className="text-5xl mt-5">4 <span className="text-2xl text-gray-400">/ 8 glasses</span></h4>

                        </div>

                    </div>
                </motion.div>
            </div>


            <blockquote className="italic text-gray-500 border-l-4 border-green-400 pl-4 mt-4 ml-[15rem]">
                "Push yourself because no one else is going to do it for you."
            </blockquote>
            
            <Spilt/>


            <div className='border border-b-0 mx-[12rem] mt-[5rem] flex items-center flex-col flex-shrink-0 bg-white]'>
                <div className='w-[98%]  h-[3rem] border flex gap-8 text-xl text-[#111111] pl-5 pb-1 items-end rounded-b-xl bg-[#E8F0FE] '>
                    <h1 className={`cursor-pointer ${day === 'beginners'? 'text-green-600 underline underline-offset-4 decoration-green-400' : 'hover:underline underline-offset-4 decoration-gray-300'}`} onClick={() => setDay('beginners')}>Beginners </h1>
                    <h1 className={`cursor-pointer ${day === 'intermediate'? 'text-green-600 underline underline-offset-4 decoration-green-400' : 'hover:underline underline-offset-4 decoration-gray-300'}`} onClick={() => setDay('intermediate')}>Intermediate</h1>
                    <h1 className={`cursor-pointer ${day === 'advance' ? 'text-green-600 underline underline-offset-4 decoration-green-400' : 'hover:underline underline-offset-4 decoration-gray-300'}`} onClick={() => setDay('advance')}>Advance</h1>
                </div>
                {day === 'beginners' && <div><Beginners /></div>}
                {day === 'intermediate' && <div><Intermediate /></div>}
                {day === 'advance' && <div><Advance /></div>}8+
            </div>

            <Ownplan />

        </>
    )
}

export default Workout