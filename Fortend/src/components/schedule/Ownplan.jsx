import React, { useEffect, useState } from 'react'
import { getquestion, setquestion } from '../../storage/Fitnessqusetion';


function Ownplan() {
    setquestion()
    const quse = getquestion()
    const [change, setChange] = useState(false);

    const [progress, setprogress] = useState(0);

    const [questionchange, setquestionchange] = useState(0);


    const handleNextClick = () => {
        setquestionchange(prev => prev +1 );
        setChange(false);
        const progressPercent = ((questionchange + 1) / quse.length) * 100;
        setprogress(progressPercent)
        console.log(questionchange)
    };





    return (
        <>
            <div className=' w-[99.9%]  mt-10 flex flex-col justify-center items-center pb-5'>
                <h1 className="text-center font-extrabold text-4xl text-gray-800 px-6 leading-snug">
                    Champions don’t follow plans — <span className="text-green-600">they make their own!</span></h1>

                <div className='border w-[80%] mt-[2rem] flex justify-start items-center bg-gray-100 rounded-xl'>
                    <div className="bg-green-600 h-4 rounded-xl transition-all duration-500 ease-in-out"
                        style={{ width: `${progress}%` }} >

                    </div>
                </div>

                {questionchange < quse.length ? (
                    <div className='w-[90%] pb-2 ml-[5%] mt-[2rem] border rounded-xl shadow-2xl bg-[#FAFAFA]'>

                        <h1 className='text-2xl ml-5 mt-3 text-[#1A1A1A]'><i className="fa-solid fa-bullseye text-yellow-600 mr-2"></i>{quse[questionchange].question}</h1>

                        <div className=' w-full p-2 pl-[5rem] flex flex-wrap flex-row gap-3 mt-[1rem]'>
                            {quse[questionchange].options.map((goal) => (
                                <div key={goal.id} className={`rounded-xl  w-[25rem] h-[6rem] flex flex-shrink-0 items-center px-3 cursor-pointer ${change === goal.id ? 'border border-purple-400 bg-purple-100' : 'border bg-transparent'}`} onClick={() => setChange(goal.id)}>
                                    <i className={`${goal.icon} text-4xl border p-2 rounded-full ${change === goal.id ? 'bg-purple-200   text-purple-600 ' : 'text-gray-600 bg-gray-300'} `}></i>
                                    <div className='h-full ml-2'>
                                        <h1 className="text-xl font-semibold text-gray-800 mt-2">{goal.title}</h1>
                                        <p className="text-sm text-gray-500">{goal.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {change && <div className="flex justify-end pr-10 mt-5">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition" onClick={handleNextClick}>
                                Next
                            </button>
                        </div>}


                    </div>
                ) : (
                    <div className="w-[90%] ml-[5%] mt-[3rem] p-10 bg-green-100 border border-green-400 text-green-800 rounded-xl shadow-lg text-center">
                        <h2 className="text-3xl font-bold mb-4">🎉 Congratulations!</h2>
                        <p className="text-xl">You've completed all your fitness setup questions. Get ready to crush your goals! 💪</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Ownplan