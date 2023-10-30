/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/flowbite/**/*.js",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    screens: {
      // min
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
      "2xl": "1536px", // => @media (min-width: 1536px) { ... }
      max_2xl: { max: "1535px" }, // => @media (max-width: 1535px) { ... }
      max_xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
      max_lg: { max: "1023px" }, // => @media (max-width: 1023px) { ... }
      max_md: { max: "767px" }, // => @media (max-width: 767px) { ... }
      max_sm: { max: "639px" }, // => @media (max-width: 639px) { ... }
      max_ss: { max: "511px" },
    },
  },
};
export const plugins = [require("flowbite/plugin")];
