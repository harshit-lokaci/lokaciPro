import { useRef } from "react";
import {
	FiPhoneCall,
	FiMapPin,
	FiChevronLeft,
	FiChevronRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const EachStore = ({ storeName, storeAddress, storePhone, images, storeLat, storeLng }) => {
	const sliderRef = useRef(null);

	const scroll = (direction) => {
		if (sliderRef.current) {
			const scrollAmount = sliderRef.current.clientWidth;
			sliderRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
			{/* Image Slider */}
			<div className="relative">
				<button
					className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full flex items-center justify-center z-10 hover:bg-black/70"
					onClick={() => scroll("left")}
				>
					<FiChevronLeft size={22} />
				</button>

				<div
					ref={sliderRef}
					className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none"
				>
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`${storeName} slide ${index + 1}`}
							className="w-full h-60 sm:h-56 lg:h-64 object-cover flex-shrink-0 snap-start transition-transform duration-300 ease-in-out hover:scale-105"
						/>
					))}
				</div>

				<button
					className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full flex items-center justify-center z-10 hover:bg-black/70"
					onClick={() => scroll("right")}
				>
					<FiChevronRight size={22} />
				</button>
			</div>

			{/* Store Details */}
			<div className="p-4 flex flex-col flex-1 justify-between">
				<div>
					<h2 className="text-gray-900 font-bold text-lg lg:text-xl mb-1">
						{storeName}
					</h2>
					<p className="text-gray-600 text-sm lg:text-base leading-relaxed">
						{storeAddress}
					</p>
				</div>

				{/* Action Buttons */}
				{/* Action Buttons */}
				<div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-3 mt-3">
					<a
						href={`tel:${storePhone}`}
						className="w-full flex items-center justify-center gap-2 
               px-2 py-2 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 
               font-semibold text-black bg-white border border-black rounded-md 
               transition-transform duration-200 ease-in-out 
               hover:bg-black hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
					>
						<FiPhoneCall size={18} /> Call
					</a>

					<a
						href={`https://wa.me/${storePhone.replace(
							/[^0-9]/g,
							""
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="w-full flex items-center justify-center gap-2 
               px-2 py-2 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 
               font-semibold text-black bg-white border border-black rounded-md 
               transition-transform duration-200 ease-in-out 
               hover:bg-black hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
					>
						<FaWhatsapp size={18} /> Whatsapp
					</a>

					<a
						href={`https://www.google.com/maps/search/?api=1&query=${storeLat},${storeLng}`}
						target="_blank"
						rel="noopener noreferrer"
						className="w-full flex items-center justify-center gap-2 
               px-2 py-2 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 
               font-semibold text-black bg-white border border-black rounded-md 
               transition-transform duration-200 ease-in-out 
               hover:bg-black hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
					>
						<FiMapPin size={18} /> Directions
					</a>
				</div>
			</div>
		</div>
	);
};

export default EachStore;
