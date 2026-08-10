/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0A",
        "ink-soft": "#171613",
        paper: "#F5F4EF",
        "paper-dim": "#EAE8E0",
        concrete: "#8C8B85",
        line: "#D8D6CE",
        "line-dark": "#33322E",
        signal: "#FFC629",
      },
      fontFamily: {
        display: ["'Archivo Black'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};
