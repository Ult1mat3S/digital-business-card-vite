import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  base: "/digital-business-card-vite/",
  server: {
    open: true,
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
