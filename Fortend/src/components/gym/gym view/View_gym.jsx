import React from 'react'
import Navber from '../../../other/Navber'
import { Users, Star, Award } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import Traner from './Traner';
import Review from './Review';

function View_gym() {
  const rating = 2.5;
  const location = useLocation()
  const gym = location.state?.gym;

  console.log("Gym received in View_gym:", gym);
  return (
    <>
      <Navber />
      <div
        className="relative h-[40rem] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1920&q=80')" }}
      >

        <motion.i
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => {
            // scroll smoothly to the next section
            document.getElementById("next-section")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
          className="fa-solid fa-arrow-down absolute text-xl z-20 w-[2.5rem] h-[2.5rem] flex justify-center items-center text-gray-700  bg-gray-400 bottom-8 rounded-full" ></motion.i>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 uppercase leading-tight">
            {gym.gymName}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {gym.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#start"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Start Your Journey
            </a>
            <a
              href="#tour"
              className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Book a Tour
            </a>
          </div>
        </div>
      </div >



      <div id='next-section' className='w-[100%] h-[40rem] mb-3 bg-gray-300 border flex'>
        <div className='w-1/2 h-full  border flex justify-center items-center '>
          <div className="w-[25rem] h-[25rem] border-8 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1920&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

        </div>
        <div className="w-1/2 h-full p-8 flex flex-col justify-center">
          {/* Name & Title */}
          <h1 className="text-4xl font-bold mb-1">{gym.gymowner
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')}</h1>
          <h2 className="text-blue-400 font-semibold mb-6">
            Founder &amp; Head Trainer
          </h2>

          {/* Description */}
          <p className=" mb-10 text-lg leading-relaxed">
            With over 15 years of experience in fitness and wellness, Marcus founded
            APEX FITNESS with a vision to create more than just a gym – a community
            where everyone can achieve their personal best. His innovative training
            methods and passion for helping others transform their lives have made
            APEX FITNESS the premier destination for serious fitness enthusiasts.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-start">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 flex justify-center items-center mb-2">
                <i className="fa-solid fa-award text-xl"></i>
              </div>
              <p className="text-xl font-bold">15+</p>
              <span className="text-sm text-gray-400">Years Experience</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 flex justify-center items-center mb-2">
                <i className="fa-solid fa-users text-xl"></i>
              </div>
              <p className="text-xl font-bold">5000+</p>
              <span className="text-sm text-gray-400">Lives Transformed</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 flex justify-center items-center mb-2">
                <i className="fa-solid fa-bolt text-xl"></i>
              </div>
              <p className="text-xl font-bold">24/7</p>
              <span className="text-sm text-gray-400">Support Available</span>
            </div>
          </div>
        </div>

      </div>

      <Traner />
      <Review />
    </>
  )
}

export default View_gym