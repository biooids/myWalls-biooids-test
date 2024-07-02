import React, { useState } from "react";
import logo from "../assets/Xi-biooids-1.jpg";
import UserAuthInput from "../components/UserAuthInput";
import { motion } from "framer-motion";

import { FaEnvelope, FaEye } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getEmailValidationStatus, setGetEmailValidationStatus] =
    useState(false);
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <div className="text-cyan-500 w-full py-6">
      <img src={logo} className="object-cover rounded-b-lg w-10" alt="Logo" />
      <div className="w-full flex flex-col items-center justify-center py-8">
        <p className="py-12 text-2xl text-cyan-500">Join Us 🤡🤷‍♂️</p>
        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8">
          {/* email */}
          <UserAuthInput
            label="Email"
            placeHolder="Email"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope}
            setGetEmailValidationStatus={setGetEmailValidationStatus}
          />
          <UserAuthInput
            label="Password"
            placeHolder="Password"
            isPass={true}
            key="password"
            setStateFunction={setPassword}
            Icon={RiLockPasswordFill}
          />
          {/* alert section */}
          {/* log in button */}
          {!isLogIn ? (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full py-3 rounded-lg hover:bg-cyan-600 cursor-pointer bg-cyan-500"
            >
              <p className="text-xl text-black">Sign Up</p>
            </motion.div>
          ) : (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full py-3 rounded-lg hover:bg-cyan-600 cursor-pointer bg-cyan-500"
            >
              <p className="text-xl text-black">Log In</p>
            </motion.div>
          )}
          {!isLogIn ? (
            <p>
              Already Have an Account !{" "}
              <span
                onClick={() => setIsLogIn(!isLogIn)}
                className="text-gray-500 underline cursor-pointer "
              >
                Login Here
              </span>
            </p>
          ) : (
            <p>
              Doesn't Have an Account !{" "}
              <span
                onClick={() => setIsLogIn(!isLogIn)}
                className="text-gray-500 underline cursor-pointer "
              >
                Create Here
              </span>
            </p>
          )}
          {/* Or section */}
          <div className="flex items-center justify-center gap-12  ">
            <div className="h-[1px] bg-cyan-600 rounded-md w-24"></div>
            <p className="text-sm "> OR</p>
            <div className="h-[1px] bg-cyan-600 rounded-md w-24"></div>
          </div>
          {/* sign in with google */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-3 justify-center w-full py-3 rounded-lg hover:bg-cyan-600 cursor-pointer bg-cyan-500"
          >
            <FcGoogle className="text-3xl" />

            <p className="text-xl text-black">Google </p>
          </motion.div>
          {/* or section */}
          <div className="flex items-center justify-center gap-12  ">
            <div className="h-[1px] bg-cyan-600 rounded-md w-24"></div>
            <p className="text-sm "> OR</p>
            <div className="h-[1px] bg-cyan-600 rounded-md w-24"></div>
          </div>
          {/* git hub */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-3 justify-center w-full py-3 rounded-lg hover:bg-cyan-600 cursor-pointer bg-cyan-500"
          >
            <FaGithub className="text-3xl text-black" />

            <p className="text-xl text-black">Google </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
