import { useContext } from "react";
import { Routes, Route } from "react-router";
import AuthContext from "./store/authContext.jsx";
import Layout from "./Layout.jsx";

// import EachBookingWrapper from "../Pages/Bookings/EachBookingWrapper";
// import BuyCard from "../pages/giftcards/BuyCard";
import BuyCard from "./pages/GiftCards/BuyCard.jsx";
// import EachPurchasedCardDetails from "../Pages/GiftCards/EachPurchasedCardDetails";
// import GcHome from "../Pages/GiftCards/GcHome";
// import PaymentStatus from "../Pages/GiftCards/PaymentStatus";
// import PurchasedCards from "../Pages/GiftCards/PurchasedCards";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import PriceList from "./pages/PriceList.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import OurStores from "./pages/OurStores.jsx";
// import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
// import ContactUs from "./pages/ContactUs.jsx";
// import Gallery from "./pages/Gallery.jsx";
import Gallery from "./pages/Gallery.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import GiftCards from "./pages/GiftCards/GiftCards.jsx";


const MainNavigator = () => {
	const authCtx = useContext(AuthContext);

	return (
		<Routes>
			<Route element={<Layout authCtx={authCtx} />}>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/services" element={<Services />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route
					path="/price-list"
					element={<PriceList />}
				/>
				<Route path="/stores" element={<OurStores />} />
				{authCtx.isLoggedIn && (
					<>
						<Route path="/profile" element={<Profile />} />
					</>
				)}
				<Route path="/gift-cards" element={<GiftCards />} />
				<Route path="/buy/cards/:identifier" element={<BuyCard />} />


				{/* Public routes */}
				{/* <Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/services" element={<Services />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/gift-cards" element={<GcHome />} />
				<Route path="/gc/verify" element={<PurchasedCards />} />
				<Route path="/gc/my-cards" element={<PurchasedCards />} />
				<Route
					path="/cards/:issuedCardNumber"
					element={<EachPurchasedCardDetails />}
				/>
				<Route
					path="/visits/:sessionIdentifier"
					element={<EachBookingWrapper />}
				/>
				<Route path="/buy/gallant-card" element={<BuyCard />} />
				<Route path="/buy/cards/:identifier" element={<BuyCard />} />
				<Route
					path="/buy/cards/:identifier/:status/:txnId"
					element={<PaymentStatus />}
				/>
				<Route path="/promo/:identifier" element={<BuyCard />} />
				<Route path="/stores" element={<OurStores />} />
				<Route path="/free-haircut" element={<BuyCard />} />
				<Route
					path="/:storeIdentifier/price-list"
					element={<PriceList />}
				/> */}

				{/* Protected routes */}
				{/* {authCtx.isLoggedIn && (
					<>
						<Route path="/profile" element={<Profile />} />
					</>
				)} */}

				{/* Fallback route */}
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default MainNavigator;
