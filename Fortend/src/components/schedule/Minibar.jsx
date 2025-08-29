import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Navber from '../../other/Navber';
import Footer from '../../other/Footer';

function Minibar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const currentTab = location.pathname.split('/')[2]; // get 'workout' from '/schedule/workout'
    setActiveTab(currentTab || 'workout');
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/schedule/${tab}`);
  };

  return (
    <>
       <Navber/>

      <div className='h-[3rem] border flex justify-center items-end '>
        <ul className='flex flex-row gap-[10rem] ml-[3rem] mb-1 text-xl'>
          <li
            className={`p-1 rounded-lg cursor-pointer ${activeTab === 'workout'
              ? 'text-green-600 underline underline-offset-4 decoration-green-400'
              : 'hover:underline underline-offset-4 decoration-gray-300'}`}
            onClick={() => handleTabClick('workout')}
          >
            Workout Plan
          </li>
          <li
            className={`p-1 rounded-lg cursor-pointer ${activeTab === 'dietplan'
              ? 'text-green-600 underline underline-offset-4 decoration-green-400'
              : 'hover:underline underline-offset-4 decoration-gray-300'}`}
            onClick={() => handleTabClick('dietplan')}
          >
            Diet Plan
          </li>
          <li
            className={`p-1 rounded-lg cursor-pointer ${activeTab === 'athlete'
              ? 'text-green-600 underline underline-offset-4 decoration-green-400'
              : 'hover:underline underline-offset-4 decoration-gray-300'}`}
            onClick={() => handleTabClick('athlete')}
          >
            Athlete
          </li>
          <li
            className={`p-1 rounded-lg cursor-pointer ${activeTab === 'member'
              ? 'text-green-600 underline underline-offset-4 decoration-green-400'
              : 'hover:underline underline-offset-4 decoration-gray-300'}`}
            onClick={() => handleTabClick('member')}
          >
            Membership
          </li>
        </ul>
      </div>

      {/* This renders the active route component */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Minibar;
