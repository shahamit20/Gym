import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Navbver from './other/Navber';
import Calories from './components/Calories';
import { useEffect, useState } from 'react';
import Login from './auth/Login';
import Register from './auth/Register';
import User from './components/Dashboard/User';

function App() {
  const [data, setData] = useState(null);
  const location = useLocation(); // 👈 get current route
  const [email, setEmail] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      const validPaths = ['/', '/schedule', '/Calories', '/login', '/register']; // Only fetch for these
      const path = location.pathname === '/' ? '' : location.pathname;

      if (!validPaths.includes(location.pathname)) return;

      try {
        const res = await fetch(`http://localhost:3000${path}`);
        const json = await res.json();
        setData(json.message);
        console.log('Fetched from backend:', json.message);
      } catch (error) {
        console.error('Failed to fetch:', error.message);
      }
    };

    fetchData();
  }, [location]);

  return (
    <>
      {/* <Navbver /> */}
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/Calories" element={<Calories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
