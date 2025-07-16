import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Calorieshome() {
    const navigtion = useNavigate()
  return (
    <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col mt-[8rem] md:flex-row items-center justify-between bg-gradient-to-r from-green-100 via-white to-green-50 rounded-3xl shadow-2xl px-6 py-10 md:p-14 mx-4 md:mx-20 my-12"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2718/2718224.png"
                    alt="Calorie Tracker"
                    className="w-32 md:w-52 mb-6 md:mb-0 drop-shadow-lg"
                />
                <div className="text-center md:text-left md:ml-10 max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
                        Track Your Calories
                    </h2>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        Stay in control of your fitness journey. Monitor your daily intake and hit your health targets with precision.
                    </p>
                    <div className="text-2xl font-semibold text-green-800 bg-white px-6 py-3 rounded-full inline-block shadow mb-6">
                        Today’s Intake: <span className="font-bold text-black">2,200 kcal</span>
                    </div>

                    <button className="px-8 py-3 ml-[2rem] bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-xl shadow-md transition-all duration-300" onClick={() => navigtion("/Calories")}>
                        Start Tracking
                    </button>
                </div>
            </motion.section>
  )
}

export default Calorieshome