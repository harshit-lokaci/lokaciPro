// import React from 'react'
// import { motion } from "framer-motion";

// const containerVariants = {
// 	hidden: { opacity: 0 },
// 	show: {
// 		opacity: 1,
// 		transition: { staggerChildren: 0.1, delayChildren: 0.3 },
// 	},
// };
// const itemVariants = {
// 	hidden: { y: 30, opacity: 0 },
// 	show: {
// 		y: 0,
// 		opacity: 1,
// 		transition: { type: "spring", stiffness: 100, damping: 10 },
// 	},
// };

// const processSteps = [
// 	{
// 		step: "01",
// 		title: "Book an Appointment",
// 		desc: "Choose your service and book online or call us.",
// 	},
// 	{
// 		step: "02",
// 		title: "Consultation",
// 		desc: "Our experts will understand your needs and preferences.",
// 	},
// 	{
// 		step: "03",
// 		title: "Pampering Session",
// 		desc: "Sit back, relax, and enjoy your luxurious treatment.",
// 	},
// 	{
// 		step: "04",
// 		title: "Aftercare Advice",
// 		desc: "We provide tips to maintain your look even after you leave.",
// 	},
// ];

// const Process = () => {
//   return (
// 		<section className="max-w-6xl mx-auto px-6 py-16">
// 			<h2 className="text-center text-4xl font-extrabold mb-12 relative text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-blue-800 after:rounded-full">
// 				How It Works
// 			</h2>

// 			<motion.div
// 				className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
// 				variants={containerVariants}
// 				initial="hidden"
// 				whileInView="show"
// 				viewport={{ once: true, amount: 0.3 }}
// 			>
// 				{processSteps.map((step) => (
// 					<motion.div
// 						key={step.step}
// 						className="bg-white p-10 rounded-2xl text-center border border-gray-200 shadow-md hover:shadow-xl transition-transform"
// 						variants={itemVariants}
// 						whileHover={{ scale: 1.03 }}
// 						transition={{
// 							type: "spring",
// 							stiffness: 400,
// 							damping: 10,
// 						}}
// 					>
// 						{/* Step Number Circle */}
// 						<div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-6 text-white font-extrabold text-xl shadow-md">
// 							{step.step}
// 						</div>

// 						{/* Content */}
// 						<h3 className="text-xl font-bold mb-2">{step.title}</h3>
// 						<p className="text-gray-600">{step.desc}</p>
// 					</motion.div>
// 				))}
// 			</motion.div>
// 		</section>
//   );
// }

// export default Process

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const defaultProcessData = {
  heading: "How It Works",
  steps: [
    { step: "01", title: "Book an Appointment", desc: "Choose your service and book online or call us." },
    { step: "02", title: "Consultation", desc: "Our experts will understand your needs and preferences." },
    { step: "03", title: "Pampering Session", desc: "Sit back, relax, and enjoy your luxurious treatment." },
    { step: "04", title: "Aftercare Advice", desc: "We provide tips to maintain your look even after you leave." }
  ]
};

const Process = ({ data }) => {
  const processData = data || defaultProcessData;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-center text-4xl font-extrabold mb-12 relative text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-blue-800 after:rounded-full">
        {processData.heading}
      </h2>

      <motion.div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {processData.steps.map((step) => (
          <motion.div
            key={step.step}
            className="bg-white p-10 rounded-2xl text-center border border-gray-200 shadow-md hover:shadow-xl transition-transform"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Step Number Circle */}
            <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-6 text-white font-extrabold text-xl shadow-md">
              {step.step}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Process;
