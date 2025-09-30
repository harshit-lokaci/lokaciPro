// import { createContext, useState, useEffect } from "react";
// import { getSubdomain } from "../Helper/getSubdomain"; // your helper
// import { BASE_URL_API } from "../constants";


// const TenantContext = createContext({
// 	tenantData: null, // backend data for the tenant
// });

// export const TenantContextProvider = ({ children }) => {
// 	const [tenantData, setTenantData] = useState(null);

// 	useEffect(() => {
// 		const fetchTenantData = async () => {
// 			const subdomain = getSubdomain();
// 			console.log(subdomain);

// 			// 	try {
// 			// 		subdomain = ensureValidSubdomain(); // get validated subdomain
// 			// 	} catch (error) {
// 			// 		console.error(error.message);
// 			// 		return;
// 			// 	}

// 			try {
// 				const response = await fetch(`${BASE_URL_API}/getTenantConfigurations`, {
// 					method: "POST",
// 					// headers: {
// 					// 	"Content-Type": "application/json",
// 					// },
// 					body: JSON.stringify({ subdomain: subdomain }),
// 				});

// 				if (!response.ok) {
// 					throw new Error("Failed to fetch tenant data");
// 				}

// 				const data = await response.json();
// 				setTenantData(data);
// 				console.log(data);
// 			} catch (error) {
// 				console.error("Error fetching tenant data:", error);
// 			}
// 		};

// 		fetchTenantData();
// 	}, []);

// 	return (
// 		<TenantContext.Provider value={{ tenantData }}>
// 			{children}
// 		</TenantContext.Provider>
// 	);
// };

// export default TenantContext;


import { createContext, useState, useEffect } from "react";
import { getSubdomain } from "../Helper/getSubdomain";
import { BASE_URL_API } from "../constants";

const TenantContext = createContext({
  tenantData: null,
});

export const TenantContextProvider = ({ children }) => {
  // Load from localStorage if available
  const [tenantData, setTenantData] = useState(() => {
    const saved = localStorage.getItem("tenantData");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    const fetchTenantData = async () => {
      const subdomain = getSubdomain();

      try {
        const response = await fetch(`${BASE_URL_API}/getTenantConfigurations`, {
          method: "POST",
          body: JSON.stringify({ subdomain }),
        });

        if (!response.ok) throw new Error("Failed to fetch tenant data");

        const data = await response.json();
        setTenantData(data);  
        localStorage.setItem("tenantData", JSON.stringify(data)); // Update localStorage
      } catch (error) {
        console.error("Error fetching tenant data:", error);
      }
    };

    fetchTenantData();
  }, []);

  return (
    <TenantContext.Provider value={{ tenantData }}>
      {children}
    </TenantContext.Provider>
  );
};

export default TenantContext;
