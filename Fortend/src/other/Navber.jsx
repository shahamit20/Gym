import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navber = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav className="w-full h-[3rem] flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="ml-5">
          <h1 className="text-red-600 text-5xl mt-2">
            FitNest <span className="text-4xl text-black">Club</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="text-white text-2xl flex flex-row gap-8 justify-center items-center mr-5 font-semibold cursor-pointer">
            {/* Home */}
            <motion.li
              className={`p-1 rounded-xl text-black 
                ${isActive("/") ? "underline underline-offset-4 decoration-red-500" : ""}
                hover:underline hover:underline-offset-4 hover:decoration-red-500`}
              onClick={() => navigate("/")}
            >
              Home
            </motion.li>

            {/* Schedule */}
            <motion.li
              className={`p-1 rounded-xl text-black 
                ${isActive("/schedule") ? "underline underline-offset-4 decoration-red-500" : ""}
                hover:underline hover:underline-offset-4 hover:decoration-red-500`}
              onClick={() => navigate("/schedule/workout")}
            >
              Schedule
            </motion.li>

            {/* Dropdown: Fitness */}
            <li
              className="relative p-1 rounded-xl text-black"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span
                className={`cursor-pointer ${
                  ["/gym-group", "/calories"].includes(location.pathname)
                    ? "underline underline-offset-4 decoration-red-500"
                    : ""
                } hover:underline hover:underline-offset-4 hover:decoration-red-500`}
              >
                Fitness <i className="fa-solid fa-angle-down"></i>
              </span>

              {showDropdown && (
                <ul className="absolute top-8 left-0 bg-white text-lg text-black shadow-lg z-50 w-[10rem]">
                  <li
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setShowDropdown(false);
                      navigate("/calories");
                    }}
                  >
                    Calories
                  </li>
                   <li
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setShowDropdown(false);
                      navigate("/gym");
                    }}
                  >
                    Gym Group
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <motion.li
              className={`p-1 rounded-xl text-black 
                ${isActive("/contact") ? "underline underline-offset-4 decoration-red-500" : ""}
                hover:underline hover:underline-offset-4 hover:decoration-red-500`}
              onClick={() => navigate("/contact")}
            >
              FAQ
            </motion.li>

            {/* User Icon */}
            <li
              onClick={() => navigate("/dashboard")}
              className="p-1 rounded-xl text-black"
            >
              <i className="fa-solid fa-circle-user"></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
