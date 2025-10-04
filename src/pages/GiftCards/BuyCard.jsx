import React, { useContext, useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import EachFAQ from "../../components/giftcard/EachFAQ.jsx";
import { BASE_URL_API } from "../../constants.js";
import AuthContext from "../../store/authContext.jsx";

const BuyCard = () => {
	const authCtx = useContext(AuthContext);
	const { identifier } = useParams();
	const nav = useNavigate();

	const [cardDetails, setCardDetails] = useState({
		ID: "1",
		cardIdentifier: "GALLANTSTORE0001",
		label: "GALLANT",
		description: "Get unlimited free haircut for absolute 1 year.",
		cardType: "TRUELY_UNLIMITED",
		identifierDigits: "1000",
		textColor: "#dfdfdf",
		backgroundColor: "#616364",
		toPay: "1099",
		worthOff: "2250",
		terms: '["Limited for one person use only."]',
		coverImage:
			"https://ltsc.lokaci.com/visual-assets/giftcards/gallant-front.png",
		duration: "365",
		isShareable: "0",
	});

	const [paymentMessage, setPaymentMessage] = useState("");

	const getTotalPrice = (k) => {
		const basePrice = parseInt(k) || 0;
		const gstRate = 0;
		return basePrice + basePrice * gstRate;
	};

	const getEachCardDetails = async () => {
		const response = await fetch(BASE_URL_API + "/getEachMembershipDetails", {
			method: "POST",
			body: JSON.stringify({
				// token: authCtx.token,
				membershipIdentifier: identifier,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			console.log(data,"data");
			if (data.status === "success") {
				setCardDetails(data?.response);
			} else {
				if (data.message === "tokenExpired") {
					authCtx.logout();
				} else {
					nav(`/login?redirect_to=buy/cards/${identifier}`);
				}
			}
		}
	};

	useEffect(() => {
		getEachCardDetails();
	}, [identifier]);

	const makePayment = () => {
		if (identifier !== "") {
			if (authCtx.isLoggedIn) {
				const form = document.createElement("form");
				form.method = "POST";
				form.action = BASE_URL_API + "/getPayment.php";

				const data = {
					token: authCtx.token,
					productinfo: identifier,
					phone: authCtx?.userIdentifier,
					address1: "User address received",
					city: "city received",
					state: "state received",
					zipcode: "pincode received",
				};

				Object.entries(data).forEach(([key, value]) => {
					const input = document.createElement("input");
					input.type = "hidden";
					input.name = key;
					input.value = value;
					form.appendChild(input);
				});

				document.body.appendChild(form);
				form.submit();
			} else {
				nav(`/login?redirect_to=buy/cards/${identifier}`);
			}
		} else {
			alert("Something went wrong!");
		}
	};

	useEffect(() => {
		const metaThemeColor = document.querySelector("meta[name='theme-color']");
		if (metaThemeColor) {
			metaThemeColor.setAttribute("content", "#ffffff");
		} else {
			const meta = document.createElement("meta");
			meta.name = "theme-color";
			meta.content = "#ffffff";
			document.head.appendChild(meta);
		}
	}, []);

	return (
		<div className="h-screen flex flex-col bg-gray-50">
			{/* Header */}
			<div className="h-[9svh] bg-white shadow-md flex items-center px-4 sticky top-0 z-20">
				<Link
					to={`/gift-cards`}
					className="h-10 w-10 rounded-full hover:bg-gray-100 flex justify-center items-center transition"
				>
					<BiChevronLeft size={28} />
				</Link>
				<div className="text-lg font-semibold flex-1 text-center mr-10">
					{cardDetails?.name}
				</div>
			</div>

			{/* Scrollable Content */}
			<div className="flex-1 overflow-y-auto scrollbar-none">
				{/* Card Preview */}
				<div className="relative">
					<div className="w-full h-48 bg-gradient-to-br from-[#164374] to-[#306390] hidden md:block" />
					<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[100%] max-w-lg bg-white shadow-xl rounded-xl overflow-hidden">
						<img
							src={cardDetails?.coverImage}
							alt="Gift Card"
							className="w-full object-cover"
						/>
					</div>
				</div>

				{/* Card Info */}
				<div className="mt-82 md:mt-52 px-5 space-y-4">
					<p className="text-gray-700 text-[0.95rem] leading-relaxed">
						{cardDetails?.description}
					</p>
					<ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
						{/* {JSON.parse(cardDetails?.terms)?.map((item, idx) => (
							<li key={idx}>{item}</li>
						))} */}
					</ul>
					<div className="flex items-center justify-between mt-3">
						<p className="text-2xl font-bold text-gray-900">
							₹{getTotalPrice(cardDetails?.membershipPrice)}
						</p>
						<p className="text-sm line-through text-gray-400">
							₹{cardDetails?.membershipWorthOff}
						</p>
					</div>
					{paymentMessage && (
						<p className="text-green-600 text-sm animate-fadeIn">
							{paymentMessage}
						</p>
					)}
				</div>

				{/* Stores */}
				<div className="mt-8 px-5">
					<h2 className="text-sm font-semibold text-gray-700 mb-3">
						Available At
					</h2>
					<div className="grid grid-cols-2 gap-4">
						{[
							{
								name: "The Salon Company",
								address: "GT - 08, Sector - 117, Noida, 201307",
								phone: "+91-8800026046",
							},
							{
								name: "Lokaci - The Salon Company",
								address:
									"Shop No. 101, Eldeco Amantran, Sector - 119, Noida, 201307",
								phone: "+91-8766321368",
							},
						].map((store, i) => (
							<div
								key={i}
								className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md transition flex justify-between items-start"
							>
								<div>
									<div className="font-semibold text-gray-800 uppercase">
										{store.name}
									</div>
									<div className="text-xs text-gray-500 mt-1">
										{store.address}
									</div>
								</div>
								<a
									href={`tel:${store.phone}`}
									className="h-9 w-9 rounded-full flex items-center justify-center bg-indigo-50 hover:bg-indigo-100 transition"
								>
									<MdLocalPhone
										size={20}
										className="text-indigo-600"
									/>
								</a>
							</div>
						))}
					</div>
				</div>

				{/* FAQs */}
				<div className="mt-10 px-5 pb-24">
					<h2 className="text-sm font-semibold text-gray-700 mb-3">
						Frequently Asked Questions
					</h2>
					<div className="divide-y rounded-lg bg-white border shadow-sm p-4">
						{cardDetails?.faqs?.map((item, idx) => (
							<EachFAQ key={idx} item={item} />
						))}
					</div>
				</div>

				{/* Footer */}
				<div className="text-center text-gray-400 text-xs pb-6">
					<p>Powered by Stylelink Intelligence Services</p>
					<p>A Lokaci Company</p>
					<p>© 2024 Lokaci | All Rights Reserved</p>
				</div>
			</div>

			{/* Floating Buy Button */}
			<div className="fixed bottom-14 left-0 w-full py-4 shadow-lg bg-white border-t flex justify-center">
				<button
					onClick={makePayment}
					className="w-[90%] max-w-md py-3 rounded-full bg-gradient-to-br from-[#164374] to-[#306390] text-white font-semibold uppercase tracking-wide shadow-md hover:shadow-xl hover:scale-[1.02] transition"
				>
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default BuyCard;
