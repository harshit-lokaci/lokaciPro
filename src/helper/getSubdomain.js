export function getSubdomain(hostname = window.location.hostname) {
	if (!hostname) {
		console.log("no hostname");
		
		return null;
	} 

	const parts = hostname.split(".");

	// if (parts.length !== 3) {
	// 	console.log("not 3 parts");
		
	// 	return null;
	// }

	const [subdomain, domain, tld] = parts;
	

	// if (!domain || !tld) {
	// 	console.log("no domain or tld");
		
	// 	return null;
	// }

	const isValid = /^[a-z0-9-]+$/.test(subdomain);

	if (!isValid) {
		console.log("invalid format");
		
		return null;
	}

	return subdomain;

}

// export function ensureValidSubdomain() {
// 	const subdomain = getSubdomain();

// 	if (!subdomain) {
// 		throw new Error("Invalid or missing subdomain.");
// 	}

// 	return subdomain;
// }
