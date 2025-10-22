
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "auth-dark": "url('/images/auth-bg-dark.png')",
        "auth-light": "url('/images/auth-bg-light.png')",
      },
    },
  },
} satisfies Config;