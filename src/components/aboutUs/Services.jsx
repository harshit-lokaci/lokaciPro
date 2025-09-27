// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPaintBrush, FaCode, FaMobileAlt, FaSearch } from "react-icons/fa";

// // Services data
// const servicesData = {
//   heading: "Our Services",
//   items: [
//     {
//       name: "Web Design",
//       description: "Crafting visually stunning and user-friendly websites.",
//       icon: <FaPaintBrush className="text-3xl text-white" />,
//     },
//     {
//       name: "Web Development",
//       description: "Building responsive and scalable web applications.",
//       icon: <FaCode className="text-3xl text-white" />,
//     },
//     {
//       name: "Mobile Apps",
//       description: "Developing engaging mobile applications for iOS & Android.",
//       icon: <FaMobileAlt className="text-3xl text-white" />,
//     },
//     {
//       name: "SEO Optimization",
//       description:
//         "Improving website ranking and visibility on search engines.",
//       icon: <FaSearch className="text-3xl text-white" />,
//     },
//   ],
// };

// // Framer Motion variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const Services = () => {
//   const [activeService, setActiveService] = useState(null);

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-12"
//         >
//           {servicesData.heading}
//         </motion.h2>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {servicesData.items.map((service, idx) => (
//             <motion.div
//               key={idx}
//               className={`relative p-6 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 ${
//                 activeService === idx
//                   ? "bg-blue-500 text-white scale-105"
//                   : "bg-white text-gray-900"
//               }`}
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="show"
//               whileHover={{ y: -5, scale: 1.02 }}
//               onClick={() => setActiveService(idx)}
//             >
//               {/* Icon */}
//               <div
//                 className={`mb-4 w-12 h-12 flex items-center justify-center rounded-full ${
//                   activeService === idx
//                     ? "bg-white text-blue-500"
//                     : "bg-blue-500 text-white"
//                 }`}
//               >
//                 {service.icon}
//               </div>

//               {/* Name */}
//               <h3 className="text-xl font-semibold mb-2">{service.name}</h3>

//               {/* Description */}
//               <p className="text-sm">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import { motion } from "framer-motion";

const Services = ({ data, activeService, setActiveService }) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-5xl mb-16 text-[#212529] font-bold"
        >
          {data.heading}
        </motion.h2>
        
        <div className="flex justify-center gap-6 flex-wrap">
          {data.items.map((service, idx) => (
            <motion.div
              key={idx}
              className={`w-full max-w-[400px] min-h-[200px] p-8 rounded-xl text-center cursor-pointer border-2 transition-all duration-400 ease-in-out text-[#212529] group ${activeService === idx ? 'bg-[#164374] border-[#164374] text-white -translate-y-2.5' : 'bg-transparent border-[#e9ecef] hover:bg-[#164374] hover:border-[#164374] hover:-translate-y-2.5'}`}
              onClick={() => setActiveService(idx)}
            >
              <div className={`text-4xl mb-4 transition-colors duration-400 ${activeService === idx ? 'text-white' : 'text-[#164374] group-hover:text-white'}`}>{service.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 ${activeService !== idx && 'group-hover:text-white'}`}>{service.name}</h3>
              <p className={`text-sm leading-normal transition-colors duration-400 ${activeService === idx ? 'text-white/90' : 'text-[#6c757d] group-hover:text-white/90'}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;