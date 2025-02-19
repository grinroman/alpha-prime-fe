import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: { DEFAULT: "hsl(var(--border))" },
        text: { DEFAULT: "hsl(var(--foreground))" },
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        input: "hsl(var(--input))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
