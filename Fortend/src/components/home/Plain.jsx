import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
function Plain() {
    const navigate=useNavigate()
    return (
        <>
            <motion.div initial={{opacity:0 , y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.5,delay:0.3}} viewport={{once:true}} className="border h-auto md:h-[30rem] bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 mx-4 md:mx-[5rem] rounded-2xl shadow-2xl flex flex-col md:flex-row justify-between items-center p-6 md:p-10">
                
                <div className="flex-shrink-0">
                    <img
                        className="h-[18rem] md:h-[20rem] w-auto rounded-xl shadow-xl object-cover"
                        src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dCUyMHBsYW58ZW58MHx8MHx8fDA%3D"
                        alt="Workout Plan Preview"
                    />
                </div>
                <div className="text-center md:text-left max-w-xl">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Fitness Plan</h2>

                    <ul className="list-disc pl-5 space-y-2 text-gray-800 text-base md:text-lg mb-5">
                        <li>Get a personalized workout plan crafted to match your goals</li>
                        <li>Follow a structured diet plan aligned with your fitness journey</li>
                        <li>Learn how to build and adjust your own plan over time</li>
                    </ul>

                    <div className="text-md font-medium text-purple-700 mb-4">
                        <strong>Next Workout:</strong> <span className="text-black">Legs & Core Day</span>
                    </div>

                    <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition duration-300" onClick={()=> navigate("/schedule")}>
                        View Full Plan
                    </button>
                </div>
            </motion.div>

        </>
    )
}

export default Plain