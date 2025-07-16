import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // for redirection

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          email: email,       // ✅ keep this as 'email'
          password: password
        })
      });

      const data = await res.json();

      if (res.ok) {
        navigate('/'); // ✅ redirect to home
      } else {
        console.error('Login failed:', data.message);
        alert(data.message); // stay on same page
      }
    } catch (err) {
      console.error('Login error:', err.message);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black/40">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8MHwwfHx8MA%3D%3D" // replace with your fitness image
        alt="Fitness Background"
        className="absolute w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Login Card */}
      <div className="flex justify-center items-center h-full px-4">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg w-full max-w-md text-white animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
              <input
                type="password"
                id="password"
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105"
            >
              Login
            </button>

            <p className="text-sm text-center mt-2">
              Don’t have an account? <a href="/register" className="text-green-400 underline">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
