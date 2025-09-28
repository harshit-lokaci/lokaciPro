import React from 'react'
import {motion} from 'framer-motion'

const CTA = () => {
  return (
		<motion.section
			className="bg-gradient-to-br from-[#164374] to-[#306390] text-white text-center px-6 py-20 rounded-3xl shadow-inner mx-6"
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, type: "spring" }}
			viewport={{ once: true, amount: 0.5 }}
		>
			<h2 className="text-4xl font-extrabold mb-4">
				Ready for a Makeover?
			</h2>
			<p className="mb-8 text-lg">
				Book your appointment today and let us pamper you like never
				before.
			</p>
			<motion.button
				className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-transform"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				Book Now
			</motion.button>
		</motion.section>
  );
}

export default CTA