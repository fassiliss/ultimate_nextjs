// import type { Config } from "tailwindcss";

// export default {
//   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
// } satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
} satisfies Config;
