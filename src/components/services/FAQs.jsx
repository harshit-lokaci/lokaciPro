import React, {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";

import { FiMessageSquare, FiChevronDown } from "react-icons/fi";

const faqs = [
	{
		q: "Do I need to book an appointment in advance?",
		a: "Yes, we recommend booking in advance to ensure availability, especially on weekends.",
	},
	{
		q: "Which hair color brands do you use?",
		a: "We use premium, ammonia-free products from L’Oréal and Wella for safe, lasting results.",
	},
	{
		q: "Do you offer bridal packages?",
		a: "Yes! We have customized bridal packages including hair, makeup, and pre-wedding treatments.",
	},
	{
		q: "Is home service available?",
		a: "Currently, we provide in-salon services only. Home service will be available soon.",
	},
];
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

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
		<section className="max-w-3xl mx-auto px-6 py-16">
			<h2 className="text-center text-4xl font-extrabold mb-12 relative text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-blue-800 after:rounded-full">
				Frequently Asked Questions
			</h2>
			<motion.div
				className="space-y-6"
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.3 }}
			>
				{faqs.map((faq, i) => (
					<motion.div
						key={i}
						className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
						variants={itemVariants}
					>
						<div
							className="flex justify-between items-center cursor-pointer text-lg font-semibold text-black"
							onClick={() => setOpenFaq(openFaq === i ? null : i)}
						>
							<span>{faq.q}</span>
							<motion.div
								className="w-6 h-6"
								animate={{
									rotate: openFaq === i ? 180 : 0,
								}}
								transition={{ duration: 0.3 }}
							>
								<FiChevronDown />
							</motion.div>
						</div>
						<AnimatePresence>
							{openFaq === i && (
								<motion.div
									className="pt-4 text-gray-600"
									initial={{ height: 0, opacity: 0 }}
									animate={{
										height: "auto",
										opacity: 1,
									}}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									<p>{faq.a}</p>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</motion.div>
		</section>
  );
}

export default FAQs