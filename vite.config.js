import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/Curtis_3D_Portfolio/",
  plugins: [react(), svgr()],
})
