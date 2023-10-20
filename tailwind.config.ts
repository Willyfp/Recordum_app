import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#93F009",
          secondary: "#242424",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    borderColor: {
      "color-background": "#242424",
      "color-primary": "#93F009",
      "pagination-disabled": "#434343",
      "error-color": "#FF0000",
      white: "#fff",
      disabled: "#979797",
    },
    colors: {
      "color-background": "#242424",
      "color-primary": "#93F009",
      "pagination-disabled": "#434343",
      white: "#fff",
      disabled: "#979797",
    },
    fontSize: {
      initial_title: "1.375rem",
      button_ghost: "0.875rem",
      button_primary: "1rem",
    },
    textColor: {
      white: "#fff",
      black: "#242424",
      secondary: "#93F009",
      error: "#FF0000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        first_access_1: "url('/images/first_access_1.png')",
        first_access_2: "url('/images/first_access_2.png')",
        first_access_3: "url('/images/first_access_3.png')",
        home: "url('/images/home.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
