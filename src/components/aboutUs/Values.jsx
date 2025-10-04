// // ValuesSection.jsx
// import { motion } from "framer-motion";
// import { FaHeart, FaLightbulb, FaUsers, FaHandshake } from "react-icons/fa";

// // Values data
// const valuesData = {
//   heading: "Our Core Values",
//   cards: [
//     {
//       title: "Passion",
//       desc: "We are passionate about delivering excellence and making every client feel special.",
//       icon: <FaHeart className="text-3xl text-white" />,
//       color: "bg-red-500",
//     },
//     {
//       title: "Innovation",
//       desc: "Constantly innovating to stay ahead and provide the best solutions.",
//       icon: <FaLightbulb className="text-3xl text-white" />,
//       color: "bg-yellow-500",
//     },
//     {
//       title: "Teamwork",
//       desc: "Collaboration is key. We grow together and support each other.",
//       icon: <FaUsers className="text-3xl text-white" />,
//       color: "bg-blue-500",
//     },
//     {
//       title: "Integrity",
//       desc: "Honesty and transparency guide all our actions and decisions.",
//       icon: <FaHandshake className="text-3xl text-white" />,
//       color: "bg-green-500",
//     },
//   ],
// };

// // Framer Motion Variants
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2, delayChildren: 0.1 },
//   },
// };

// const staggerItem = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const Values = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-12"
//         >
//           {valuesData.heading}
//         </motion.h2>

//         {/* Values Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {valuesData.cards.map((card, idx) => (
//             <motion.div
//               key={idx}
//               className={`relative p-6 rounded-xl shadow-lg cursor-pointer overflow-hidden transform transition-transform duration-300`}
//               variants={staggerItem}
//               whileHover={{ y: -10, scale: 1.02 }}
//             >
//               {/* Background Color */}
//               <div
//                 className={`absolute inset-0 rounded-xl opacity-90 ${card.color}`}
//               ></div>

//               {/* Icon */}
//               <div className="relative mb-4">{card.icon}</div>

//               {/* Title */}
//               <h3 className="relative text-xl font-semibold text-white mb-2">
//                 {card.title}
//               </h3>

//               {/* Description */}
//               <p className="relative text-white text-sm">{card.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Values;


// import { motion } from "framer-motion";

// const Values = ({ data, staggerContainer, staggerItem }) => {
//   return (
//     <section className="py-16 px-4 sm:px-10 lg:px-40 relative bg-gray-50">
//       <div className="container mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center text-5xl mb-16 text-[#212529] font-bold"
//         >
//           {data.heading}
//         </motion.h2>
        
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {data.cards.map((card, idx) => (
//             <motion.div
//               key={idx}
//               className="relative p-10 rounded-2xl text-center border border-[#e9ecef] overflow-hidden bg-white/90 shadow-[0_4px_15px_rgba(0,0,0,0.05)] group"
//               variants={staggerItem}
//               whileHover={{ y: -10, scale: 1.02 }}
//             >
//               <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#164374] rounded-full filter blur-2xl opacity-10 group-hover:scale-[3] transition-transform duration-500 ease-in-out"></div>
              
//               <motion.div className="text-5xl text-[#164374] mb-6 relative z-10">
//                 {card.icon}
//               </motion.div>
//               <h3 className="text-2xl font-semibold mb-4 relative z-10 text-[#212529]">{card.title}</h3>
//               <p className="leading-relaxed text-[#212529]/90 relative z-10">{card.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Values;

import { motion } from "framer-motion";

const defaultValuesData = {
  heading: "Our Core Values",
  cards: [
    {
      title: "Excellence",
      desc: "We strive for perfection in every service we provide, ensuring the highest quality experience.",
      icon: "💎"
    },
    {
      title: "Integrity",
      desc: "Our team is honest, transparent, and dedicated to doing the right thing for every client.",
      icon: "🛡️"
    },
    {
      title: "Innovation",
      desc: "We constantly update our techniques and products to bring the latest trends and best results.",
      icon: "🚀"
    }
  ]
};

const Values = ({ data, staggerContainer, staggerItem }) => {
  const valuesData = data || defaultValuesData;

  return (
    <section className="py-16 px-4 sm:px-10 lg:px-40 relative bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-5xl mb-16 text-[#212529] font-bold"
        >
          {valuesData.heading}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {valuesData.cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="relative flex items-center flex-col p-10 rounded-2xl border border-[#e9ecef] overflow-hidden bg-white/90 shadow-[0_4px_15px_rgba(0,0,0,0.05)] group"
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#164374] rounded-full filter blur-2xl opacity-10 group-hover:scale-[3] transition-transform duration-500 ease-in-out"></div> */}

              <motion.div className="text-5xl mb-6 relative z-10">{card.icon}</motion.div>
              <h3 className="text-2xl font-semibold mb-4 relative z-10 text-[#212529]">
                {card.title}
              </h3>
              <p className="leading-relaxed text-[#212529]/90 relative z-10">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
