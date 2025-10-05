import { Outlet, useLocation } from "react-router";
import BottomStackNavigator from "./components/layout/BottomStackNavigator.jsx";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/layout/Navbar.jsx";
import { useContext } from "react";
import AuthContext from "./store/authContext.jsx";
// import ProfileUpdatePopup from "./components/layout/ProfileUpdatePopup.jsx"; // Import the popup

const Layout = () => {
    const location = useLocation();
    const authCtx = useContext(AuthContext);

    // Determine if the popup should be shown
    // const showProfilePopup = authCtx.isLoggedIn && !authCtx.isProfileUpdated;

    // const handlePopupClose = () => {
    //     // The popup's internal logic now handles updating the context,
    //     // so this can simply be an empty function or used for other logic if needed.
    //     // The re-render triggered by the context update will hide the popup.
    // };

    // Don't show header/footer on /login
    const hideHeaderFooter = location.pathname === "/login";

    return (
        <div className="flex flex-col min-h-fit py-[8svh]">
            {/* Conditionally render the popup */}
            {/* {showProfilePopup && <ProfileUpdatePopup onClose={handlePopupClose} />} */}

            {/* Fixed Header */}
            {!hideHeaderFooter && <Navbar authCtx={authCtx} />}

            {/* Main content */}
            <Outlet />

            {/* Fixed Footer */}
            {!hideHeaderFooter && <BottomStackNavigator />}

            {/* ToastContainer */}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Layout;





// import { Outlet, useLocation } from "react-router";
// import BottomStackNavigator from "./components/layout/BottomStackNavigator.jsx";
// import { ToastContainer } from "react-toastify";
// import Navbar from "./components/layout/Navbar.jsx";

// const Layout = ({ authCtx }) => {
//   const location = useLocation();

//   // Don't show header/footer on /login
//   const hideHeaderFooter = location.pathname === "/login";

//   return (
//     <div className="flex flex-col min-h-fit py-[8svh]">
//       {/* Fixed Header */}
//       {!hideHeaderFooter && <Navbar authCtx={authCtx} />}

//       {/* Main content */}
//       <Outlet />

//       {/* Fixed Footer */}
//       {!hideHeaderFooter && <BottomStackNavigator />}

//       {/* ToastContainer */}
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// };

// export default Layout;
