import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Droplet, Dumbbell, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

function Userinfo() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const [showMenu, setShowMenu] = useState(false);
    const fileInputRef = useRef(null);


    const toggleMenu = () => setShowMenu(!showMenu);

    const handleLogout = () => {
        fetch('http://localhost:3000/logout', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message);
                navigate('/'); // ✅ Redirect to login
            })
            .catch(err => {
                console.error('Logout error:', err);
            });
    };


    useEffect(() => {

        fetch("http://localhost:3000/dashboard", {
            method: "GET",
            credentials: "include"
        })
            .then(res => {
                if (res.status === 401) {
                    navigate("/");
                }
                return res.json();
            })
            .then(data => {
                setUser(data.user);
                console.log("Dashboard user:", data.user);
            })
            .catch(err => console.error("Error:", err));
    }, []);


    return (
        <>
            <div className='flex justify-evenly'>

                <div className="w-[47%] h-[18rem] rounded-2xl shadow-lg shadow-orange-300/60 transition-all duration-300 hover:shadow-orange-400  bg-orange-50/40 grid grid-cols-[25%_75%]">



                    {/* <!-- Profile Image --> */}
                    <div className=" p-6 flex justify-center items-center relative">
                        <img
                            className="w-[27rem] h-[8rem] rounded-full object-cover shadow-xl shadow-red-400/40 border-4 border-red-400"
                            src={image || 'https://via.placeholder.com/150?text=Profile'}
                            alt="Profile"
                        />

                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const imageUrl = URL.createObjectURL(file);
                                    setImage(imageUrl);
                                }
                            }}
                        />
                    </div>

                    {/* <!/-- Info Section --> */}
                    {user ? (<div className=" px-8 py-6 flex flex-col bg-orange-50/70 justify-center gap-6 relative">

                        <motion.h2 
                            initial={{x:-30, opacity:0}}
                            animate= {{x:0,opacity:1}}
                            transition={{duration:0.6,ease:'easeInOut'}}
                            className="text-3xl font-bold text-gray-800">{user.fullname}</motion.h2>

                        <div className="flex gap-8 text-xl text-gray-700">
                            
                                <div className="flex flex-col items-start text-xl text-gray-700">
                                    <motion.span
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="font-semibold text-gray-600"
                                    >
                                        Age
                                    </motion.span><motion.span
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                                    >
                                        {user.age}
                                    </motion.span>
                                </div>
                            
                                <div className="flex flex-col items-start text-xl text-gray-700">
                                    <motion.span
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="font-semibold text-gray-600"
                                    >
                                        Goal
                                    </motion.span><motion.span
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                                    >
                                        {user.fitnessGoal}
                                    </motion.span>
                                </div>
                            
                                <div className="flex flex-col items-start text-xl text-gray-700">
                                    <motion.span
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="font-semibold text-gray-600"
                                    >
                                        Date of Join
                                    </motion.span><motion.span
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                                    >
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </motion.span>
                                </div>
                       
                    
                        </div>

                        <i
                            className="fa-solid fa-ellipsis absolute text-2xl bg-white shadow-md p-1 rounded-xl cursor-pointer top-4 right-4 hover:bg-gray-100"
                            onClick={toggleMenu}
                        ></i>

                        {/* Dropdown Menu */}
                        {showMenu && (
                            <div className="absolute top-14 right-4 w-32 bg-white border rounded-lg shadow-lg z-10">
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={() => {
                                        setShowMenu(false);
                                        // handleImageChange();
                                        fileInputRef.current.click();
                                    }}
                                >
                                    Edit

                                </button>
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                                    onClick={() => {
                                        setShowMenu(false);
                                        handleLogout();
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        )}


                    </div>) : (
                        <p>Loading..</p>
                    )}

                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 place-items-center'>
                    {/* Calories Burned */}
                    <div className=' bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 w-[20rem] h-[8rem] shadow-lg shadow-purple-400/70 rounded-xl p-4 text-white flex flex-col justify-evenly'>
                        <div className='text-3xl font-semibold flex justify-between' style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}>Calories Burned <Flame className='w-6 h-6 text-white' /></div>
                        <div className='text-2xl font-bold'>560 kcal</div>
                    </div>

                    {/* Water Intake */}
                    <div className='bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 w-[20rem] h-[8rem] shadow-lg shadow-blue-400/70 rounded-xl p-4 text-white flex flex-col justify-evenly'>
                        <div className='text-3xl font-semibold flex justify-between' style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}>Water Intake <Droplet className='w-6 h-6 text-white' /></div>
                        <div className='text-2xl font-bold'>2.5 Liters</div>
                    </div>

                    {/* Fitness Level */}
                    <div className='bg-gradient-to-r from-green-800 via-green-600 to-green-400 w-[20rem] h-[8rem] shadow-lg shadow-green-400/70 rounded-xl p-4 text-white flex flex-col justify-evenly'>
                        <div className='text-3xl font-semibold flex justify-between' style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}>Fitness Level <Dumbbell className='w-6 h-6 text-white' /></div>
                        <div className='text-2xl font-bold'>Intermediate</div>
                    </div>

                    {/* Membership Type */}
                    <div className='bg-gradient-to-r from-pink-800 via-pink-600 to-pink-400 w-[20rem] h-[8rem] shadow-lg shadow-pink-400/70 rounded-xl p-4 text-white flex flex-col justify-evenly'>
                        <div className='text-3xl font-semibold flex justify-between ' style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}>Membership <BadgeCheck className='w-6 h-6 text-white' /></div>
                        <div className='text-2xl font-bold'>Premium</div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Userinfo;
