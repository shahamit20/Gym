import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/dashboard", {
      method: "GET",
      credentials: "include" // ⚠️ Needed for cookie/session-based auth
    })
      .then(res => {
        if (res.status === 401) {
          navigate("/"); // If not logged in, redirect to login
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
    <div>
      <h2>User Dashboard</h2>
      {/* {user ? (
        <div>
          <p><strong>Name:</strong> {user.fullname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Goal:</strong> {user.fitnessGoal}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )} */}
    </div>
  );
}

export default Dashboard;
