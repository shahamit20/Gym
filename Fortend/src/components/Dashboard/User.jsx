import React from 'react'
import Userinfo from './user/Userinfo'
import Navber from '../../other/Navber'
import Routine from './user/Routine'
import Gym from './user/Gym'
import Footer from '../../other/Footer'
import Monitor from './user/Monitor'
import { useLocation } from 'react-router-dom'

function User() {
  const location = useLocation()
  const scores = location.state?.allScores;
  console.log("Scores received in User:", scores);
  return (
    <>
      <Navber />
      <div className='w-full border border-red-200 flex flex-col justify-cester items-start gap-7 p-3 pl-[5rem] mt-5'>
        <Userinfo />
        <Routine />
        <Monitor  scores={scores}/>
        <Gym />
      </div>
    </>
  )
}

export default User