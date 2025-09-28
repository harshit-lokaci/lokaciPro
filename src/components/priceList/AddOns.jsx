import React, { useState, useEffect } from "react";
import {
	MdOutlineRadioButtonChecked,
	MdOutlineRadioButtonUnchecked,
} from "react-icons/md";

const AddOns = ({ activeService, isOpen, onClose, addToCartHandler }) => {
	const [activeAddOn, setActiveAddOn] = useState();

	// Close on click outside
	useEffect(() => {
		const handleClick = (event) => {
			if (event.target.id === "plContainer") onClose();
		};
		const handleKeyDown = (event) => {
			if (event.key === "Escape") onClose();
		};

		window.addEventListener("click", handleClick);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("click", handleClick);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	const getDiscountedBasePrice = (basePrice, offerPercentage) => {
		const bp = parseFloat(basePrice) || 0;
		const dp = parseFloat(offerPercentage) || 0;
		return Math.max(0, Math.round(bp - (bp * dp) / 100));
	};

	const getFinalPrice = (discountedBasePrice, addOnBasePrice) => {
		const dbp = parseFloat(discountedBasePrice) || 0;
		const abp = parseFloat(addOnBasePrice) || 0;
		return Math.round(dbp + abp);
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 w-full h-[100svh]">
			<div
				id="plContainer"
				className="flex justify-end items-end w-full h-[100svh] bg-black/50 relative"
			>
				<div className="w-full max-h-[75svh] bg-aliceblue rounded-t-lg flex flex-col overflow-hidden">
					{/* Header */}
					<div className="flex justify-between items-center px-3 py-2 shadow-md border-b border-gray-300 min-h-[9svh] bg-white">
						<div className="font-semibold">
							{activeService?.serviceName}
						</div>
						<div className="text-right font-semibold">
							<div className="text-xs text-gray-500 uppercase">
								Starting From
							</div>
							₹
							{getDiscountedBasePrice(
								activeService?.basePrice,
								activeService?.offerPercentage
							)}
						</div>
					</div>

					{/* Add-ons List */}
					{activeService?.addOns?.length > 0 && (
						<div className="flex-1 overflow-y-scroll p-2.5">
							<div className="p-2.5 bg-white rounded-xl shadow-sm">
								{activeService.addOns.map((item, index) => (
									<div
										key={index}
										className="py-3 px-3 cursor-pointer"
										onClick={() => setActiveAddOn(item)}
									>
										<div className="flex justify-between items-center gap-2 text-sm font-medium">
											<div className="flex flex-4 items-center gap-2 py-1">
												<div className="flex items-center justify-start">
													{activeAddOn?.labelId ===
													item?.labelId ? (
														<MdOutlineRadioButtonChecked
															size={24}
														/>
													) : (
														<MdOutlineRadioButtonUnchecked
															size={24}
														/>
													)}
												</div>
												<div className="flex-6">
													{item?.label}
												</div>
											</div>
											<div className="flex-1 text-right">
												+₹{item?.disPrice}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Footer */}
					<div className="flex justify-between items-center px-3 py-2 shadow-md bg-white gap-2 min-h-[10svh]">
						<div className="flex flex-col justify-center flex-1">
							<div className="text-gray-500 font-semibold line-through text-sm">
								₹
								{getFinalPrice(
									parseInt(activeService?.basePrice),
									activeAddOn?.orgPrice
								)}
							</div>
							<div className="font-semibold text-lg">
								₹
								{getFinalPrice(
									getDiscountedBasePrice(
										activeService?.basePrice,
										activeService?.offerPercentage
									),
									activeAddOn?.disPrice
								)}
							</div>
						</div>
						<div className="flex-2 flex justify-center items-center">
							<button
								className="w-full py-3 bg-purple-700 border border-purple-700 rounded-lg text-white font-semibold text-base"
								onClick={() =>
									addToCartHandler(
										"add",
										activeService,
										activeAddOn
									)
								}
							>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddOns;
