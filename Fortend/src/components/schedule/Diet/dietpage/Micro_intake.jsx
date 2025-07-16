import { delay, setDragLock } from 'framer-motion';
import React, { use, useEffect, useState } from 'react'
import { motion } from 'framer-motion';

function Micro_intake() {

    const [calorise, setCalorise] = useState();
    const [goal, setGoal] = useState('');
    const [Protein, setProtein] = useState('0');
    const [cabs, setcabs] = useState('0');
    const [fat, setfat] = useState('0');
    const [cabscal, setCabscal] = useState('');
    const [fatcal, setFatcal] = useState('');
    const [Proteincal, setProteincal] = useState('');
    const [totalcalorise, settotalcalorise] = useState(false);
    const [shadow, setShadow] = useState(0);
    const check = (e) => {
        e.preventDefault();

        if (calorise.trim() === '' || goal.trim() === '') {
            alert("Please enter both Calories and Goal");
            return;
        }
        setCalorise('')
        setGoal('')
        settotalcalorise(true)
        setShadow(calorise)


        if (goal === "fatloss") {
            setCabscal(calorise * 0.4)
            setProteincal(calorise * 0.4)
            setFatcal(calorise * 0.2)
            setcabs('40')
            setProtein('40')
            setfat('20')
        }
        else if (goal == "muslcegain") {
            setCabscal(calorise * 0.4)
            setProteincal(calorise * 0.4)
            setFatcal(calorise * 0.2)
            setcabs('40')
            setProtein('40')
            setfat('20')
        }
        else if (goal == "gernalfitness") {
            setCabscal(calorise * 0.5)
            setProteincal(calorise * 0.3)
            setFatcal(calorise * 0.2)
            setcabs('50')
            setProtein('30')
            setfat('20')
        }
    }



    return (
        <>
            <div className='w-[100%] pb-2 border mt-10 flex flex-col items-center'>
                <h1 className='text-5xl font-bold text-center mt-5'>MICRO INTAKE</h1>
                <div className='w-[95%] h-[25rem]  mt-8 flex justify-center items-center gap-8'>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{
                            scale: { duration: 0.3, ease: 'easeInOut' },
                            y: { duration: 0.5, delay: 0.2, ease: 'easeInOut' }
                        }}
                        viewport={{ once: true }}
                        className='w-[23rem] p-2 bg-gradient-to-tr from-white to-green-200 rounded-2xl shadow-xl'>
                        <h1 className='text-center text-3xl font-bold mt-4'>Cabs</h1>
                        <p className='text-center text-xl mt-4'>Carbs are your body’s main source of energy. They fuel your workouts, keep your brain sharp, and help you stay active throughout the day. You’ll find good carbs in foods like rice, oats, fruits, and sweet potatoes. Don’t be afraid of carbs just choose the right ones and eat them in the right amount based on your goals.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{
                            scale: { duration: 0.3, ease: 'easeInOut' },
                            y: { duration: 0.3, delay: 0.4, ease: 'easeInOut' }
                        }}
                        viewport={{ once: true }}
                        className='w-[23rem]  p-2 bg-gradient-to-tr from-white to-yellow-300 rounded-2xl shadow-xl'>
                        <h1 className='text-center text-3xl font-bold mt-4'>Protien</h1>
                        <p className='text-center text-xl mt-4'>Protein is your body’s building block. It helps repair and grow muscles, especially after workouts. If you want to get stronger or lose fat without losing muscle, protein is your best friend. You can get it from foods like eggs, chicken, fish, paneer, tofu, or even protein shakes if needed. Aim to include some protein in every meal.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{
                            scale: { duration: 0.3, ease: 'easeInOut' },
                            y: { duration: 0.3, delay: 0.6, ease: 'easeInOut' }
                        }}
                        viewport={{ once: true }}
                        className='w-[23rem] p-2 bg-gradient-to-tr from-white to-red-200 rounded-2xl shadow-xl'>
                        <h1 className='text-center text-3xl font-bold mt-4'>Fat</h1>
                        <p className='text-center text-xl mt-4'>Healthy fats keep your hormones balanced, support brain health, and give you long-lasting energy. They’re not the enemy just choose the good kinds like nuts, seeds, olive oil, ghee, or avocados. Eating fat won’t make you fat unless you eat too much of it. The key is balance.
</p>
                    </motion.div>

                </div>
                <div className='w-[95%]  p-3 mt-2 flex flex-col items-center'>
                    <form action="" className=' mt-5  w-full flex justify-center '>
                        <label htmlFor="" className='text-2xl'>Enter your daily calories</label>
                        <input value={calorise} onChange={(e) => setCalorise(e.target.value)} className='input appearance-none border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ml-1' type="number" name="" id="" placeholder='Calorise' />
                        <select value={goal} onChange={(e) => setGoal(e.target.value)} className="border rounded-lg px-3 py-2 w-[10%] focus:outline-none focus:ring-2 focus:ring-blue-400 ml-3 placeholder:goal">
                            <option className='border  text-red-400 border-b-5'>Goal</option>
                            <option value="fatloss">Fat Loss</option>
                            <option value="muslcegain">Muslce Gain</option>
                            <option value="gernalfitness">Gernal Fitness</option>
                        </select>
                        <button onClick={check} className={`w-[15%]  ml-4 py-2 rounded-md text-white font-semibold transition duration-200 ${!calorise || !goal
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                            disabled={!calorise || !goal}>
                            Check
                        </button>
                    </form>

                    <div className='w-full h-full flex flex-col gap-[5rem] p-5 justify-center items-center'>
                        {totalcalorise && <h1 className='text-5xl mt-8'>Total Calories {shadow}</h1>}

                        {/* Carbs */}
                        <div className='w-full'>
                            <h1 className='text-xl mb-2'>Carbs</h1>
                            <div className='w-[92%] flex items-center justify-between'>
                                <div className='w-full h-2 bg-gray-200 rounded-full relative'>
                                    <motion.div animate={{ width: `${cabs}%` }} transition={{ duration: 0.5, ease: 'easeInOut' }} viewport={{ once: true }} className='h-full bg-green-500 rounded-full relative'>  <p className='absolute -right-5 -top-6'>{cabs}%</p></motion.div>

                                </div>
                                <span className='w-[5rem] ml-4 text-sm font-medium'>{cabscal} cal</span>
                            </div>
                        </div>

                        {/* Protein */}
                        <div className='w-full'>
                            <h1 className='text-xl mb-2'>Protein</h1>
                            <div className='w-[92%] flex items-center justify-between'>
                                <div className='w-full h-2 bg-gray-200 rounded-full relative'>
                                    <motion.div animate={{ width: `${Protein}%` }} transition={{ duration: 0.5, ease: 'easeInOut' }} className='h-full bg-yellow-500 rounded-full relative'>  <p className='absolute -right-5 -top-6'>{Protein}%</p></motion.div>
                                </div>
                                <span className='w-[5rem] ml-4 text-sm font-medium'>{Proteincal} cal</span>
                            </div>
                        </div>

                        {/* Fat */}
                        <div className='w-full'>
                            <h1 className='text-xl mb-2'>Fat</h1>
                            <div className='w-[92%] flex items-center justify-between'>
                                <div className='w-full h-2 bg-gray-200 rounded-full relative'>
                                    <motion.div animate={{ width: `${fat}%` }} transition={{ duration: 0.5, ease: 'easeInOut' }} className='h-full bg-red-500 rounded-full relative'>  <p className='absolute -right-5 -top-6'>{fat}%</p></motion.div>
                                </div>
                                <span className='w-[5rem] ml-4 text-sm font-medium'>{fatcal} cal</span>
                            </div>
                        </div>
                    </div>


                </div>




            </div>
        </>
    )
}

export default Micro_intake