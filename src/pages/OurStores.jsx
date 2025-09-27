import { useEffect } from "react";
import EachStore from "../../Components/OurLocations/EachStore";
import styles from "./OurStores.module.css";
import { FaStore } from "react-icons/fa";

const stores = [
	{
		id: 1,
		name: "The Salon Company",
		address: "GT - 08, Sector - 117, Noida, 201307",
		phone: "+91-880-002-6046",
		whatsapp: "+1 123-456-7890",
		images: [
			"https://lh3.googleusercontent.com/p/AF1QipOgbwz7o_UIxfjHD2r73RlI9nt3J2pada9XjmqP=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipNo8tcv68jMDPJxBPfkNir9wJYCe7H3UOXvssGH=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipNRNsFm2jtroRumyB9haalJj7UsakFr7_42mp6Z=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipNex1qLWCzAyntuJMRIDKBy6JDd6eePywYlSftV=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipM-oenOQhzZn8U2KNgknae6PW-7wbF6tZVhZkXp=s1360-w1360-h1020",
		],
	},
	{
		id: 2,
		name: "Lokaci - The Salon Company",
		address:
			"Shop No. 101, Eldeco Amantran, (Near Badami Restaurant), Sector - 119, Noida, 201307",
		phone: "+91 876-632-1368",
		whatsapp: "+91 876-632-1368",
		images: [
			"https://lh3.googleusercontent.com/p/AF1QipNo8tcv68jMDPJxBPfkNir9wJYCe7H3UOXvssGH=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipOAX6t-wDu1uNbEDRH20aHcCPj7q-Z6qB7kk_7Q=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipN0BOJzecoreEOSc1CLOixey7NLN2vKgSzRI9ST=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipMvfX6S-tVJiKrRLQk2YWxNfk18aferJMwb5sTG=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipOhWTgNXSOlCa2l5LmWehZmYN9Mgue92OBaV4RH=s1360-w1360-h1020",
		],
	},
	{
		id: 3,
		name: "Lokaci - The Salon Company",
		address:
			"Shop No. 101, Eldeco Amantran, (Near Badami Restaurant), Sector - 119, Noida, 201307  ",
		phone: "+91 876-632-1368",
		whatsapp: "+91 876-632-1368",
		images: [
			"https://lh3.googleusercontent.com/p/AF1QipNRNsFm2jtroRumyB9haalJj7UsakFr7_42mp6Z=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipOAX6t-wDu1uNbEDRH20aHcCPj7q-Z6qB7kk_7Q=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipN0BOJzecoreEOSc1CLOixey7NLN2vKgSzRI9ST=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipMvfX6S-tVJiKrRLQk2YWxNfk18aferJMwb5sTG=s1360-w1360-h1020",
			"https://lh3.googleusercontent.com/p/AF1QipOhWTgNXSOlCa2l5LmWehZmYN9Mgue92OBaV4RH=s1360-w1360-h1020",
		],
	},
];

const OurStores = () => {
	useEffect(() => {
		const metaThemeColor = document.querySelector(
			"meta[name='theme-color']"
		);
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
		<div className={styles.container}>
			{/* Page Header */}
			<header className={styles.header}>
				<h1 className={styles.heading}><FaStore/> Our Salon Stores</h1>
				<p className={styles.description}>
					Explore all our salon locations and find the nearest store.
					Call or WhatsApp us directly to book an appointment or get
					more details.
				</p>
			</header>
			<div className={styles.storesWrapper}>
				{stores.map((store) => (
					<EachStore key={store.id} {...store} />
				))}
			</div>
		</div>
	);
};

export default OurStores;
