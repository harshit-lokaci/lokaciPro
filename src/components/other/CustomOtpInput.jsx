// CustomOTPInput.jsx
import React, { useState, useRef } from "react";

const CustomOTPInput = ({ length = 6, onChange }) => {
  const [otpValues, setOtpValues] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "");
    const newOtp = [...otpValues];
    newOtp[index] = val;
    setOtpValues(newOtp);
    onChange(newOtp.join(""));

    if (val && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      const newOtp = [...otpValues];
      newOtp[index - 1] = "";
      setOtpValues(newOtp);
      inputsRef.current[index - 1].focus();
      onChange(newOtp.join(""));
    }
  };

  return (
    <div className="flex justify-center gap-3 my-5">
      {otpValues.map((val, i) => (
        <input
          key={i}
          type="text"
          maxLength="1"
          value={val}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          ref={(el) => (inputsRef.current[i] = el)}
          className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
      ))}
    </div>
  );
};

export default CustomOTPInput;
