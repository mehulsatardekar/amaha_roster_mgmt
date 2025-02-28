/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        terracota800: "#E76943",
        terracota100: "#FFF5F2",
      },
      gridTemplateColumns: {
        "2": "repeat(2, minmax(0, 1fr))", // Force 2-column grid
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
