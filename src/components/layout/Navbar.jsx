import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router";

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const Navbar = ({ authCtx }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/60 backdrop-blur-md shadow-md">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex justify-between items-center h-[8svh]">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold tracking-tight">
            Lokaci
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition ${
                    isActive ? "text-gray-900" : ""
                  }`
                }
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-current transition-all group-hover:w-full"></span>
              </NavLink>
            ))}

            {authCtx.isLoggedIn ? (
              <button
                onClick={authCtx.logout}
                className="ml-4 px-4 py-2 rounded-full bg-black text-white font-semibold transition transform hover:scale-105 hover:shadow-md"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="ml-4 px-4 py-2 rounded-full bg-black text-white font-semibold transition transform hover:scale-105 hover:shadow-md"
              >
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {authCtx.isLoggedIn ? (
              <button
                onClick={authCtx.logout}
                className="px-3 py-2 rounded-full bg-black text-white font-semibold text-sm"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="px-3 py-2 rounded-full bg-black text-white font-semibold text-sm"
              >
                Login
              </NavLink>
            )}

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/90 backdrop-blur-md shadow-inner"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-gray-700 font-medium text-base hover:text-black"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
