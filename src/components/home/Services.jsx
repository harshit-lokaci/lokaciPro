import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaCut,
	FaSpa,
	FaStar,
	FaHandSparkles,
	FaArrowRight,
} from "react-icons/fa";

// Map string icon names to actual components
const iconMap = { FaCut, FaSpa, FaHandSparkles, FaStar };

// ✅ Static Data (fallback)
const defaultServices = [
	{
		id: 1,
		title: "Hair Cutting",
		description:
			"Professional hair cutting and styling tailored to your look.",
		price: 500,
		duration: "45 min",
		imageUrl: "/assets/salonhero.jpeg",
		icon: "FaCut",
	},
	{
		id: 2,
		title: "Spa Treatment",
		description: "Relaxing spa services to rejuvenate your body and mind.",
		price: 1200,
		duration: "60 min",
		imageUrl: "/assets/salonhero.jpeg",
		icon: "FaSpa",
	},
	{
		id: 3,
		title: "Manicure",
		description:
			"Pamper your hands with our professional manicure service.",
		price: 700,
		duration: "40 min",
		imageUrl: "/assets/salonhero.jpeg",
		icon: "FaHandSparkles",
	},
	{
		id: 4,
		title: "Luxury Facial",
		description: "Revitalize your skin with our premium facial treatments.",
		price: 1500,
		duration: "50 min",
		imageUrl: "/assets/salonhero.jpeg",
		icon: "FaStar",
	},
];

const Services = ({ servicesData }) => {
	const services = servicesData?.length ? servicesData : defaultServices;

	const [current, setCurrent] = useState(0);
	const [slidesPerView, setSlidesPerView] = useState(2);

	// Responsive slides
	useEffect(() => {
		const updateSlides = () => {
			setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
		};
		updateSlides();
		window.addEventListener("resize", updateSlides);
		return () => window.removeEventListener("resize", updateSlides);
	}, []);

	// Auto-slide
	useEffect(() => {
		if (services.length <= slidesPerView) return;
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + slidesPerView) % services.length);
		}, 5000);
		return () => clearInterval(timer);
	}, [slidesPerView, services.length]);

	const nextSlide = () =>
		setCurrent((prev) => (prev + slidesPerView) % services.length);
	const prevSlide = () =>
		setCurrent(
			(prev) => (prev - slidesPerView + services.length) % services.length
		);

	return (
		<section className="py-20 px-4 bg-gray-100">
			<div className="max-w-7xl mx-auto px-6">
				{/* Heading */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-extrabold text-black mb-4">
						Pamper Yourself With Our Service
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Experience our premium beauty services designed to
						enhance your natural beauty.
					</p>
				</div>

				{/* Carousel */}
				<div className="relative">
					<div className="overflow-hidden">
						<AnimatePresence mode="wait">
							<motion.div
								key={current}
								className="flex gap-6"
								initial={{ x: 50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -50, opacity: 0 }}
								transition={{ duration: 0.5 }}
							>
								{services
									.slice(current, current + slidesPerView)
									.concat(
										current + slidesPerView >
											services.length
											? services.slice(
													0,
													(current + slidesPerView) %
														services.length
											  )
											: []
									)
									.map((service) => {
										const IconComponent =
											iconMap[service.icon] || FaStar;
										return (
											<div
												key={service.id}
												className="bg-white rounded-2xl flex flex-col flex-1"
											>
												{/* Image */}
												<div className="relative h-56 overflow-hidden rounded-t-2xl">
													<img
														src={
															service.imageUrl ||
															"/assets/salonhero.jpeg"
														}
														alt={
															service.title ||
															"Service"
														}
														className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
													/>
													<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
													<div className="absolute top-4 left-4 bg-white/85 px-3 py-1 rounded-full text-sm font-semibold">
														{service.duration ||
															"N/A"}
													</div>
												</div>

												{/* Content */}
												<div className="p-6 flex flex-col flex-1 justify-between">
													<div>
														<div className="flex items-center mb-4">
															<div className="bg-gray-100 p-3 rounded-full mr-3">
																<IconComponent className="text-lg text-black" />
															</div>
															<h3 className="text-xl font-bold text-black">
																{service.title ||
																	"Service"}
															</h3>
														</div>
														<p className="text-gray-600 text-sm mb-4 leading-relaxed">
															{service.description ||
																"No description available."}
														</p>
													</div>
													<div className="flex justify-between items-center border-t border-gray-200 pt-4">
														<span className="text-2xl font-bold text-black">
															₹
															{service.price ||
																"0"}
														</span>
														<a
															href="/contact"
															className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105"
														>
															Book Now{" "}
															<FaArrowRight
																size={14}
															/>
														</a>
													</div>
												</div>
											</div>
										);
									})}
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Controls */}
					{services.length > slidesPerView && (
						<div className="flex justify-between mt-8 gap-4 flex-col sm:flex-row">
							<button
								onClick={prevSlide}
								className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-800"
							>
								Prev
							</button>
							<button
								onClick={nextSlide}
								className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-800"
							>
								Next
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Services;
