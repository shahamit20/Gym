import React from 'react'
import { motion } from 'framer-motion'

function Sport() {
  return (
    <>
     <div className='w-[99.9%] h-[50rem]  mt-[10rem]'>
                <motion.h1 initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{once:true}}
                    className='text-6xl m-2 text-center' >
                    Choose Your Arena
                </motion.h1>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} viewport={{once:true}} className='flex flex-wrap justify-evenly gap-5'>
                    {[
                        "https://plus.unsplash.com/premium_photo-1664303119944-4cf5302bb701?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnR8ZW58MHx8MHx8fDA%3D",
                        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0fGVufDB8fDB8fHww",
                        "https://images.unsplash.com/photo-1485618609651-5a8bd6efc777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNwb3J0fGVufDB8fDB8fHww",
                        "https://plus.unsplash.com/premium_photo-1663013332978-df43f129d8c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNwb3J0fGVufDB8fDB8fHww",
                        "https://plus.unsplash.com/premium_photo-1685366445883-709973744248?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNwb3J0fGVufDB8fDB8fHww",
                        "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
                        "https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
                    ].slice(0, 7).map((src, i) => (
                        <motion.img
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                opacity: { duration: 0.5, delay: i * 0.2 + 1 }, // staggered delay after h1
                                scale: { duration: 0.3, ease: 'easeInOut' }
                            }}
                            viewport={{ once: true }}
                            className='h-[22rem] cursor-pointer shadow-xl rounded-lg'
                            src={src}
                            alt="sport"
                        />
                    ))}
                </motion.div>

            </div>
    </>
  )
}

export default Sport