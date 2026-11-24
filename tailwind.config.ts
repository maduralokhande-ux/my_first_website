import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0a0c16",
        panel: "#11142a",
        fg: "#eceaf5",
        muted: "#9a9bb8",
        violet: "#8b5cf6",
        rose: "#f472b6",
        amber: "#fbbf24",
      },
      fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
