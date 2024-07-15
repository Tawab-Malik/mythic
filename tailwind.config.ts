// import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");


module.exports= {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily:{
                    inter: ['Inter', 'sans-serif']
       },
      colors:{
             'lightbrown': "#e5d1cd",
             'textbrown': "#62433c"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'card-image': 'var(--card-image)',
          'board-image': 'var(--board-image)',
          'mount-image': 'var(--mount-image)',
          'brown-image': 'var(--brown-image)',
          'red-image': 'var(--red-image)',
          'faqs-image': 'var(--faqs-image)',
          'blue-image': 'var(--blue-image)',
      },
    },
  },
  plugins: [nextui()],
};

