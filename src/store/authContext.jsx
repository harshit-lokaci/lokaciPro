import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AuthContext = createContext({
    token: null,
    isLoggedIn: false,
    userIdentifier: null,
    isProfileUpdated: false,
    login: (token, userIdentifier, isProfileUpdated) => {},
    logout: () => {},
    updateProfileStatus: (status) => {},
});

export const AuthContextProvider = (props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userIdentifier, setUserIdentifier] = useState(localStorage.getItem("userIdentifier"));
    const [isProfileUpdated, setIsProfileUpdated] = useState(
        localStorage.getItem("isProfileUpdated") === "true"
    );

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedProfileStatus = localStorage.getItem("isProfileUpdated") === "true";
        if (storedToken) {
            setToken(storedToken);
            setIsProfileUpdated(storedProfileStatus);
        }
    }, []);

    const userIsLoggedIn = !!token;

    const loginHandler = (token, userIdentifier, isProfileUpdated) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userIdentifier", userIdentifier);
        localStorage.setItem("isProfileUpdated", isProfileUpdated); // Store as string

        setToken(token);
        setUserIdentifier(userIdentifier);
        setIsProfileUpdated(isProfileUpdated);
        toast.success("Login Successfully");
    };

    const logoutHandler = () => {
        setToken(null);
        setUserIdentifier(null);
        setIsProfileUpdated(false); // Reset on logout
        localStorage.removeItem("token");
        localStorage.removeItem("userIdentifier");
        localStorage.removeItem("isProfileUpdated");
        toast.success("Logout Successfully");
        navigate("/");
    };

    const updateProfileStatusHandler = (status) => {
        localStorage.setItem("isProfileUpdated", status);
        setIsProfileUpdated(status);
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        userIdentifier: userIdentifier,
        isProfileUpdated: isProfileUpdated,
        login: loginHandler,
        logout: logoutHandler,
        updateProfileStatus: updateProfileStatusHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;



// import { createContext, useState } from "react";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";

// const AuthContext = createContext({
//   token: localStorage.getItem("token"),
//   isLoggedIn: false,
//   userIdentifier: localStorage.getItem("userIdentifier"),
//   login: (token) => {},
//   logout: () => {},
// });

// export const AuthContextProvider = (props) => {
//   const navigate = useNavigate();
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [userIdentifier, setUserIdentifier] = useState(
//     localStorage.getItem("userIdentifier")
//   );

//   const userIsLoggedIn = !!token;

//   const loginHandler = (token, userIdentifier) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("userIdentifier", userIdentifier);
//     setToken(token);
//     setUserIdentifier(userIdentifier);
//     toast.success("Login Successfully");
//   };

//   const logoutHandler = () => {
//     setToken(null);
//     setUserIdentifier(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("userIdentifier");
//     toast.success("Logout Successfully");
//     navigate("/");
//   };

//   const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     userIdentifier: userIdentifier,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
