import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const EachFAQ = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border border-gray-200 rounded-xl mb-3 shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
			{/* Question */}
			<div
				onClick={() => setIsOpen(!isOpen)}
				className="flex justify-between items-center cursor-pointer select-none px-4 py-3"
			>
				<h3 className="text-gray-800 font-medium text-sm">
					{item?.question}
				</h3>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3 }}
					className="text-gray-500"
				>
					<BiChevronDown size={24} />
				</motion.div>
			</div>

			{/* Answer */}
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.35, ease: "easeInOut" }}
						className="px-4 pb-4 text-gray-600 text-sm leading-relaxed"
					>
						{item?.answer}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default EachFAQ;
