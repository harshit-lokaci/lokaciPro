import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import EachService from "./EachService.jsx";

const EachCategory = ({
	itemPrice,
	activeServiceHandler,
	addToCartHandler,
}) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="bg-white mb-3 px-[3%]">
			{/* Category Header */}
			<div
				className="flex justify-between items-center py-2.5 text-gray-500 font-semibold cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div>{itemPrice?.categoryName}</div>
				<div>
					<BiChevronDown
						size={24}
						className={`${
							isOpen ? "rotate-180" : "rotate-0"
						} transition-transform duration-300`}
					/>
				</div>
			</div>

			{/* Services List */}
			{isOpen && (
				<div>
					{itemPrice?.services?.map((item, index) => (
						<EachService
							key={index}
							item={item}
							activeServiceHandler={activeServiceHandler}
							addToCartHandler={addToCartHandler}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default EachCategory;
