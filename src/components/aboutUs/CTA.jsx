// // CTASection.jsx
// import { motion } from "framer-motion";
// import { FaCalendarAlt, FaPhone, FaMapMarkerAlt, FaStar } from "react-icons/fa";

// const CTA = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           {/* Heading with gradient animation */}
//           <motion.h2
//             className="text-3xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-white to-yellow-200 animate-gradient-x"
//             animate={{ backgroundPosition: ["0%", "100%"] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//           >
//             Ready for Your Transformation?
//           </motion.h2>

//           {/* Subtext */}
//           <p className="text-lg lg:text-xl max-w-2xl mx-auto">
//             Join thousands of satisfied clients who've discovered their most
//             beautiful selves at Glamour Touch Salon.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
//             <motion.button
//               className="flex items-center justify-center gap-2 bg-white text-pink-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-50 transition-transform duration-200"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <FaCalendarAlt /> Book Your Appointment
//             </motion.button>

//             <motion.button
//               className="flex items-center justify-center gap-2 border border-white bg-transparent text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-pink-600 transition-transform duration-200"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <FaPhone /> Call Us Now
//             </motion.button>
//           </div>

//           {/* Contact Info */}
//           <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 text-sm lg:text-base">
//             <div className="flex items-center gap-2">
//               <FaMapMarkerAlt /> 123 Glamour St, Beauty City
//             </div>
//             <div className="flex items-center gap-2">
//               <FaPhone /> (555) 123-456-789
//             </div>
//             <div className="flex items-center gap-2">
//               <FaStar className="text-yellow-400" /> 4.9/5 Rating
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CTA;


import { motion } from "framer-motion";
import { FaCalendarAlt, FaPhone, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const Cta = () => {
  return (
    <section className="py-8 px-4 sm:px-8 lg:px-32 text-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/80 p-8 sm:p-16 rounded-3xl border border-[#e9ecef] shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
        >
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-[#212529] mb-6">
            Ready for Your Transformation?
          </motion.h2>
          
          <p className="max-w-xl mx-auto mb-8 text-[#6c757d]">
            Join thousands of satisfied clients who've discovered their most beautiful selves at Glamour Touch Salon.
          </p>
          
          <div className="flex justify-center gap-6 flex-col sm:flex-row items-center">
            <motion.button
              className="w-full sm:w-auto py-4 px-8 rounded-full border-none text-base font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 ease-in-out bg-[#164374] text-white hover:bg-[#0056b3]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt />
              Book Your Appointment
            </motion.button>
            
            <motion.button
              className="w-full sm:w-auto py-4 px-8 rounded-full text-base font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 ease-in-out bg-transparent text-[#164374] border-2 border-[#164374] hover:bg-[#164374] hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone />
              Call Us Now
            </motion.button>
          </div>
          
          <div className="mt-10 flex justify-center gap-4 sm:gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-[#212529]">
              <FaMapMarkerAlt />
              Address...
            </div>
            <div className="flex items-center gap-2 text-[#212529]">
              <FaPhone />
              (555) 123-456-789
            </div>
            <div className="flex items-center gap-2 text-[#212529]">
              <FaStar />
              4.9/5 Rating
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;