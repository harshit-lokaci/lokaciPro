import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, 
  //   port: 3000,
  //   // hmr: {
  //   //   host: "YOUR_LOCAL_IP", // <-- put your PC's LAN IP here
  //   //   protocol: "ws",
  //   //   port: 3000,
  //   // },
  },
});
