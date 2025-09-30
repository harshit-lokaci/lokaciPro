// import { motion } from "framer-motion";

// import {
// 	FiScissors,
// 	FiEdit2,
// 	FiSmile,
// 	FiHeart,
// 	FiStar,
// 	FiCoffee,
// 	FiMessageSquare,
// 	FiChevronDown,
// } from "react-icons/fi";

// const servicesData = [
// 	{
// 		id: 1,
// 		title: "Haircuts & Styling",
// 		description:
// 			"Trendy cuts, blow-dry, and professional styling for every occasion.",
// 		icon: <FiScissors size={24} />,
// 	},
// 	{
// 		id: 2,
// 		title: "Hair Coloring",
// 		description:
// 			"Balayage, highlights, global color, and root touch-ups with premium products.",
// 		icon: <FiEdit2 size={24} />,
// 	},
// 	{
// 		id: 3,
// 		title: "Manicure & Pedicure",
// 		description:
// 			"Relaxing nail care, cuticle treatment, and spa pedicures for healthy hands & feet.",
// 		icon: <FiSmile size={24} />,
// 	},
// 	{
// 		id: 4,
// 		title: "Facials & Skincare",
// 		description:
// 			"Hydrating facials, clean-ups, and glow treatments customized for your skin.",
// 		icon: <FiHeart size={24} />,
// 	},
// 	{
// 		id: 5,
// 		title: "Makeup Services",
// 		description:
// 			"Bridal, party, and casual makeup by our professional makeup artists.",
// 		icon: <FiStar size={24} />,
// 	},
// 	{
// 		id: 6,
// 		title: "Spa & Massage",
// 		description:
// 			"Head, body, and relaxation therapies to refresh your mind and body.",
// 		icon: <FiCoffee size={24} />,
// 	},
// ];
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

// const Service = () => {
// 	// motion variants

// 	return (
// 		<>
// 			<section className="max-w-6xl mx-auto px-6 py-16">
// 				<h2 className="text-center text-4xl font-extrabold mb-12 relative text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-blue-800 after:rounded-full">
// 					Our Services
// 				</h2>
// 				<motion.div
// 					className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
// 					variants={containerVariants}
// 					initial="hidden"
// 					whileInView="show"
// 					viewport={{ once: true, amount: 0.3 }}
// 				>
// 					{servicesData.map((service) => (
// 						<motion.div
// 							key={service.id}
// 							className="bg-white p-10 rounded-2xl text-center border border-gray-200 shadow-md hover:shadow-xl transition-transform"
// 							variants={itemVariants}
// 							whileHover={{ scale: 1.03 }}
// 							transition={{
// 								type: "spring",
// 								stiffness: 400,
// 								damping: 10,
// 							}}
// 						>
// 							<div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-6 text-white shadow-md">
// 								{service.icon}
// 							</div>
// 							<h3 className="text-xl font-bold mb-2">
// 								{service.title}
// 							</h3>
// 							<p className="text-gray-600">
// 								{service.description}
// 							</p>
// 						</motion.div>
// 					))}
// 				</motion.div>
// 			</section>
// 		</>
// 	);
// };

// export default Service;


import { motion } from "framer-motion";
import {
  FiScissors,
  FiEdit2,
  FiSmile,
  FiHeart,
  FiStar,
  FiCoffee,
} from "react-icons/fi";

// Default icon map
const iconMap = {
  FiScissors: FiScissors,
  FiEdit2: FiEdit2,
  FiSmile: FiSmile,
  FiHeart: FiHeart,
  FiStar: FiStar,
  FiCoffee: FiCoffee,
};

// Default services data
const defaultServices = [
  { id: 1, title: "Haircuts & Styling", description: "Trendy cuts, blow-dry, and professional styling for every occasion.", icon: "FiScissors" },
  { id: 2, title: "Hair Coloring", description: "Balayage, highlights, global color, and root touch-ups with premium products.", icon: "FiEdit2" },
  { id: 3, title: "Manicure & Pedicure", description: "Relaxing nail care, cuticle treatment, and spa pedicures for healthy hands & feet.", icon: "FiSmile" },
  { id: 4, title: "Facials & Skincare", description: "Hydrating facials, clean-ups, and glow treatments customized for your skin.", icon: "FiHeart" },
  { id: 5, title: "Makeup Services", description: "Bridal, party, and casual makeup by our professional makeup artists.", icon: "FiStar" },
  { id: 6, title: "Spa & Massage", description: "Head, body, and relaxation therapies to refresh your mind and body.", icon: "FiCoffee" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

const Service = ({ data }) => {
  const services = data?.length ? data : defaultServices;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-center text-4xl font-extrabold mb-12 relative text-black after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-blue-800 after:rounded-full">
        Our Services
      </h2>
      <motion.div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || FiScissors; // fallback icon
          return (
            <motion.div
              key={service.id}
              className="bg-white p-10 rounded-2xl text-center border border-gray-200 shadow-md hover:shadow-xl transition-transform"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-6 text-white shadow-md">
                <IconComponent size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title || "Service Title"}</h3>
              <p className="text-gray-600">{service.description || "Service description goes here."}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Service;
