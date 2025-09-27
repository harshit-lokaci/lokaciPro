import { Outlet, useLocation } from "react-router";
import BottomStackNavigator from "./components/layout/BottomStackNavigator.jsx";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/layout/Navbar.jsx";

const Layout = ({ authCtx }) => {
  const location = useLocation();

  // Don't show header/footer on /login
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <div className="flex flex-col min-h-fit py-[8svh]">
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
