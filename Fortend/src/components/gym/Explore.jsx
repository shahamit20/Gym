import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from "react-router-dom";

import {
    MapPin,
    Clock,
    IndianRupee,
    Star,
    Dumbbell,
    Users,
    Search,
    PlusCircle
} from 'lucide-react';
import Addgym from './Addgym';
import View_gym from './gym view/View_gym';

// const gymData = [
//     {
//         name: 'Iron Beast Gym',
//         location: 'gadhkol patiye, Ankleshwar GIDC, Gujarat',
//         timing: '5:00 AM – 10:00 PM',
//         price: '999/month',
//         rating: '4.5',
//         members: '1000+',
//         features: ['Weight Training', 'Shower', 'Free Wi-Fi']
//     },
//     {
//         name: 'FitZone',
//         location: 'Surat, Gujarat',
//         timing: '6:00 AM – 11:00 PM',
//         price: '1199/month',
//         rating: '4.2',
//         members: '800+',
//         features: ['Weight Training', 'Cardio', 'Zumba', 'Wi-Fi']
//     },
//     {
//         name: 'Muscle Factory',
//         location: 'Bharuch, Gujarat',
//         timing: '24x7',
//         price: '1299/month',
//         rating: '4.8',
//         members: '1200+',
//         features: ['CrossFit', 'Steam Bath', 'Wi-Fi']
//     },
//     // Add more gyms if needed
// ];

function Explore() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [oncolse, setOncolse] = useState(false);
    const [gymData, setgymData] = useState([]);

    const [form, setForm] = useState({
        name: "",
        location: "",
        time: "",
        price: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setQuery(e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value });

    };

    useEffect(() => {
        fetch('http://localhost:3000/gym', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setgymData(data)
            })
            .catch(err => {
                console.error('No data:', err);
            });
    }, []);


    function gyminfo(selectedGym) {
        console.log("Clicked Gym:", selectedGym);
        navigate("/gympage", { state: { gym: selectedGym } });

    }



    const filteredGyms = gymData.filter(
        (gym) =>
            gym.gymName?.toLowerCase().includes(query.toLowerCase()) ||
            gym.Address?.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div className={`w-full flex flex-col items-center px-4 relative`}>
            {/* Search Bar */}
            <div className="w-full max-w-md mx-auto mb-6 flex justify-between">
                <div className="flex items-center border rounded-xl px-4 py-2 shadow-sm bg-white">
                    <Search className="w-5 h-5 text-gray-500 mr-2" />
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Search gyms..."
                        className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    />
                </div>
                <button className="flex items-center gap-2 text-lg font-semibold px-4 py-2 mt-1 rounded-xl bg-red-600 text-white hover:bg-red-700 transition duration-200 shadow-md"
                    onClick={() => setOncolse(!oncolse)}
                >

                    <PlusCircle className="w-5 h-5" />
                    Add Gym
                </button>
            </div>
            {oncolse && (<Addgym setOncolse={setOncolse} />)}

            {/* Gym Cards */}
            <div className={`flex flex-wrap justify-center gap-4 ${oncolse ? "blur-sm pointer-events-none select-none" : ""}`}>
                {filteredGyms.map((gym, index) => (
                    <motion.div
                        key={gym._id || index}
                        className="w-[25rem] h-auto border shadow-lg rounded-xl p-4 bg-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            y: -5,
                            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                        }}
                        transition={{ duration: 1.2, delay: index * 0.1, ease: 'ease-in-out', type: 'spring' }}
                    >
                        <div className="w-full h-[10rem]  rounded-xl mb-4 p-1 flex justify-center items-center" >
                            <img className='w-[25rem] h-[9rem] rounded-lg' src={`http://localhost:3000/uploads/${gym.logo}`} alt="Gym Logo" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 ">
                            {gym.gymName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </h2>
                        <h3 className='text-lg text-gray-500'>{gym.gymowner
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')}</h3>
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {gym.Address}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                            <Users className="w-4 h-4 mr-1" />
                            {gym.members} Members
                            <IndianRupee className="w-4 h-4 ml-4 mr-1" />
                            {gym.cost}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                            <p>{gym.desc}</p>
                        </div>
                        <div className='flex justify-evenly gap-5'>
                            <button onClick={() => gyminfo(gym)} className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
                                View the page
                            </button>
                            <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition">
                                Join Now
                            </button>
                        </div>
                    </motion.div>
                ))}
                {filteredGyms.length === 0 && (
                    <p className="text-gray-500 text-center mt-4">No gyms found.</p>
                )}
            </div>
        </div>
    );
}

export default Explore;
