//src/components/layout/Footer.js
import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
} from "react-icons/fa";

const socialIconMap = {
	facebook: FaFacebook,
	instagram: FaInstagram,
	whatsapp: FaWhatsapp,
};

// ✅ Default/fallback data
const defaultData = {
	name: "Salon",
	branding: { primaryColor: "#fff" },
	socialLinks: [],
	contact: {
		phone: "+91 00000 00000",
		email: "info@example.com",
		address: "Default Address, City, Country",
	},
};

const Footer = ({ data }) => {
	const content = data || defaultData;

	return (
		<footer className="bg-black text-white py-16">
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					{/* Brand */}
					<div className="md:col-span-2">
						<h3
							className="text-3xl font-extrabold mb-4"
							style={{
								color:
									content?.branding?.primaryColor || "#fff",
							}}
						>
							{content?.name || defaultData.name}
						</h3>
						<p className="text-gray-400 mb-6 max-w-md">
							Your premier destination for beauty and wellness
							services, where luxury meets expertise.
						</p>

						{content?.socialLinks?.length > 0 && (
							<div className="flex gap-4">
								{content.socialLinks.map((social, index) => {
									const IconComponent =
										socialIconMap[social?.platform];
									if (!IconComponent) return null;
									return (
										<a
											key={index}
											href={social?.url || "#"}
											target="_blank"
											rel="noopener noreferrer"
											className="p-3 rounded-full flex items-center justify-center transition transform hover:scale-110 shadow-md"
											style={{
												backgroundColor:
													content?.branding
														?.primaryColor ||
													"#6b7280",
											}}
										>
											<IconComponent className="text-black text-xl" />
										</a>
									);
								})}
							</div>
						)}
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-6">
							Quick Links
						</h4>
						<ul className="space-y-4">
							{[
								"/",
								"/about",
								"/services",
								"/team",
								"/contact",
							].map((link, idx) => (
								<li key={idx}>
									<a
										href={link}
										className="text-gray-400 hover:text-white"
									>
										{link
											.replace("/", "")
											.charAt(0)
											.toUpperCase() +
											link.replace("/", "").slice(1) ||
											"Home"}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-lg font-semibold mb-6">
							Contact Us
						</h4>
						<div className="flex flex-col gap-4 text-gray-400">
							{content?.contact?.phone && (
								<p className="flex items-start">
									<FaPhone
										className="mr-3 text-lg"
										style={{
											color:
												content?.branding
													?.primaryColor || "#fff",
										}}
									/>
									{content.contact.phone}
								</p>
							)}
							{content?.contact?.email && (
								<p className="flex items-start">
									<FaEnvelope
										className="mr-3 text-lg"
										style={{
											color:
												content?.branding
													?.primaryColor || "#fff",
										}}
									/>
									{content.contact.email}
								</p>
							)}
							{content?.contact?.address && (
								<p className="flex items-start">
									<FaMapMarkerAlt
										className="mr-3 text-lg"
										style={{
											color:
												content?.branding
													?.primaryColor || "#fff",
										}}
									/>
									{content.contact.address}
								</p>
							)}
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
					<p>
						&copy; 2025{" "}
						<span
							style={{
								color:
									content?.branding?.primaryColor || "#fff",
							}}
						>
							{content?.name || defaultData.name}
						</span>
						. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

// import {
//   FaFacebook,
//   FaInstagram,
//   FaWhatsapp,
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const Footer = () => {
//   // ✅ Static sample data
//   const data = {
//     name: "Salon",
//     branding: {
//       primaryColor: "#fdfdfdff",
//     },
//     socialLinks: [
//       { platform: "facebook", url: "https://facebook.com" },
//       { platform: "instagram", url: "https://instagram.com" },
//       { platform: "whatsapp", url: "https://wa.me/1234567890" },
//     ],
//     contact: {
//       phone: "+91 98765 43210",
//       email: "info@salon.com",
//       address: "123 Beauty Street, New Delhi, India",
//     },
//   };

//   const socialIconMap = {
//     facebook: FaFacebook,
//     instagram: FaInstagram,
//     whatsapp: FaWhatsapp,
//   };

//   return (
//     <footer className="bg-gray-900 text-white py-16">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div className="md:col-span-2">
//             <h3
//               className="text-3xl font-extrabold mb-4"
//               style={{ color: data?.branding?.primaryColor || "#fff" }}
//             >
//               {data?.name}
//             </h3>
//             <p className="text-gray-400 mb-6 max-w-md">
//               Your premier destination for beauty and wellness services, where
//               luxury meets expertise.
//             </p>

//             {data?.socialLinks?.length > 0 && (
//               <div className="flex gap-4">
//                 {data.socialLinks.map((social, index) => {
//                   const IconComponent = socialIconMap[social?.platform];
//                   if (!IconComponent) return null;
//                   return (
//                     <a
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 rounded-full flex items-center justify-center transition transform hover:scale-110 shadow-md"
//                       style={{
//                         backgroundColor:
//                           data?.branding?.primaryColor || "#6b7280",
//                       }}
//                     >
//                       <IconComponent className="text-black text-xl" />
//                     </a>
//                   );
//                 })}
//               </div>
//             )}
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
//             <ul className="space-y-4">
//               <li>
//                 <a href="/" className="text-gray-400 hover:text-white">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="text-gray-400 hover:text-white">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="/services" className="text-gray-400 hover:text-white">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="/team" className="text-gray-400 hover:text-white">
//                   Team
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="text-gray-400 hover:text-white">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
//             <div className="flex flex-col gap-4 text-gray-400">
//               {data?.contact?.phone && (
//                 <p className="flex items-start">
//                   <FaPhone
//                     className="mr-3 text-lg"
//                     style={{ color: data?.branding?.primaryColor || "#fff" }}
//                   />
//                   {data.contact.phone}
//                 </p>
//               )}
//               {data?.contact?.email && (
//                 <p className="flex items-start">
//                   <FaEnvelope
//                     className="mr-3 text-lg"
//                     style={{ color: data?.branding?.primaryColor || "#fff" }}
//                   />
//                   {data.contact.email}
//                 </p>
//               )}
//               {data?.contact?.address && (
//                 <p className="flex items-start">
//                   <FaMapMarkerAlt
//                     className="mr-3 text-lg"
//                     style={{ color: data?.branding?.primaryColor || "#fff" }}
//                   />
//                   {data.contact.address}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
//           <p>
//             &copy; 2025{" "}
//             <span style={{ color: data?.branding?.primaryColor || "#fff" }}>
//               {data?.name}
//             </span>
//             . All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
