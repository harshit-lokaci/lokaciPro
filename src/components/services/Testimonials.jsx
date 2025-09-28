import React from "react";
import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";

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
const testimonials = [
	{
		name: "Sophia Miller",
		role: "Regular Client",
		feedback:
			"The best salon experience I’ve ever had. My hair has never looked this good!",
		avatar: "https://i.pravatar.cc/100?img=15",
	},
	{
		name: "Emma Wilson",
		role: "Bride-to-be",
		feedback:
			"They did my bridal makeup and it was flawless. Highly recommend!",
		avatar: "https://i.pravatar.cc/100?img=17",
	},
	{
		name: "Olivia Brown",
		role: "Spa Lover",
		feedback:
			"The spa session was so relaxing. I felt completely rejuvenated!",
		avatar: "https://i.pravatar.cc/100?img=19",
	},
];

const Testimonials = () => {
	return (
		<section className="max-w-6xl mx-auto px-6 py-16">
			<h2 className="text-center text-4xl font-extrabold mb-12 relative text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-blue-800 after:rounded-full">
				What Our Clients Say
			</h2>
			<motion.div
				className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.3 }}
			>
				{testimonials.map((t, i) => (
					<motion.div
						key={i}
						className="bg-white p-8 rounded-2xl text-center shadow-md border border-gray-200"
						variants={itemVariants}
					>
						<FiMessageSquare
							size={40}
							className="mx-auto mb-4 text-blue-800"
						/>
						<p className="italic text-black mb-4">{t.feedback}</p>
						<img
							src={t.avatar}
							alt={t.name}
							className="w-20 h-20 rounded-full border-4 border-blue-400 mx-auto mb-3 shadow-md"
						/>
						<h4 className="text-lg font-semibold">{t.name}</h4>
						<span className="text-gray-500 text-sm">{t.role}</span>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Testimonials;
