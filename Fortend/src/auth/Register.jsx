import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate(); 
   const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    fitnessGoal: '',
    calories:'',
    level:''
  });

   const handleChange = (e) => {
setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
   const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
          age: parseInt(formData.age),
          gender: formData.gender,
          fitnessGoal: formData.fitnessGoal,
          calories:formData.calories,
          level:formData.level
        })
      });
      
      const result = await res.json();
      console.log('Success:', result);

      if (res.ok) {
        navigate('/login');
      } else {
        alert(result.message || 'Registration failed');
      }
  };
  return (
    <div className="relative w-full h-screen bg-black/40">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1535743686920-55e4145369b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGd5bXxlbnwwfDB8MHx8fDA%3D"
        alt="Fitness Background"
        className="absolute w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md text-white animate-fade-in max-h-[90vh] overflow-y-auto scrollbar-hide">
          <h2 className="text-3xl font-bold mb-6 text-center">Create Your Account</h2>

          <form onSubmit={handleSubmit}  className="flex flex-col gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name='fullname'
                 onChange={handleChange}
                 value={formData.fullname}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                name='email'
                 onChange={handleChange}
                 value={formData.email}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Password */}
         

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-sm mb-1">Age</label>
              <input
                type="number"
                id="age"
                name='age'
                 onChange={handleChange}
                 value={formData.age}
                placeholder="e.g. 21"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender"  className="block text-sm mb-1">Gender</label>
              <select
                id="gender"
                 onChange={handleChange}
                name='gender'
                value={formData.gender}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select</option>
                <option value="male" className="text-black">Male</option>
                <option value="female" className="text-black">Female</option>
                <option value="other" className="text-black">Other</option>
              </select>
            </div>

            {/* Fitness Goal */}
            <div>
              <label htmlFor="goal" className="block text-sm mb-1">Fitness Goal</label>
              <select
                id="goal"
                name='fitnessGoal'
                 onChange={handleChange}
                 value={formData.fitnessGoal}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select your goal</option>
                <option value="lose" className="text-black">Lose Fat</option>
                <option value="gain" className="text-black">Gain Muscle</option>
                <option value="maintain" className="text-black">Maintain</option>
              </select>
            </div>

            <div>
              <label htmlFor="calories" className="block text-sm mb-1">calories</label>
              <input
                type="number"
                id="calories"
                name='calories'
                value={formData.calories}
                 onChange={handleChange}
                placeholder="e.g. 2500"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label htmlFor="level"  className="block text-sm mb-1">Fitness level</label>
              <select
                id="level"
                 onChange={handleChange}
                name='level'
                value={formData.level}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select</option>
                <option value="beginner" className="text-black">Beginner</option>
                <option value="intermediate" className="text-black">Intermediate</option>
                <option value="advanced" className="text-black">Advanced</option>
              </select>
            </div>

               <div>
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
              <input
                type="password"
                id="password"
                name='password'
                value={formData.password}
                 onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 mt-2"
            >
              Register
            </button>

            <p className="text-sm text-center mt-2">
              Already have an account? <a href="/login" className="text-green-400 underline">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
