import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AuthContext = createContext({
  token: localStorage.getItem("token"),
  isLoggedIn: false,
  userIdentifier: localStorage.getItem("userIdentifier"),
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userIdentifier, setUserIdentifier] = useState(
    localStorage.getItem("userIdentifier")
  );

  const userIsLoggedIn = !!token;

  const loginHandler = (token, userIdentifier) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userIdentifier", userIdentifier);
    setToken(token);
    setUserIdentifier(userIdentifier);
    toast.success("Login Successfully");
  };

  const logoutHandler = () => {
    setToken(null);
    setUserIdentifier(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userIdentifier");
    toast.success("Logout Successfully");
    navigate("/");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userIdentifier: userIdentifier,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
