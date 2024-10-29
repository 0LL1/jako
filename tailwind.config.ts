import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      body: ["Outfit Variable", "sans-serif"],
    },
    boxShadow: {
      DEFAULT: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    extend: {
      colors: {
        dark: colors.gray[950],
        light: colors.white,
        gray: colors.gray,
        focus: {
          light: colors.blue[400],
          DEFAULT: colors.blue[600],
        },
        danger: {
          light: colors.red[400],
          DEFAULT: colors.red[600],
        },
        blue: colors.blue[300],
        green: colors.green[300],
        red: colors.rose[300],
      },
    },
  },
  darkMode: "class",
  plugins: [forms, typography],
} as Config;
