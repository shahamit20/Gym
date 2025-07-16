import React, { useState } from 'react'
import Workout from './Workout';
import Diet from './Diet/Diet';
import Athlete from './Athlete/Athlete'
import { useNavigate } from "react-router-dom";

function Minibar() {
    const [activeTab, setActiveTab] = useState('workout');
      const navigate = useNavigate();
  return (
    
    <>
    <div className='h-[3rem] border flex justify-center items-end '>
                <ul className='flex flex-row gap-[10rem] ml-[3rem] mb-1 text-xl'>
                    <li className={`p-1 rounded-lg cursor-pointer ${activeTab === 'workout' ? 'text-green-600 underline underline-offset-4 decoration-green-400' : 'hover:underline underline-offset-4 decoration-gray-300'}`} onClick={() => setActiveTab('workout')}> Workout Plan</li>
                    <li className={`p-1 rounded-lg cursor-pointer ${activeTab === 'dietplan' ? 'text-green-600 underline underline-offset-4 decoration-green-400' : 'hover:underline underline-offset-4 decoration-gray-300'}`} onClick={() => setActiveTab('dietplan')}>Diet Plan</li>
                    <li className={`p-1 rounded-lg cursor-pointer ${activeTab === 'athlete' ? 'text-green-600 underline underline-offset-4 decoration-green-400' : 'hover:underline underline-offset-4 decoration-gray-300'}`} onClick={() => setActiveTab('athlete')}>Athlete</li>
                    <li className={`p-1 rounded-lg cursor-pointer ${activeTab === 'member' ? 'text-green-600 underline underline-offset-4 decoration-green-400' : 'hover:underline underline-offset-4 decoration-gray-300'}`} onClick={() => setActiveTab('member')}>Membership</li>

                </ul>
            </div>

            <div  className=''>
                {activeTab === 'workout' && <div  className='workoutplan' ><Workout /></div>}

                {activeTab === 'dietplan' && <div className='dietplan'><Diet /></div>}
                {activeTab === 'athlete' && <div className='athleteplan'>< Athlete/></div>}
                {activeTab === 'member' && <div className='member'>Membership Content</div>}
            </div>
    </>
  )
}

export default Minibar