import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const bgImages = [
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1", // Image 1
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D", // Image 2
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1" // Image 3
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/', {
        method: 'GET',
        credentials: 'include'
      });
      const data = await res.json();
      console.log("Fetched from backend:", data); // backend ka response
      setCheck(data.message === true); // state update
    } catch (err) {
      console.error("Failed to fetch:", err);
    }
  };

  fetchData();
}, []);


useEffect(() => {
  console.log("check updated:", check);
}, [check]);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        className="w-full h-[40rem] justify-start items-center bg-no-repeat bg-cover relative flex flex-row overflow-hidden"
        key={index}
        initial={{ x: '0' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url(${bgImages[index]})`
        }}
      >
        <div className="ml-[5rem]">
          <h1 className="w-[50rem] text-white text-[5rem]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            Your <span className="text-red-500">Fitness</span> Journey Starts Here
          </h1>
          <p className="text-5xl text-white mb-8">Fit Mind, Fit Body, Fit Life.</p>

          {/* Buttons */}
         {!check && (
          <div className="flex gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('login')}
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition duration-300"
            >
              Login
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('register')}
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-100 transition duration-300"
            >
              Register
            </motion.button>
          </div>
        )}
        </div>
      </motion.div>
    </>
  );
};

export default Banner;
