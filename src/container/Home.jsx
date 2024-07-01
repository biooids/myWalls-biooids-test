import React, { useState } from "react";

import { FiChevronsLeft } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/Xi-biooids-1.jpg";

function Home() {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const [user, setUser] = useState(null);
  const sideMenu = () => {
    setIsSideMenu(!isSideMenu);
  };

  return (
    <>
      <div
        className={`w-2 ${
          isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"
        } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-1000 ease-in-out`}
      >
        {/* anchor */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={sideMenu}
          className="w-8 bg-secondary rounded-r-lg absolute -right-6 flex items-center justify-center cursor-pointer "
        >
          <FiChevronsLeft className="text-cyan-500 text-xl" />
        </motion.div>
        <div className="overflow-hidden w-full flex flex-col gap-4 ">
          <Link
            to={"/home"}
            className="  rounded-lg overflow-hidden w-full h-10 "
          >
            <img src={logo} className="object-cover object-bottom" />
          </Link>
          <Link to={"/newProject"}>
            <div className="px-6 py-3 flex items-center justify-center rounded-xl border border-cyan-100 cursor-pointer group hover:border-cyan-500">
              <p className="text-cyan-500 group-hover:text-cyan-100 ">
                Start Coding
              </p>
            </div>
          </Link>
          {user && (
            <Link
              to={"/home/projects"}
              className="flex justify-center items-center gap-6"
            >
              <FaHome className="text-primaryText text-xl " />
              <p className="text-lg text-cyan-500">home</p>
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-1 min-h-screen max-h-screen overflow-y-scroll h-full  flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12">
        <div className="w-full flex items-center justify-between gap-3 ">
          <div className="bg-secondary w-full p-3 rounded-lg flex items-center justify-center gap-3">
            <ImSearch className="text-2xl text-cyan-500" />
            <input
              type="text"
              className="flex-1 px-4 py-1 text-xl bg-black outline-none border-none text-cyan-500 placeholder:text-cyan-900"
              placeholder="search here..."
            />
          </div>
          {!user && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center gap-3"
            >
              <Link
                to={"/home/auth"}
                className="bg-cyan-600 px-6 py-2 rounded-md text-white text-sm cursor-pointer hover:bg-cyan-500"
              >
                SignUp
              </Link>
            </motion.div>
          )}
          {user && <div></div>}
        </div>

        {/* <div className="w-full ">
          <Routes>
            <Route path="/*" element={<Projects />} />
            <Route path="/auth" element={<SignUp />} />
          </Routes>
        </div> */}
      </div>
    </>
  );
}

export default Home;
