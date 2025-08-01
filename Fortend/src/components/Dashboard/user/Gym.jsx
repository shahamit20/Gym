import React from 'react'

function Gym() {
    return (
        <>
            <div className='w-[98%] h-[20rem] border mt-10 p-2 bg-emerald-50 rounded-xl'>
                <h2 className="text-4xl font-bold text-center text-blue-600">Your Selected Gym</h2>
                <div className='flex gap-3 mt-2 justify-start items-center'>
                    <div className="w-[20rem] h-[15rem] bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 transition-transform hover:scale-105 cursor-pointer">
                        <img
                            className="w-[9rem] h-[9rem] rounded-full object-cover border-4 border-indigo-500 shadow-md mb-3"
                            src="https://via.placeholder.com/150" // replace with gym logo
                            alt="Gym Logo"
                        />
                        <h1 className="text-xl font-bold text-gray-800">Gold's Gym</h1>
                        <p className="text-sm text-gray-600 mt-1">Current Member</p>
                    </div>


                    <div className='w-[5rem] h-[5rem] bg-white ml-10 shadow-md flex justify-center items-center rounded-full transition-transform hover:scale-105 cursor-pointer'>
                            <i className="fa-solid fa-plus text-[3rem] "></i>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Gym