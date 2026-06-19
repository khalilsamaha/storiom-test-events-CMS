import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          teal:   "#3AACBE",
          orange: "#E8832A",
          purple: "#9B5EA2",
          olive:  "#8B9B2E",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #3AACBE 0%, #9B5EA2 33%, #E8832A 66%, #8B9B2E 100%)",
      },
    },
  },
  plugins: [],
}
export default config
