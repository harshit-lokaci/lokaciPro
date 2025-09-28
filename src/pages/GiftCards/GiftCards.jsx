import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiShoppingCart, FiGift } from "react-icons/fi";
import { BASE_URL_API } from "../../constants.js";
import AuthContext from "../../store/authContext.jsx";
import PageHeading from "../../components/layout/PageHeading.jsx";

const GiftCards = () => {
    const authCtx = useContext(AuthContext);
    const [allCards, setAllCards] = useState([]);

    const getAllCards = async () => {
        try {
            const res = await fetch(BASE_URL_API + "/getAllCards", {
                method: "POST",
                body: JSON.stringify({ token: authCtx.token }),
            });

            if (!res.ok) {
                console.error("Server Error");
                return;
            }

            const data = await res.json();
            if (data?.status === "success") {
                setAllCards(data?.response);
            } else if (data?.message === "tokenExpired") {
                authCtx.logout();
            } else {
                setAllCards([]);
            }
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    useEffect(() => {
        getAllCards();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "easeOut",
                duration: 0.8,
            },
        },
    };

    return (
		// .pageWrapper
		<div className="min-h-screen bg-[#f8fafc] text-[#1e293b]">
			{/* Hero Section */}
			{/* <motion.header
				className="mb-12 text-center"
				initial="hidden"
				animate="visible"
				variants={cardVariants}
			>
				<h1 className="inline-flex flex-col items-center gap-1 text-[1.6rem] font-bold leading-tight sm:flex-row sm:gap-2 md:text-[1.9rem] lg:text-[2.2rem] xl:text-[2.5rem]">
					<FiGift /> Unlock{" "}
					<span className="font-extrabold">Premium Gift Cards</span>
				</h1>
				<p className="mx-auto mt-2 max-w-[700px] text-[0.85rem] leading-snug text-[#475569] sm:text-[0.9rem] md:text-[0.95rem] lg:text-base">
					Choose from exclusive designs, and grab yours instantly.
				</p>
			</motion.header> */}
			<PageHeading
				heading={"Premium Gift Cards"}
				paragraph={
					"Choose from exclusive designs, and grab yours instantly."
				}
			/>

			{/* Cards Grid */}
			<motion.div
				className="mx-auto grid max-w-6xl grid-cols-1 gap-5 p-4 sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] md:gap-6 lg:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] lg:gap-8"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{allCards?.map((item) => (
					<motion.div
						key={item.ID}
						className="h-full"
						variants={cardVariants}
					>
						{/* .cardContent */}
						<div className="flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-400 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)]">
							{/* Card Image */}
							<div
								className="relative h-[120px] bg-cover bg-center sm:h-[140px] md:h-[210px]"
								style={{
									backgroundImage: `url(${item.coverImage})`,
								}}
							>
								{/* .overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
							</div>

							{/* Card Body */}
							<div className="flex flex-1 flex-col p-4 md:p-5 lg:p-6">
								<h3 className="text-lg font-semibold">
									{item.label}
								</h3>
								<p className="mb-2 text-xs uppercase text-[#64748b]">
									{item.cardType.replace("_", " ")}
								</p>
								<p className="mb-4 flex-grow text-sm text-[#334155]">
									{item.description}
								</p>

								<div className="mb-4">
									<span className="text-lg font-bold text-[#1e40af]">
										<strong>₹{item.toPay}</strong>
									</span>
									<small className="block text-[#64748b]">
										Worth ₹{item.worthOff}
									</small>
								</div>

								<Link
									to={`/buy/cards/${item.cardIdentifier}`}
									className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e40af] p-3 font-semibold text-white no-underline shadow-[0_4px_15px_rgba(30,64,175,0.4)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_25px_rgba(30,64,175,0.6)] sm:w-auto md:py-[0.7rem] md:px-4 md:text-sm lg:py-[0.8rem] lg:px-[1.2rem] lg:text-base"
								>
									<FiShoppingCart /> Buy Now
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default GiftCards;