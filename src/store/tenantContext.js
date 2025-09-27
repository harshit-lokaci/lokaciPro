import { createContext, useState, useEffect } from "react";
import { getSubdomain } from "../Helper/getSubdomain"; // your helper

const TenantContext = createContext({
	tenantData: null, // backend data for the tenant
});

export const TenantContextProvider = ({ children }) => {
	const [tenantData, setTenantData] = useState(null);
	const subdomain = getSubdomain();
	console.log(subdomain)

	// useEffect(() => {
	// 	let subdomain;

	// 	try {
	// 		subdomain = ensureValidSubdomain(); // get validated subdomain
	// 	} catch (error) {
	// 		console.error(error.message);
	// 		return;
	// 	}
		

	// 	// Fetch tenant-specific data from backend
	// 	fetch(`/api/tenants/${subdomain}`)
	// 		.then((response) => {
	// 			if (!response.ok) {
	// 				throw new Error("Failed to fetch tenant data");
	// 			}
	// 			return response.json();
	// 		})
	// 		.then((data) => setTenantData(data))
	// 		.catch((error) =>
	// 			console.error("Error fetching tenant data:", error)
	// 		);
	// }, []);

	return (
		<TenantContext.Provider value={{ tenantData }}>
			{children}
		</TenantContext.Provider>
	);
};

export default TenantContext;
