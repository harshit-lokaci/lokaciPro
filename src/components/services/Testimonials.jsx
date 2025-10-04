import React, { useState, useEffect, useCallback } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// ✅ Static fallback data
const defaultTestimonials = [
	{
		id: 1,
		clientName: "Jane Doe",
		role: "Regular Client",
		text: "I've been coming here for years, and the service is always exceptional. The staff is friendly, and the quality of work is unmatched!",
		rating: 5,
		photoUrl:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
	},
	{
		id: 2,
		clientName: "John Smith",
		role: "First-time Visitor",
		text: "Absolutely loved my haircut! The stylist really listened to what I wanted and gave me a perfect look. I will definitely be back!",
		rating: 5,
		photoUrl:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
	},
	{
		id: 3,
		clientName: "Emily White",
		role: "Bridal Party",
		text: "The salon did an amazing job with my bridal hair and makeup. Everything was flawless, and they made me feel so special on my big day.",
		rating: 5,
		photoUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29329?auto=format&fit=crop&w=600&q=80",
	},
	{
		id: 4,
		clientName: "Michael Brown",
		role: "Barbering Client",
		text: "Best beard trim I've ever gotten. The attention to detail is fantastic, and the hot towel shave was so relaxing. Highly recommend!",
		rating: 4,
		photoUrl:
			"https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=600&q=80",
	},
	{
		id: 5,
		clientName: "Olivia Wilson",
		role: "Hair Color Client",
		text: "My new hair color is perfect! The stylist was so knowledgeable and helped me choose the perfect shade. The results are amazing.",
		rating: 5,
		photoUrl:
			"https://images.unsplash.com/photo-1567532939604-8f762a15328b?auto=format&fit=crop&w=600&q=80",
	},
];

// Render stars
const renderStars = (rating) =>
	[...Array(5)].map((_, i) => (
		<FaStar
			key={i}
			className={`text-lg ${
				i < rating ? "text-yellow-400" : "text-gray-300"
			}`}
		/>
	));

const Testimonials = ({ testimonialsData }) => {
	const testimonials = testimonialsData?.length
		? testimonialsData
		: defaultTestimonials;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkScreen = () => setIsMobile(window.innerWidth < 768);
		checkScreen();
		window.addEventListener("resize", checkScreen);
		return () => window.removeEventListener("resize", checkScreen);
	}, []);

	const cardsVisible = isMobile ? 1 : 2;
	const maxIndex = Math.max(0, testimonials.length - cardsVisible);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
	}, [maxIndex]);

	const goToSlide = (index) => setCurrentIndex(Math.min(index, maxIndex));

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, [nextSlide]);

	if (!testimonials.length) return null;

	return (
		<section id="testimonials" className="py-20 bg-gray-100">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
						Happy Clients, Happy Us
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Do not just take our word for it, hear from our
						satisfied customers
					</p>
				</div>

				{/* Carousel */}
				<div className="relative overflow-hidden rounded-3xl py-4">
					<div
						className="flex transition-transform duration-500 ease-in-out gap-6"
						style={{
							transform: `translateX(calc(-${currentIndex} * (100% / ${cardsVisible}) - ${currentIndex} * 0.8rem))`,
						}}
					>
						{testimonials.map((t) => (
							<div
								key={t.id}
								className="flex-shrink-0 w-full md:w-[calc(50%-0.75rem)]"
							>
								<div className="bg-white border border-gray-200 rounded-3xl p-8 relative flex flex-col justify-between h-full transition-transform hover:-translate-y-2">
									<div className="absolute top-4 left-4 text-3xl text-gray-900 opacity-15">
										<FaQuoteLeft />
									</div>
									<p className="text-gray-700 italic text-lg leading-relaxed mb-6 pl-6 flex-grow">
										{t.text || "No testimonial provided."}
									</p>
									<div className="flex items-center">
										<div className="w-16 h-16 rounded-full overflow-hidden shadow mr-4">
											<img
												src={
													t.photoUrl ||
													"https://via.placeholder.com/150"
												}
												alt={t.clientName || "Client"}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h4 className="font-bold text-gray-800 text-lg">
												{t.clientName || "Anonymous"}
											</h4>
											<p className="text-sm text-gray-500">
												{t.role || "Client"}
											</p>
											<div className="flex gap-1 mt-1">
												{renderStars(t.rating || 0)}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Dots */}
				<div className="flex justify-center mt-8 gap-2">
					{Array.from({ length: maxIndex + 1 }).map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`h-3 rounded-full transition-all ${
								index === currentIndex
									? "w-8 bg-gray-900"
									: "w-3 bg-gray-300 hover:bg-gray-400"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
