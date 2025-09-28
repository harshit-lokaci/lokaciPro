import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router";
import { AuthContextProvider } from "./store/authContext.jsx";
import { TenantContextProvider } from "./store/tenantContext.jsx";
import ScrollToTop from "./helper/scrollToTop.js";
// import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <TenantContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </TenantContextProvider>
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
