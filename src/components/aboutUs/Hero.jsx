// import { useRef, useEffect, useState } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   useInView,
// } from "framer-motion";
// import { FaChevronDown } from "react-icons/fa";

// // Hero data inside the component
// const heroData = {
//   title: "About Us",
//   subtitle: "Where beauty meets artistry and dreams come alive",
//   stats: [
//     { number: "10K+", label: "Happy Clients" },
//     { number: "15+", label: "Expert Stylists" },
//     { number: "8", label: "Years Excellence" },
//     { number: "50+", label: "Awards Won" },
//   ],
// };

// const CounterAnimation = ({ end, duration = 2, suffix = "" }) => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(null);
//   const isInView = useInView(countRef);

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const endValue = parseInt(end);
//       const increment = endValue / (duration * 60);
//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= endValue) {
//           setCount(endValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 1000 / 60);
//       return () => clearInterval(timer);
//     }
//   }, [isInView, end, duration]);

//   return (
//     <span ref={countRef}>
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const Hero = () => {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
//   const smoothOpacity = useSpring(heroOpacity, { stiffness: 50, damping: 20 });

//   return (
//     <motion.section
//       ref={heroRef}
//       className="relative h-fit flex flex-col items-center justify-center text-center overflow-hidden"
//       style={{ y: heroY, opacity: smoothOpacity }}
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579247854898-d8f94e9f90c1?q=80&w=1770&auto=format&fit=crop')] bg-cover bg-center z-0"></div>
//       <div className="absolute inset-0 bg-white/70 z-10"></div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 100, scale: 0.5 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
//           className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4"
//         >
//           {heroData.title}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-lg md:text-xl text-gray-700 max-w-xl"
//         >
//           {heroData.subtitle}
//         </motion.p>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="mt-10 flex flex-wrap justify-center gap-6"
//         >
//           {heroData.stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="bg-white/90 backdrop-blur-md p-6 rounded-xl w-40 h-28 flex flex-col items-center justify-center shadow"
//             >
//               <div className="text-4xl font-bold text-blue-700">
//                 <CounterAnimation
//                   end={stat.number.replace(/\D/g, "")}
//                   suffix={stat.number.replace(/\d/g, "")}
//                 />
//               </div>
//               <div className="text-sm text-gray-800 mt-1">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="mt-10 text-3xl text-gray-900"
//         >
//           <FaChevronDown />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;


// import { motion } from "framer-motion";
// import { FaChevronDown } from "react-icons/fa";
// import CounterAnimation from "./CounterAnimation";

// const Hero = ({ heroRef, y, opacity, data }) => {
//   return (
//     <motion.section
//       ref={heroRef}
//       className="relative h-fit flex items-center justify-center text-center overflow-hidden w-full py-24"
//       style={{ y, opacity }}
//     >
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579247854898-d8f94e9f90c1?q=80&w=1770&auto=format&fit=crop')] bg-cover bg-center z-10"></div>
//       <div className="absolute inset-0 bg-white/70 z-20"></div>

//       <div className="relative z-30 w-full flex items-center justify-center flex-col p-4">
//         <motion.h1
//           initial={{ opacity: 0, y: 100, scale: 0.5 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
//           className="text-[clamp(3rem,8vw,5rem)] font-extrabold tracking-[-2px] text-[#212529]"
//           style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}
//         >
//           {data.title}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-[clamp(1rem,3vw,1.5rem)] mt-4 max-w-[600px] text-[#212529]"
//         >
//           {data.subtitle}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="flex flex-wrap justify-center gap-8 mt-12"
//         >
//           {data.stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white/90 p-6 w-[200px] rounded-xl border border-[#e9ecef] backdrop-blur-lg transition-all duration-300 ease-in-out shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] text-center"
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <div className="text-4xl font-bold text-[#164374]">
//                 <CounterAnimation end={stat.number.replace(/\D/g, '')} suffix={stat.number.replace(/\d/g, '')} />
//               </div>
//               <div className="text-sm text-[#212529] mt-2">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import CounterAnimation from "./CounterAnimation";

const defaultHeroData = {
  title: "Where Beauty Begins",
  subtitle: "Where Style Meets Sophistication",
  backgroundImage: "https://images.unsplash.com/photo-1579247854898-d8f94e9f90c1?q=80&w=1770&auto=format&fit=crop",
  overlayColor: "rgba(255,255,255,0.7)",
  stats: [
    { label: "Happy Clients", number: "500+" },
    { label: "Years Experience", number: "10+" },
    { label: "Awards Won", number: "25+" }
  ]
};

const Hero = ({ heroRef, y, opacity, data }) => {
  const heroData = data || defaultHeroData;

  return (
    <motion.section
      ref={heroRef}
      className="relative h-fit flex items-center justify-center text-center overflow-hidden w-full py-14"
      style={{ y, opacity }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{ backgroundColor: heroData.overlayColor }}
      />

      {/* Content */}
      <div className="relative z-30 w-full flex items-center justify-center flex-col p-4">
        {/* <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          className="text-[clamp(3rem,8vw,5rem)] font-extrabold tracking-[-2px] text-[#212529]"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}
        >
          {heroData.title}
        </motion.h1> */}

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[clamp(1rem,3vw,1.5rem)] mt-4 max-w-[600px] text-[#212529]"
        >
          {heroData.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {heroData.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white/90 px-6 py-12 w-[250px] rounded-xl border border-[#e9ecef] backdrop-blur-lg transition-all duration-300 ease-in-out shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold text-[#164374]">
                <CounterAnimation
                  end={stat.number.replace(/\D/g, "")}
                  suffix={stat.number.replace(/\d/g, "")}
                />
              </div>
              <div className="text-sm text-[#212529] mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
