import React from 'react'
import Userinfo from './user/Userinfo'
import Navber from '../../other/Navber'
import Routine from './user/Routine'
import Gym from './user/Gym'

function User() {
  return (
    <>
    <Navber />
    <div className='w-full border border-red-200 flex flex-col justify-cester items-start gap-7 p-3 pl-[5rem] mt-5'>
    <Userinfo />
    <Routine />
    <Gym />
    </div>
    </>
  )
}

export default User