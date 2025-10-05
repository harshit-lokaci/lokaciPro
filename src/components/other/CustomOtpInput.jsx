import React, { useState, useRef, useEffect, forwardRef } from "react";

const CustomOTPInput = forwardRef(({ length = 6, onChange }, otpInputRef) => {
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

  useEffect(() => {
    // Focus the first input on mount if ref is provided
    if (otpInputRef?.current) {
      otpInputRef.current.focus();
    }
  }, [otpInputRef]);

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
          ref={(el) => {
            inputsRef.current[i] = el;
            if (i === 0 && otpInputRef) otpInputRef.current = el; // attach first input to parent ref
          }}
          className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-black-600 focus:ring-2 focus:ring-black-500"
        />
      ))}
    </div>
  );
});

export default CustomOTPInput;
