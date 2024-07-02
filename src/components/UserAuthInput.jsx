import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

function UserAuthInput({
  label,
  placeHolder,
  isPass,
  setStateFunction,
  Icon,
  setGetEmailValidationStatus,
}) {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // Default to true to avoid showing error initially

  const handleTextChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setStateFunction(inputValue);

    if (placeHolder === "Email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const status = emailRegex.test(inputValue);
      setIsEmailValid(status);
      setGetEmailValidationStatus(status);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start">
      <label className="text-sm">{label}</label>
      <div
        className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-lg py-1 px-4 bg-gray-200 ${
          !isEmailValid &&
          placeHolder === "Email" &&
          value.length > 0 &&
          "border-2 border-red-500"
        }`}
      >
        <Icon className="text-2xl" />
        <input
          type={isPass && !showPass ? "password" : "text"}
          className="text-lg text-gray-700 w-full p-2 outline-none border-none flex-1"
          placeholder={placeHolder}
          value={value}
          onChange={handleTextChange}
        />
        {isPass && (
          <motion.div
            onClick={() => setShowPass(!showPass)}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            {showPass ? (
              <FaEye className="text-2xl" />
            ) : (
              <FaEyeSlash className="text-2xl" />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default UserAuthInput;
