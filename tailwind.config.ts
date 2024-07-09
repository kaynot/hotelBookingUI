import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "bg-img": "url('https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg')",
        "bg-img2": "url('https://images.pexels.com/photos/4065510/pexels-photo-4065510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
