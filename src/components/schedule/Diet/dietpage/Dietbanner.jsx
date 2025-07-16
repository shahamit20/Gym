import React from 'react'

function Dietbanner() {
  return (
    <>
      <div className='h-[30rem] flex '>
        <div className='w-[50%] h-full flex flex-col justify-center items-start'>
          <h1 className='text-7xl font-bold ml-5'>Make Your Meals Easy</h1>
          <p className='text-xl mt-2 ml-5 text-gray-400'>Smart Planning, Balanced Nutrition, and Real-Time Tracking — All in One Click.</p>
          <div>
            <button className='ml-10 mt-5 border text-3xl p-2 text-white rounded-xl bg-blue-500'>Track Macros</button>
            <button className='ml-10 mt-5 border text-3xl p-2 text-white rounded-xl bg-green-500'>Meal Plans</button>
          </div>

        </div>
        <div className='w-[50%] h-full '>
          <img className='w-[100%] h-[100%]' src="https://media.istockphoto.com/id/2148708132/photo/png-concept-of-lunch-paper-bowl-with-food-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=BWMatjE86QSLGVK1f0U7lrP9DpYWFvrTe0jV8zv5jhs=" alt="" />
        </div>
      </div>

      <div className='h-[20rem] flex justify-evenly items-center mt-10'>
        <div className='w-[25rem] h-[8rem] rounded-lg shadow-lg flex justify-start items-center'>
          <i className="fa-solid fa-fire-flame-curved text-5xl ml-5 text-white  p-2 rounded-xl bg-gradient-to-tr from-red-800 to-red-500"></i>
          <div className='ml-3'>
            <h1 className='text-3xl font-bold'>CURRENT INTAKE</h1>
            <h2 className='text-2xl'>2000</h2>
            <p className='text-gray-400 text-xl'>Calories</p>
          </div>
        </div>
        <div className='w-[25rem] h-[8rem] rounded-lg shadow-lg flex justify-start items-center'>
          <i className="fa-solid fa-bullseye text-5xl ml-5 text-white  p-2 rounded-xl bg-gradient-to-tr from-blue-800 to-blue-500"></i>
          <div className='ml-3'>
            <h1 className='text-3xl font-bold'>TARGET GOAL</h1>
            <h2 className='text-2xl'>1500</h2>
            <p className='text-gray-400 text-xl'>Calories</p>
          </div>
        </div>
        <div className='w-[25rem] h-[8rem] rounded-lg shadow-lg flex justify-start items-center'>
          <i className="fa-solid fa-circle-check text-5xl ml-5 text-white  p-2 rounded-xl bg-gradient-to-tr from-green-800 to-green-500"></i>
          <div className='ml-3'>
            <h1 className='text-3xl font-bold'>DAILY INTAKE</h1>
            <h2 className='text-2xl'>200</h2>
            <p className='text-gray-400 text-xl'>Calories</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dietbanner