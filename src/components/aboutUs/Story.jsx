// // StorySection.jsx
// import { motion } from "framer-motion";
// import { FaAward } from "react-icons/fa";

// // Story data
// const storyData = {
//   heading: "Our Journey to Excellence",
//   text1:
//     "Since our inception, we have strived to create a space where creativity meets precision. Our team of experts ensures every client feels special.",
//   text2:
//     "Through dedication, passion, and innovation, we have grown into a trusted brand in the beauty industry, earning numerous accolades along the way.",
//   achievements: [
//     "Top Rated Salon 2022",
//     "Certified Expert Stylists",
//     "Over 10,000 Happy Clients",
//     "Multiple Industry Awards",
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

// const Story = () => {
//   return (
//     <section className="relative py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <motion.div
//           className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Story Content */}
//           <motion.div className="flex-1" variants={staggerItem}>
//             <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
//               {storyData.heading}
//             </h2>
//             <div className="text-gray-700 space-y-4 mb-8">
//               <p>{storyData.text1}</p>
//               <p>{storyData.text2}</p>
//             </div>

//             {/* Achievement Badges */}
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
//               {storyData.achievements.map((achievement, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center gap-2 p-3 bg-white shadow rounded-lg"
//                 >
//                   <FaAward className="text-yellow-400 text-xl" />
//                   <span className="text-gray-800 text-sm">{achievement}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Story Image */}
//           <motion.div className="flex-1 w-full" variants={staggerItem}>
//             <div className="relative w-full h-80 sm:h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop"
//                 alt="Salon Interior"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/20"></div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Story;


// import { motion } from "framer-motion";
// import { FaAward } from "react-icons/fa";

// const Story = ({ data, staggerContainer, staggerItem }) => {
//   return (
//     <section className="py-24 px-4 sm:px-12 relative z-10 bg-white">
//       <div className="container mx-auto">
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:px-16"
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <motion.div variants={staggerItem} className="lg:pr-8 lg:order-1 order-2">
//             <h2 className="text-5xl font-extrabold mb-6 text-[#212529]">
//               {data.heading}
//             </h2>
//             <div className="space-y-4 text-[#212529]/90">
//               <p className="leading-loose">{data.text1}</p>
//               <p className="leading-loose">{data.text2}</p>
//             </div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
//               {data.achievements.map((achievement, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-[#e9ecef]"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <FaAward className="text-[#164374] text-xl" />
//                   <span className="text-sm">{achievement}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             variants={staggerItem}
//             className="relative rounded-2xl overflow-hidden shadow-2xl lg:order-2 order-1"
//           >
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop"
//                 alt="Salon Interior"
//                 className="w-full h-full object-cover block"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#164374]/10 to-[#2c3e50]/10"></div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Story;

import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const defaultStoryData = {
  heading: "Our Story",
  text1: "Founded with a passion for beauty, our salon has been transforming lives with style and sophistication.",
  text2: "We believe in providing top-notch services that combine creativity, expertise, and personalized care for every client.",
  achievements: ["500+ Happy Clients", "10+ Years Experience", "25 Awards Won", "Professional Team"],
  imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop"
};

const Story = ({ data, staggerContainer, staggerItem }) => {
  // const storyData = data || defaultStoryData; // Use provided data or fallback to default
  const storyData = defaultStoryData;

  return (
    <section className="py-24 px-4 sm:px-12 relative z-10 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:px-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text Column */}
          <motion.div variants={staggerItem} className="lg:pr-8 lg:order-1 order-2">
            <h2 className="text-5xl font-extrabold mb-6 text-[#212529]">
              {storyData.heading}
            </h2>
            <div className="space-y-4 text-[#212529]/90">
              <p className="leading-loose">{storyData.text1}</p>
              <p className="leading-loose">{storyData.text2}</p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {storyData.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-[#e9ecef]"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaAward className="text-[#164374] text-xl" />
                  <span className="text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            variants={staggerItem}
            className="relative rounded-2xl overflow-hidden shadow-2xl lg:order-2 order-1"
          >
            <div className="relative">
              <img
                src={storyData.imageUrl}
                alt="Salon Interior"
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#164374]/10 to-[#2c3e50]/10"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
