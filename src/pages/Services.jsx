import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/layout/Footer.jsx";
import PageHeading from "../components/layout/PageHeading.jsx";
import Service from '../components/services/Services.jsx'
import Process from '../components/services/Process.jsx'
import Testimonials from '../components/services/Testimonials.jsx'
import FAQs from '../components/services/FAQs.jsx'
import CTA from '../components/services/CTA.jsx'

// motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const Services = () => {
  // const [openFaq, setOpenFaq] = useState(null);

  return (
		<>
			<motion.div
				className="font-poppins bg-white text-black overflow-x-hidden leading-relaxed pb-8"
				initial="hidden"
				animate="show"
				variants={containerVariants}
			>
				{/* Hero Section */}
				<PageHeading
					heading="Pamper Yourself With Our Salon Service"
					paragraph="From trendy haircuts to relaxing spa treatments, we provide everything you need to look and feel your best."
				/>

				{/* Services Grid */}
				<Service />

				{/* Process Section */}
				<Process/>

				{/* Testimonials */}
				<Testimonials/>

				{/* FAQ */}
				<FAQs/>

				{/* CTA */}
        <CTA/>
			</motion.div>
			<Footer />
		</>
  );
};

export default Services;
