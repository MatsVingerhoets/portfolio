/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter"]
    },
    extend: {
      boxShadow: {
        "3xl": "0 0px 10px rgba(147,212,177,1)"
      },
      colors: {
        accent: {
          light: "#C8EAD7",
          subtle: "#E4F5EB",
          disabled: "#6A6A6A",
          dark: "#27A470",
          default: "#93D4B1"
        },
        background: {
          primary: "#1A1A1A"
        },
        foreground: {
          primary: "#F8F8F8"
        }
      }
    }
  },
  plugins: []
}
