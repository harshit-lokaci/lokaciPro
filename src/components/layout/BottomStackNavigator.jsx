// BottomStackNavigator.jsx
import { BiHome } from "react-icons/bi";
import { FaStore, FaUser } from "react-icons/fa";
import { MdCardGiftcard, MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router";

const BottomStackNavigator = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-around items-center h-[8svh] z-50">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center justify-center w-12 h-12 transition-colors ${
            isActive ? "text-blue-500" : "text-gray-500"
          }`
        }
      >
        <BiHome size={26} />
      </NavLink>

      <NavLink
        to="/gift-cards"
        className={({ isActive }) =>
          `flex items-center justify-center w-12 h-12 transition-colors ${
            isActive ? "text-blue-500" : "text-gray-500"
          }`
        }
      >
        <MdCardGiftcard size={26} />
      </NavLink>

      <NavLink
        to="/store0002/price-list"
        className={({ isActive }) =>
          `flex items-center justify-center w-12 h-12 transition-colors ${
            isActive ? "text-blue-500" : "text-gray-500"
          }`
        }
      >
        <MdOutlineLocalOffer size={26} />
      </NavLink>

      <NavLink
        to="/stores"
        className={({ isActive }) =>
          `flex items-center justify-center w-12 h-12 transition-colors ${
            isActive ? "text-blue-500" : "text-gray-500"
          }`
        }
      >
        <FaStore size={26} />
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex items-center justify-center w-12 h-12 transition-colors ${
            isActive ? "text-blue-500" : "text-gray-500"
          }`
        }
      >
        <FaUser size={24} />
      </NavLink>
    </div>
  );
};

export default BottomStackNavigator;
