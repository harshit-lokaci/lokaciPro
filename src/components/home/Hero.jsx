import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { NavLink, useLocation } from "react-router";

const Hero = () => {
  const location = useLocation();
  const pathname = location.pathname;
  // const currentSlug = pathname.split("/")[1] || "";

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[calc(100vh-8rem-0rem)] overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/assets/salonhero.jpeg")`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-5xl w-full px-4 flex flex-col items-center">
        <motion.h1
          className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Where Beauty Begins
        </motion.h1>

        <motion.p
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] mb-10 opacity-90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          Where Style Meets Sophistication
        </motion.p>

        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <NavLink
            to={`/contact`}
            className="inline-flex text-white items-center justify-center gap-3 px-10 py-4 text-lg font-bold rounded-full bg-black shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            Get Pampered
            <FaArrowRight />
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
