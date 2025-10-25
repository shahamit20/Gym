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
        
        <div className='w-[100%] p-2 ml-2'>
            {catogris == 'explore' && <div><Explore/></div>}
        </div>
      </div>
    </>
  )
}

export default Gympage