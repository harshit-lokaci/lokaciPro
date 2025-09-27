import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL_API } from "../constants.js";
import AuthContext from "../store/authContext.jsx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import CustomOTPInput from "../components/other/CustomOtpInput.jsx";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const [responseTxt, setResponseTxt] = useState("");
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  // const searchParams = new URLSearchParams(window.location.search);
  const nav = useNavigate();

  const [modeOfVerification, setModeOfVerification] = useState("CARD");
  const [otpRequested, setOtpRequested] = useState(false);
  const [otpSendStatus, setOtpSendStatus] = useState("SENT");
  const [sessionKey, setSessionKey] = useState("");
  const [requestCount, setRequestCount] = useState(0);
  const [otpSentOn, setOtpSentOn] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(45);
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((p) => p - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const sendOtpHandler = (k, n) => {
    if (k === false) {
      setOtpRequested(false);
    } else {
      if (n !== undefined) {
        sendOtp(n);
        setSecondsLeft(45);
      }
    }
  };

  const sendOtp = async (n) => {
    if (n !== "undefined") {
      setOtpSendStatus("SENDING");
      const sendOtpResponse = await fetch(BASE_URL_API + `/auth`, {
        method: `POST`,
        body: JSON.stringify({
          actionType: "sendOtp",
          phone: n,
          requestCount: requestCount,
          sessionKey: sessionKey,
        }),
      });

      if (!sendOtpResponse.ok) {
        setOtpSendStatus("SENT");
        alert("failed");
      } else {
        const sendOtpRespo = await sendOtpResponse.json();
        if (sendOtpRespo?.status === "success") {
          setStep(2);
          setRequestCount(sendOtpRespo?.requestCount);
          setSessionKey(sendOtpRespo?.sessionKey);
          setOtpSentOn(sendOtpRespo?.phone);
          setOtpRequested(true);
          setOtpSendStatus("SENT");
          setResponseTxt("");
        } else {
          setOtpSendStatus("INVALID_CREDENTIALS");
          setResponseTxt(
            "You have entered an invalid number, please try again with valid number."
          );
          setOtpRequested(true);
        }
      }
    }
  };

  const verifyOtp = async (k) => {
    setIsLoading(true);
    const verifyOtpResponse = await fetch(BASE_URL_API + "/auth", {
      method: "POST",
      body: JSON.stringify({
        actionType: "verifyOtp",
        sessionKey: sessionKey,
        otpEntered: k,
        phone: otpSentOn,
      }),
    });

    if (verifyOtpResponse.ok) {
      const verifyOtpRespo = await verifyOtpResponse.json();
      if (verifyOtpRespo.status === "success") {
        if (verifyOtpRespo.authToken !== null) {
          authCtx.login(verifyOtpRespo.authToken, verifyOtpRespo.mobile);
          nav(`/`);
        } else {
          authCtx.logout();
        }
      } else {
        setResponseMessage(verifyOtpRespo.response);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="px-5 h-[80vh] flex justify-center items-center font-inter bg-white">
      <div className="flex justify-center items-center w-full animate-fadeIn">
        <div className="bg-white border border-black/5 rounded-lg p-8 w-full max-w-md text-center shadow-md animate-slideUp">
          {step === 1 && (
            <div>
              <h2 className="mb-3 text-2xl font-bold text-blue-600 flex items-center justify-center">
                <FaPhoneAlt className="mr-2" /> Login
              </h2>
              <div className="mb-6 text-gray-600 text-sm">
                Please enter 10 digit phone number
              </div>

              <div className="flex gap-3 mb-5 bg-[#f3f6fa] p-2 rounded-xl border border-[#e1e5eb]">
                <select
                  className="flex-[0.3] px-3 py-2 rounded-lg bg-[#eaf3ff] text-blue-600 font-semibold text-sm cursor-pointer focus:outline-blue-600"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+81">+81</option>
                </select>
                <input
                  type="number"
                  className="flex-1 px-3 py-2 rounded-lg border-none focus:outline-blue-600"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  maxLength="10"
                  autoFocus
                />
              </div>

              <button
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                onClick={() => sendOtpHandler(true, phone)}
              >
                {otpSendStatus === "SENDING" ? (
                  <span className="flex items-center justify-center">
                    <BiLoaderAlt className="mr-2 animate-spin" /> Sending OTP...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Next <FaPhoneAlt className="ml-2" />
                  </span>
                )}
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="px-4 py-3 text-gray-600 text-sm leading-6 mb-3 flex items-center justify-center">
                <MdOutlinePassword className="mr-2" /> We have sent a 6 digit
                OTP to {phone} on WhatsApp
              </div>
              <h2 className="text-xl font-bold text-blue-600 mb-4">
                Enter OTP
              </h2>

              <CustomOTPInput
                length={6}
                onChange={(otpStr) => {
                  setOtp(otpStr);
                  if (otpStr.length === 6) {
                    verifyOtp(otpStr);
                  }
                }}
              />

              <button
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                onClick={() => verifyOtp(otp)}
              >
                Submit OTP
              </button>

              <button
                onClick={() => setStep(1)}
                className="mt-4 text-gray-600 hover:text-blue-600 flex items-center justify-center gap-2 text-sm font-medium"
              >
                <IoArrowBack /> Back
              </button>
            </div>
          )}

          {responseTxt && (
            <p className="text-red-600 text-sm mt-3">{responseTxt}</p>
          )}
          {responseMessage && (
            <p className="text-red-600 text-sm mt-3">{responseMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
