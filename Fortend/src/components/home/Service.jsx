import React from 'react'
import { motion } from 'framer-motion'
import Workout from '../schedule/Workout'
import { useNavigate } from 'react-router-dom';

function Service() {
    const navigate = useNavigate();
  return (
    <>
      <div className='w-[100%] pb-5 pt-5 mt-[10rem] flex justify-evenly items-center'>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileHover={{ background: '#f2f2f2' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ amount: 0.3 }}

          className='bg-[#fbfafa] w-[22rem] p-3 shadow-lg shadow-[0 8px 20px rgba(0, 0, 0, 0.05)]'>
          <h1 className='text-[#2A4759] text-center text-4xl mb-3'>Membership</h1>
          <h3 className='text-center text-xl mb-2'>Stay fit at your pace.</h3>
          <p className='text-center'>Access to gym equipment, group classes, and locker rooms with flexible monthly plans.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileHover={{ background: '#f2f2f2' }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ amount: 0.3 }}

          className='bg-[#fbfafa] w-[22rem] p-3 shadow-lg shadow-[0 8px 20px rgba(0, 0, 0, 0.05)]'>
          <h1 className='text-[#2A4759] text-center text-4xl mb-3'>Personal Training</h1>
          <h3 className='text-center text-xl mb-2'>Get 1-on-1 guidance.</h3>
          <p className='text-center'>Work with certified trainers to reach your fitness goals faster and smarter.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileHover={{ background: '#f2f2f2' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ amount: 0.3 }}

          className='bg-[#fbfafa] w-[22rem] p-3 shadow-lg shadow-[0 8px 20px rgba(0, 0, 0, 0.05)]'>
          <h1 className='text-[#2A4759] text-center text-4xl mb-3'>Pro Selection</h1>
          <h3 className='text-center text-xl mb-2'>Elite programs, elite results.</h3>
          <p className='text-center'>Advanced coaching, nutrition plans, and exclusive workout sessions for serious transformation.</p>
        </motion.div>
      </div>

      <motion.div
        className='w-[99.9%] pb-5 mt-[10rem] relative flex flex-col justify-center items-top  '>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ amount: 0.3 }}
          className='text-center text-6xl'>Everything You Need, All in One Membership</motion.h1>



        <div className='mt-[5rem] flex justify-evenly'>
          <motion.div
            initial={{ scale: 0.2 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: 'easeInOut' }}
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D"})`
            }}
            className='w-[20rem] h-[22rem] border rounded-2xl bg-cover flex flex-col justify-between p-2'>


            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }} className='w-[2rem] h-[2rem] bg-black rounded-full flex justify-center items-center cursor-pointer'>
              <i className="fa-solid fa-plus text-white text-xl"   onClick={() => navigate("schedule/workout")}></i>
              </motion.div>


            <div>
              <h1 className='text-white text-3xl mb-2 cursor-pointer' style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}> Daily Workout Routines</h1>
              <p className='text-white text-xl mb-1' style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Build strength, endurance, and confidence — one rep at a time.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1633339409275-84fb9541ab88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpZXQlMjBneW18ZW58MHx8MHx8fDA%3D"})`
            }}
            className='w-[20rem] h-[22rem] border rounded-2xl bg-cover flex flex-col justify-between p-2'>
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }} className='w-[2rem] h-[2rem] bg-black rounded-full flex justify-center items-center cursor-pointer'>
              <i className="fa-solid fa-plus text-white text-xl"  onClick={() => navigate("schedule/dietplan")} ></i></motion.div>
            <div>
              <h1 className='text-white text-3xl mb-2 cursor-pointer' style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Personalized Diet Plans</h1>
              <p className='text-white text-xl mb-1' style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Fuel your body right with meals tailored to your fitness goals.</p>

            </div>

          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1632378550595-53d41ca4ee72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEF0aGxldGUlMjBTcGVjaWFsJTIwV29ya291dHN8ZW58MHx8MHx8fDA%3D"})`
            }}
            className='w-[20rem] h-[22rem] border rounded-2xl bg-cover flex flex-col justify-between p-2'>
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }} className='w-[2rem] h-[2rem] bg-black rounded-full flex justify-center items-center cursor-pointer'>
              <i className="fa-solid fa-plus text-white text-xl" onClick={() => navigate("schedule/athlete")}></i></motion.div>
            <div>
              <h1 className='text-white text-3xl mb-2 cursor-pointer text-shadow-lg' style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Athlete Training Program</h1>
              <p className='text-white text-xl mb-1' style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>Train like a pro with high-performance routines built for speed, power, and agility.</p>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </>
  )
}

export default Service