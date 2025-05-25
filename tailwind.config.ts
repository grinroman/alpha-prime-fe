import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"
import { fontFamily } from "tailwindcss/defaultTheme"

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
        background: {
          DEFAULT: "hsl(var(--background))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          dark: { 1: "hsl(var(--border-dark-1))" },
          grey: { 1: "hsl(var(--border-grey-1))" },
          red: { 1: "hsl(var(--border-red-1))" },
        },
        text: {
          white: {
            1: "hsl(var(--text-white-1))",
          },
          black: {
            1: "hsl(var(--text-black-1))",
          },
          grey: {
            1: "hsl(var(--text-grey-1))",
          },
          red: {
            1: "hsl(var(--text-red-1))",
          },
        },
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
        input: {
          DEFAULT: "hsl(var(--input))",
        },
        boxShadow: {
          "2xl": "var(--shadow-2xl)",
        },
      },
      borderRadius: {
        xxl: "32px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config
