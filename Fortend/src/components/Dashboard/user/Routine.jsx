import React from 'react'
import { Flame, Droplet, Dumbbell, BadgeCheck } from 'lucide-react';

const workoutData = [
  { title: "Chest", color: "bg-red-300" },
  { title: "Back", color: "bg-yellow-300" },
  { title: "Legs", color: "bg-green-300" },
];
function Routine() {
  return (
    <>
      <div className='w-[95%] h-[20rem] p-1  bg-transparent grid grid-cols-[60%_40%]'>
       

        <div className=' p-2 flex justify-center items-center'>
          <div className='w-[98%] h-[98%]  rounded-xl bg-gray-100 shadow-lg'>
            <div className='flex justify-between p-1 ml-2 '>
              <i className="fa-solid fa-arrow-left text-2xl cursor-pointer"></i>
              <h1 className='text-3xl font-semibold'>Monday</h1>
              <i className="fa-solid fa-arrow-right text-2xl mr-2 cursor-pointer"></i>
            </div>
            <hr />
            <div className='w-full h-[81%] mt-1 flex gap-2 justify-evenly px-1'>
              {workoutData.map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} w-full p-2 rounded-2xl shadow-lg text-center`}
                >
                  <h1 className='text-xl font-semibold mb-2'>{item.title}</h1>
                  <ul className=' list-inside space-y-1 list-none text-xl'>
                    <li >Exercise 1</li>
                    <li>Exercise 2</li>
                    <li>Exercise 3</li>
                  </ul>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Routine