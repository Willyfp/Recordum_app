import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
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
      qrCode: "#D9D9D9",
    },
    colors: {
      "color-background": "#242424",
      "color-primary": "#93F009",
      "pagination-disabled": "#434343",
      white: "#fff",
      disabled: "#979797",
      primary_bg: "#FCFCFC",
    },
    fontSize: {
      initial_title: "1.375rem",
      button_ghost: "0.875rem",
      button_primary: "1rem",
      description: "1.125rem",
      title: "1.5rem",
      bottom_navigation: "0.6875rem",
      name: "1.75rem",
      id: "1.0625rem",
    },
    fontWeight: {
      title_bottom_sheet: "500",
      semibold: "600",
      description: "300",
    },
    textColor: {
      white: "#fff",
      black: "#242424",
      secondary: "#93F009",
      error: "#FF0000",
      icon_calendar: "#909090",
      icon_bottom: "#666666",
      color_name: "#979797",
      id: "#C4C4C4",
    },
    extend: {
      boxShadow: {
        bottom_navigation: "0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
        avatar_card: "0px 0px 10px 0px rgba(35, 35, 35, 0.25);",
      },
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
  darkMode: "class",
};
export default config;
