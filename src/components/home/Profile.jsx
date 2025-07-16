import React from 'react'
import { motion } from 'framer-motion'

function Profile() {
  return (
    <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
                className='w-[50%] ml-[25%] h-[25rem] mt-[10rem] pl-5 rounded-lg bg-gradient-to-r from-red-100 via-white to-red-50 border flex justify-center items-center gap-[10px] shadow-lg'>
                <motion.div
                    className=' mb-[2rem]'>
                    <motion.h1 
                    initial={{opacity:0,x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.3,delay:0.5}}
                    className='text-6xl text-black'>Amit Shah</motion.h1>


                    <motion.h4 
                     initial={{opacity:0,x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.3,delay:0.6}}
                    className='text-3xl mt-[8px] text-orange-600'>Goal: <span>Build Muscle</span></motion.h4>
                    <motion.p 
                     initial={{opacity:0,x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.3,delay:0.7}}
                    className='text-2xl mt-[3px] text-slate-700'> Membership: <span>12/365</span></motion.p>
                    <motion.button 
                     initial={{opacity:0,x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.3,delay:0.8}}
                    className='mt-[15px] border text-xl bg-emerald-500 p-1 rounded-lg'>View Profile</motion.button>
                </motion.div>
                <div className=' w-[27rem] h-[25rem]  flex justify-center items-center relative'>
                    <motion.img
                     initial={{opacity:0,x:100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.3,delay:0.5}}
                     className='w-[15rem] h-[15rem] border rounded-full drop-shadow-lg' src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />                </div>
            </motion.div>
  )
}

export default Profile