import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router";

// JSON content (can be replaced with API fetch in future)
const heroContent = {
	heading: "Where Beauty Begins",
	subheading: "Where Style Meets Sophistication",
	cta: {
		text: "Get Pampered",
		link: "/contact-us",
	},
	backgroundImage: "/assets/salonhero.jpeg",
	lowResImage: "/assets/salonhero-lowres.jpeg", 
	overlayGradient: "from-black/70 to-black/30",
};

const Hero = () => {
	const [loaded, setLoaded] = useState(false);

	// Preload the full-res image
	useEffect(() => {
		const img = new Image();
		img.src = heroContent.backgroundImage;
		img.onload = () => setLoaded(true);
	}, []);

	// Animation variants
	const headingVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 1, ease: "easeOut" },
		},
	};

	const subheadingVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 1, delay: 0.3, ease: "easeOut" },
		},
	};

	const ctaVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.6, delay: 0.8 },
		},
	};

	return (
		<section
			id="home"
			className="relative flex items-center justify-center min-h-[calc(100vh-6rem)] overflow-hidden"
		>
			{/* Blurred Placeholder */}
			<div
				className={`absolute inset-0 bg-cover bg-center filter blur-lg transition-opacity duration-700 ${
					loaded ? "opacity-0" : "opacity-100"
				}`}
				style={{ backgroundImage: `url(${heroContent.lowResImage})` }}
			/>

			{/* Full-res Background */}
			<motion.div
				className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
					loaded ? "opacity-100" : "opacity-0"
				}`}
				style={{
					backgroundImage: `url(${heroContent.backgroundImage})`,
				}}
				initial={{ scale: 1.1 }}
				animate={{ scale: 1 }}
				transition={{ duration: 4, ease: "easeOut" }}
			/>

			{/* Overlay */}
			<div
				className={`absolute inset-0 bg-gradient-to-r ${heroContent.overlayGradient} z-10`}
			/>

			{/* Content */}
			<div className="relative z-20 text-center text-white max-w-5xl w-full px-4 flex flex-col items-center">
				<motion.h1
					className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
					variants={headingVariants}
					initial="hidden"
					animate="visible"
				>
					{heroContent.heading}
				</motion.h1>

				<motion.p
					className="text-[clamp(1.2rem,2.5vw,1.8rem)] mb-10 opacity-90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
					variants={subheadingVariants}
					initial="hidden"
					animate="visible"
				>
					{heroContent.subheading}
				</motion.p>

				<motion.div
					variants={ctaVariants}
					initial="hidden"
					animate="visible"
					whileTap={{ scale: 0.95 }}
					className="inline-block"
				>
					<NavLink
						to={heroContent.cta.link}
						className="inline-flex text-white items-center justify-center gap-3 px-10 py-4 text-lg font-bold rounded-full bg-black shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
					>
						{heroContent.cta.text}
						<FaArrowRight />
					</NavLink>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
