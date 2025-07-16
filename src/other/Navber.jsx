import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navber = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className='w-[100%] h-[3rem]   flex flex-row justify-between items-center'>
        <div className='ml-5'>
          <h1 className='text-red-600 text-5xl mt-2' >FitNest <span className='text-4xl text-black '>Club</span></h1>
        </div>
        <div>
          <ul className=' text-white text-2xl flex flex-row gap-8 justify-center items-center mr-5 font-semibold cursor-pointer'>
            <motion.li
              className="hover:bg-red-500 p-1 rounded-xl text-black"
              onClick={() => navigate("/")}
            >
              Home
            </motion.li>
            <motion.li
              className="hover:bg-red-500 p-1 rounded-xl text-black"
              onClick={() => navigate("/schedule")}
            >
              Schedule
            </motion.li>
            <li className="hover:bg-red-500 p-1 rounded-xl text-black">Sport</li>
            <li className="hover:bg-red-500 p-1 rounded-xl text-black">Contact</li>
            <li  onClick={() => navigate("/dashboard")} className="p-1 rounded-xl text-black">
              <i className="fa-solid fa-circle-user"></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
