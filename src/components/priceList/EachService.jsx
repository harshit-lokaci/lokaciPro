import React, { useEffect } from "react";

const EachService = ({ item, activeServiceHandler }) => {
	useEffect(() => {
		const metaThemeColor = document.querySelector(
			"meta[name='theme-color']"
		);
		if (metaThemeColor) {
			metaThemeColor.setAttribute("content", "#ECFAFF");
		} else {
			const meta = document.createElement("meta");
			meta.name = "theme-color";
			meta.content = "#ECFAFF";
			document.head.appendChild(meta);
		}
	}, []);

	return (
		<div className="flex justify-between items-center border-b-2 border-dotted border-gray-300 py-2.5">
			{/* Service Name and Base Price */}
			<div>
				<div className="text-gray-800">{item?.serviceName}</div>
				<div className="text-sm font-medium py-2">
					₹{item?.basePrice}
				</div>
			</div>

			{/* View Discount Button */}
			<div>
				<button
					onClick={() => activeServiceHandler(item)}
					className="px-2 py-2 w-[130px] border-2 border-black text-black bg-white rounded-lg text-sm font-medium text-center transition-all duration-200 hover:bg-black hover:text-white hover:translate-y-[-2px] hover:shadow-md"
				>
					View Discount
				</button>
			</div>
		</div>
	);
};

export default EachService;
