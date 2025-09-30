import { useEffect, useRef, useState, useContext, useMemo } from "react";
import {
	FaSearch,
	FaShoppingCart,
	FaChevronRight,
	FaTimes,
} from "react-icons/fa";
import EachCategory from "../components/priceList/EachCategory";
import { BASE_URL_API } from "../constants";
import TenantContext from "../store/tenantContext";

const PriceList = () => {
	const [priceList, setPriceList] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeSection, setActiveSection] = useState("");
	const [isQuickAccessOpen, setIsQuickAccessOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const categoryRefs = useRef({});

	const { tenantData: { response: { storeIdentifier } = {} } = {} } =
		useContext(TenantContext);

	// Fetch price list
	useEffect(() => {
		const getPriceList = async () => {
			if (!storeIdentifier) return;

			const res = await fetch(BASE_URL_API + "/getPriceList", {
				method: "POST",
				body: JSON.stringify({ storeIdentifier }),
			});
			const result = await res.json();
			if (result.status === "success") {
				console.log(result?.response, "dataresponse");
				setPriceList(result.response || []);

				// Set the first genderIdentifier as active section
				if (result.response?.length > 0) {
					const firstGender = result.response[0].genderIdentifier;
					setActiveSection(firstGender);
				}
			}
		};
		getPriceList();
	}, [storeIdentifier]);

	// Filtered list based on searchQuery
	const filteredPriceList = useMemo(() => {
		let list = priceList;

		if (activeSection) {
			list = list.filter(
				(item) => item.genderIdentifier === activeSection
			);
		}

		if (!searchQuery.trim()) return list;

		const lower = searchQuery.toLowerCase();
		return list.filter(
			(item) =>
				item.categoryName?.toLowerCase().includes(lower) ||
				item.services?.some((s) =>
					s.serviceName?.toLowerCase().includes(lower)
				) ||
				item.services?.some((s) =>
					s.addOns?.some((a) =>
						a.label?.toLowerCase().includes(lower)
					)
				)
		);
	}, [priceList, searchQuery, activeSection]);

	// Extract unique gender sections from API data
	const sectionIdentifier = useMemo(() => {
		const uniqueIds = [
			...new Map(
				priceList.map((item) => [
					item.genderIdentifier,
					item.genderIdentifier,
				])
			).keys(),
		];
		return uniqueIds.map((id) => ({ label: id, identifier: id }));
	}, [priceList]);

	const handleSearchChange = (e) => setSearchQuery(e.target.value);

	const scrollToCategory = (categoryIdentifier) => {
		setIsQuickAccessOpen(false);
		if (categoryRefs.current[categoryIdentifier]) {
			categoryRefs.current[categoryIdentifier].scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<div className="min-h-screen pb-20 px-2 bg-white font-poppins">
			{/* Sections Tabs */}
			<div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-6 mx-auto bg-white/70 rounded-full p-2 backdrop-blur-md shadow-[0_4px_20px_rgba(150,150,150,0.1)] w-fit max-w-full">
				{" "}
				{sectionIdentifier.map((item) => (
					<div
						key={item.identifier}
						className={`text-center px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
							activeSection === item.identifier
								? "bg-black text-white font-semibold shadow-[0_6px_18px_rgba(200,200,200,0.3)] -translate-y-0.5"
								: "text-black hover:bg-black/5"
						}`}
						onClick={() => setActiveSection(item.identifier)}
					>
						{item.label}
					</div>
				))}
			</div>

			{/* Search */}
			<div className="flex items-center max-w-[450px] w-full mx-auto mb-8 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-300 shadow-inner gap-3">
				<FaSearch className="text-black text-lg" />
				<input
					type="text"
					placeholder="Search services..."
					value={searchQuery}
					onChange={handleSearchChange}
					className="w-full bg-transparent outline-none text-gray-900 text-base"
				/>
			</div>

			{/* Quick Access Menu */}
			{isQuickAccessOpen && (
				<div className="fixed inset-0 bg-gray-300/15 backdrop-blur-md z-50 flex justify-center items-start py-16 overflow-y-auto">
					<div className="w-[350px] max-w-[90%] bg-white/90 rounded-lg p-4 shadow-lg">
						<div className="flex justify-between items-center mb-4 font-semibold text-black">
							<h3 className="text-xl">Quick Menu</h3>
							<FaTimes
								className="cursor-pointer text-black"
								onClick={() => setIsQuickAccessOpen(false)}
							/>
						</div>
						<div>
							{filteredPriceList.map((itemPrice) => (
								<div
									key={itemPrice.categoryIdentifier}
									className="flex justify-between items-center px-4 py-2 mb-2 rounded-md bg-sky-100/60 text-black cursor-pointer transition-all hover:translate-x-1 hover:bg-sky-100/90"
									onClick={() =>
										scrollToCategory(
											itemPrice.categoryIdentifier
										)
									}
								>
									{itemPrice.categoryName} <FaChevronRight />
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Price List Cards */}
			<div className="flex flex-col gap-6">
				{filteredPriceList.map(
					(itemPrice) =>
						itemPrice.services?.length && (
							<div
								key={itemPrice.categoryIdentifier}
								ref={(el) => {
									if (el && itemPrice.categoryIdentifier)
										categoryRefs.current[
											itemPrice.categoryIdentifier
										] = el;
								}}
								className="bg-white/75 backdrop-blur-md p-4 rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
							>
								<EachCategory
									itemPrice={itemPrice}
									activeServiceHandler={() => {}}
								/>
							</div>
						)
				)}
			</div>

			{/* Footer Cart */}
			<div className="fixed bottom-14 w-full bg-white/85 backdrop-blur-md px-6 py-4 -ms-2 border-t border-gray-300/50 flex justify-between items-center rounded-t-xl shadow-[0_-4px_15px_rgba(0,0,0,0.05)] mt-6">
				<div className="flex items-center gap-2 font-medium text-black">
					<FaShoppingCart className="text-lg" />
					<div className="text-sm">
						{cartItems.length} item(s) in cart
					</div>
				</div>
				<button
					className="bg-black text-white rounded-full px-5 py-2 font-semibold transition-transform hover:scale-105"
					onClick={() => setIsQuickAccessOpen(true)}
				>
					Menu
				</button>
			</div>
		</div>
	);
};

export default PriceList;

// import { useEffect , useRef, useState, useContext } from "react";
// import { useParams } from "react-router";
// import {
// 	FaSearch,
// 	FaShoppingCart,
// 	FaChevronRight,
// 	FaTimes,
// } from "react-icons/fa";
// import AddOns from "../components/priceList/AddOns";
// import { BASE_URL_API } from "../constants";
// import EachCategory from "../components/priceList/EachCategory";
// import TenantContext from "../store/tenantContext";

// const PriceList = () => {
// 	// const { storeIdentifier } = useParams();
// 	const [priceList, setPriceList] = useState([]);
// 	const [filteredPriceList, setFilteredPriceList] = useState([]);
// 	const [searchQuery, setSearchQuery] = useState("");
// 	const [activeSection, setActiveSection] = useState("SS1732115507");
// 	const [isQuickAccessOpen, setIsQuickAccessOpen] = useState(false);
// 	const [cartItems, setCartItems] = useState([]);
// 	const categoryRefs = useRef({});
// 	const data = useContext(TenantContext);
// 	let storeIdentifier = data?.tenantData?.response?.storeIdentifier;
// 	// console.log(storeIdentifier);

// const sectionIdentifier = [
// 	{ label: "Female", identifier: "SS1732115512" },
// 	{ label: "Male", identifier: "SS1732115507" },
// ];

// 	useEffect(() => {
// 		const getPriceList = async () => {
// 			const res = await fetch(BASE_URL_API + "/getPriceList", {
// 				method: "POST",
// 				body: JSON.stringify({ storeIdentifier: storeIdentifier }),
// 			});
// 			const data = await res.json();
// 			console.log(data);
// 			if (data.status === "success") {
// 				console.log(data?.response, "dataresponse");
// 				setPriceList(data?.response);
// 				setFilteredPriceList(data?.response);
// 				console.log(priceList, "pricelist");
// 				console.log(filteredPriceList, "filteredPriceList");
// 			}
// 		};
// 		getPriceList();
// 	}, [storeIdentifier]);

// 	const handleSearchChange = (e) => {
// 		const query = e.target.value;
// 		setSearchQuery(query);
// 		if (!query.trim()) return setFilteredPriceList(priceList);

// 		const lower = query.toLowerCase();
// 		const filtered = priceList?.filter(
// 			(item) =>
// 				item.categoryName?.toLowerCase().includes(lower) ||
// 				item.services?.some((s) =>
// 					s.serviceName?.toLowerCase().includes(lower)
// 				) ||
// 				item.services?.some((s) =>
// 					s.addOns?.some((a) =>
// 						a.label?.toLowerCase().includes(lower)
// 					)
// 				)
// 		);
// 		setFilteredPriceList(filtered);
// 	};

// 	const scrollToCategory = (categoryIdentifier) => {
// 		setIsQuickAccessOpen(false);
// 		if (categoryRefs.current[categoryIdentifier]) {
// 			categoryRefs.current[categoryIdentifier].scrollIntoView({
// 				behavior: "smooth",
// 				block: "start",
// 			});
// 		}
// 	};

// 	return (
// 		<div className="min-h-screen pb-20 px-2 bg-white font-poppins">
// 			{/* Sections Tabs */}
// 			<div className="flex justify-center gap-2 sm:gap-4 my-6 mx-auto bg-white/70 rounded-full p-2 backdrop-blur-md shadow-[0_4px_20px_rgba(150,150,150,0.1)] max-w-[400px]">
// 				{sectionIdentifier.map((item) => (
// 					<div
// 						key={item.identifier}
// 						className={`flex-1 text-center px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
// 							activeSection === item.identifier
// 								? "bg-black text-white font-semibold shadow-[0_6px_18px_rgba(200,200,200,0.3)] -translate-y-0.5"
// 								: "text-black hover:bg-black/5"
// 						}`}
// 						onClick={() => setActiveSection(item.identifier)}
// 					>
// 						{item.label}
// 					</div>
// 				))}
// 			</div>

// 			{/* Search */}
// 			<div className="flex items-center max-w-[450px] w-full mx-auto mb-8 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-300 shadow-inner gap-3">
// 				<FaSearch className="text-black text-lg" />
// 				<input
// 					type="text"
// 					placeholder="Search services..."
// 					value={searchQuery}
// 					onChange={handleSearchChange}
// 					className="w-full bg-transparent outline-none text-gray-900 text-base"
// 				/>
// 			</div>

// 			{/* Quick Access Menu */}
// 			{isQuickAccessOpen && (
// 				<div className="fixed inset-0 bg-gray-300/15 backdrop-blur-md z-50 flex justify-center items-start py-16 overflow-y-auto">
// 					<div className="w-[350px] max-w-[90%] bg-white/90 rounded-lg p-4 shadow-lg">
// 						<div className="flex justify-between items-center mb-4 font-semibold text-black">
// 							<h3 className="text-xl">Quick Menu</h3>
// 							<FaTimes
// 								className="cursor-pointer text-black"
// 								onClick={() => setIsQuickAccessOpen(false)}
// 							/>
// 						</div>
// 						<div>
// 							{filteredPriceList
// 								?.filter(
// 									(item) =>
// 										item.genderIdentifier === activeSection
// 								)
// 								.map((itemPrice) => (
// 									<div
// 										key={itemPrice.categoryIdentifier}
// 										className="flex justify-between items-center px-4 py-2 mb-2 rounded-md bg-sky-100/60 text-black cursor-pointer transition-all hover:translate-x-1 hover:bg-sky-100/90"
// 										onClick={() =>
// 											scrollToCategory(
// 												itemPrice.categoryIdentifier
// 											)
// 										}
// 									>
// 										{itemPrice.categoryName}{" "}
// 										<FaChevronRight />
// 									</div>
// 								))}
// 						</div>
// 					</div>
// 				</div>
// 			)}

// 			{/* Price List Cards */}
// 			<div className="flex flex-col gap-6">
// 				{filteredPriceList
// 					?.filter((item) => item.genderIdentifier === activeSection)
// 					.map((itemPrice) =>
// 						itemPrice.services?.length ? (
// 							<div
// 								key={itemPrice.categoryIdentifier}
// 								ref={(el) => {
// 									if (el && itemPrice.categoryIdentifier)
// 										categoryRefs.current[
// 											itemPrice.categoryIdentifier
// 										] = el;
// 								}}
// 								className="bg-white/75 backdrop-blur-md p-4 rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
// 							>
// 								<EachCategory
// 									itemPrice={itemPrice}
// 									activeServiceHandler={() => {}}
// 								/>
// 							</div>
// 						) : null
// 					)}
// 			</div>

// 			{/* Footer Cart */}
// 			<div className="fixed bottom-14 w-full bg-white/85 backdrop-blur-md px-6 py-4 -ms-2 border-t border-gray-300/50 flex justify-between items-center rounded-t-xl shadow-[0_-4px_15px_rgba(0,0,0,0.05)] mt-6">
// 				<div className="flex items-center gap-2 font-medium text-black">
// 					<FaShoppingCart className="text-lg" />
// 					<div className="text-sm">
// 						{cartItems.length} item(s) in cart
// 					</div>
// 				</div>
// 				<button
// 					className="bg-black text-white rounded-full px-5 py-2 font-semibold transition-transform hover:scale-105"
// 					onClick={() => setIsQuickAccessOpen(true)}
// 				>
// 					Menu
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default PriceList;
