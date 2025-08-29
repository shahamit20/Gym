import React, { useState } from 'react'
import Navber from '../../other/Navber'
import Explore from './Explore';
import Footer from '../../other/Footer';

function Gympage() {
  const [catogris, setCatogris] = useState("explore");
  return (
    <>
      <Navber />
      <div className='w-full h-screen flex'>
        <div className="bg-white/70  h-[99%] w-[16rem] p-6 flex flex-col shadow-md border border-t-0 border-r-2 justify-start gap-9">
          {/* Top */}
          <hr />

          <a href="#" className="block hover:text-orange-400 text-2xl font-medium" onClick={()=> setCatogris("explore")}><i class="fa-solid fa-magnifying-glass-location"></i> Explore Gyms</a>
          <a href="#" className="block hover:text-orange-400 text-2xl font-medium" onClick={()=> setCatogris("join")}> Joined Gyms</a>
          <a href="#" className="block hover:text-orange-400 text-2xl font-medium" onClick={()=> setCatogris("Add")}><i class="fa-solid fa-clipboard-list"></i> Add Your Gym</a>
        </div>

        <div className='w-[100%] p-2 ml-2'>
            {catogris == 'explore' && <div><Explore/></div>}
            {catogris == 'join' && <div>join</div>}
            {catogris == 'Add' && <div>Add</div>}
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Gympage