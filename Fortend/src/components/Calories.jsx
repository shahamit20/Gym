import React, { useState } from 'react'
import Navber from '../other/Navber'
import { motion } from 'framer-motion';

function Calories() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    height: "",
    weight: "",
    activity: "1.2", // sedentary by default
  });

  const [calories, setCalories] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const calculateCalories = (e) => {
    e.preventDefault();
    const { age, gender, height, weight, activity } = formData;

    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const maintenance = bmr * parseFloat(activity);
    setCalories(Math.round(maintenance));
    setFormData({
      age: "",
      gender: "male",
      height: "",
      weight: "",
      activity: "1.2",
    });
  };
  return (
    <>
      <Navber />
      <div className="p-6 w-full mx-auto text-center  flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-2">Calorie Calculator <span className="text-orange-500">Pro</span></h1>
        <p className="text-gray-600 mb-6">
          The new extended version of the Calorie Calculator is the WordPress plugin your visitors will love.
        </p>

        <div className="w-[70%] h-[35rem] rounded-xl shadow-2xl mt-5 relative bg-slate-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transform: 'rotate(-19deg)' }}
            className="w-[25rem] h-[15rem] bg-blue-700 shadow-2xl absolute bottom-4 -left-20 -z-10 rounded-xl"
          ></motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transform: 'rotate(-19deg)' }}
            className="w-[15rem] h-[15rem] bg-orange-700 shadow-xl absolute -top-[3rem] -right-20 -z-10 rounded-full"></motion.div>

          <form
            onSubmit={calculateCalories}
            className="bg-white h-full px-10 py-6 rounded-xl shadow-xl space-y-6"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Calorie Calculator
            </h2>

            {/* Age and Gender */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
                className="flex flex-col">
                <label className="text-xl font-semibold text-gray-700 mb-1 text-left">Age (years)</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g. 25"
                  className="border-0 outline-none rounded-[15px] p-4 bg-[#ccc] shadow-[inset_2px_5px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out focus:bg-white focus:scale-105 focus:shadow-[13px_13px_100px_#969696,-13px_-13px_100px_#ffffff]"

                  required
                />
              </motion.div>

              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
                className="flex flex-col">
                <label className="text-xl font-semibold text-gray-700 mb-1 text-left">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border-0 outline-none rounded-[15px] p-4 bg-[#ccc] shadow-[inset_2px_5px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out focus:bg-white/80 focus:scale-105 focus:shadow-[13px_13px_100px_#969696,-13px_-13px_100px_#ffffff]"

                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </motion.div>
            </div>

            {/* Height and Weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
                className="flex flex-col"
              >
                <label className="text-xl font-semibold text-gray-700 mb-1 text-left">
                  Height (cm)
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="e.g. 175"
                  required
                  className="border-0 outline-none rounded-[15px] p-4 bg-[#ccc] shadow-[inset_2px_5px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out focus:bg-white focus:scale-105 focus:shadow-[13px_13px_100px_#969696,-13px_-13px_100px_#ffffff]"
                />
              </motion.div>

              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
                className="flex flex-col">
                <label className="text-xl font-semibold text-gray-700 mb-1 text-left">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="e.g. 70"
                  className="border-0 outline-none rounded-[15px] p-4 bg-[#ccc] shadow-[inset_2px_5px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out focus:bg-white focus:scale-105 focus:shadow-[13px_13px_100px_#969696,-13px_-13px_100px_#ffffff]"
                  required
                />
              </motion.div>
            </div>

            {/* Activity Level */}
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              className="flex flex-col">
              <label className="text-xl font-semibold text-gray-700 mb-1 text-left">Activity Level</label>
              <select
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                className="border-0 outline-none rounded-[15px] p-4 bg-[#ccc] shadow-[inset_2px_5px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out focus:bg-white focus:scale-105 focus:shadow-[13px_13px_100px_#969696,-13px_-13px_100px_#ffffff]"

              >
                <option value="1.2">Sedentary (little or no exercise)</option>
                <option value="1.375">Lightly active (light exercise 1–3 days/week)</option>
                <option value="1.55">Moderately active (exercise 3–5 days/week)</option>
                <option value="1.725">Very active (hard exercise 6–7 days/week)</option>
                <option value="1.9">Super active (very hard exercise/physical job)</option>
              </select>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            >
              <button
                type="submit"
                className="w-[14rem] text-[1.2rem] p-3 border-none outline-none rounded-[0.4rem] cursor-pointer uppercase font-bold text-[#eaeaea] bg-orange-700 shadow-xl transition duration-[600ms] hover:bg-gradient-to-l
     hover:from-[rgba(1,21,58,0.68)] hover:to-orange-700 active:scale-[0.92] relative after:content-[''] 
     after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[20px] after:bg-gradient-to-t after:from-[rgba(0,0,0,0.2)] after:to-[rgba(0,0,0,0)] after:blur-sm after:opacity-80"
              >
                Calculate Calories
              </button>
            </motion.div>


            {/* Result */}
            {calories && (
              <div className="mt-4 text-center text-xl font-semibold text-green-600">
                Estimated Maintenance Calories: {calories} kcal/day
              </div>
            )}
          </form>


        </div>


      </div>
    </>
  )
}

export default Calories