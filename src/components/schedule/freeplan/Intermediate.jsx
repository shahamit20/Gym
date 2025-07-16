import React, { useEffect, useState } from 'react'
import { getlocalstorage } from '../../../storage/Plandata';
import { motion } from 'framer-motion';

function Intermediate() {
  
  
      const [plan, setPlan] = useState({});
      const [execse, setExecse] = useState("");
      useEffect(() => {
          const data = getlocalstorage();
          setPlan(data.interplan)
      }, []);

      const handleToggle = (day, e) => {
        e.stopPropagation();
        setExecse(prev => (prev === day ? "" : day)); // toggle logic
    };
      return (
        <>
            <div className='w-[68rem] pb-2 mt-4 flex flex-wrap justify-evenly rounded-b-xl shadow-lg pt-3'>
                    <div>
                    <h1 className='mx-5 mb-2'><span className='text-xl font-bold'>Note:</span> Start with light weights that you can lift for 10 to 12 reps with good form. The last 2 reps should feel a little hard, but not painful. If it's too easy, increase the weight slightly. If it's too hard, use less weight. Do 2 to 3 sets of each exercise and rest for 30 to 60 seconds between sets. Focus on proper form, not heavy lifting.</h1>
                </div>
                {Object.entries(plan).map(([day, info]) => (
                    <div key={day} className='flex border rounded-2xl shadow-sm hover:shadow-lg mb-3 hover:-translate-y-1'>




                        <div className={`w-[18rem] pb-4 relative rounded-2xl rounded-b-none flex items-center gap-4 p-4 bg-gradient-to-br from-blue-200 via-white to-green-200   transition-all duration-300 ${execse === day ? 'rounded-b-none' : 'rounded-b-2xl'}`} >

                            <div className={`flex-shrink-0 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center`}>
                                <img
                                    className='w-[2.5rem] h-[2.5rem] object-contain'
                                    src={info.icon}
                                    alt="Workout Icon"
                                />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h1 className='text-xl font-extrabold text-gray-800 mb-1'>{day}</h1>
                                <span className={`inline-block  text-black -800 text-xs font-semibold px-2 py-1 rounded-full w-fit mb-1`}>
                                    {info.muscleGroup}
                                </span>
                                <i className={`absolute right-[6px] top-0 text-xl mt-2 fa-solid ${execse === day ? 'fa-angle-left' : 'fa-angle-right'}  cursor-pointer`} onClick={(e) => handleToggle(day, e)} ></i>
                                <p className="text-sm text-gray-500">Duration: {info.duration}</p>
                            </div>
                        </div>



                        {execse === day && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "auto", opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                transition={{
                                    width: { duration: 0.4, ease: 'easeInOut' },
                                    opacity: { duration: 0.4, ease: 'easeInOut', delay: 0.5 },
                                }}
                                className="bg-white h-[12rem] w-[12rem] p-3 rounded-b-2xl">
                                <p>Workout: {info.muscleGroup}</p>
                                <p>Duration: {info.duration}</p>
                                <ul>
                                    {info.exercises?.map((exercise, index) => (
                                        <li key={index} className="list-disc ml-6 text-sm text-gray-700">
                                            {exercise}
                                        </li>
                                    ))}
                                </ul>

                            </motion.div>
                        )}

                    </div>
                ))}

            </div>
        </>
    )
  
}

export default Intermediate