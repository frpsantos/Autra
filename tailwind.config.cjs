/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paleta Autra
        brand: {
          primary: "#0039d9", // azul Autra
          dark: "#021f7c",
          light: "#0068fa",
          accent: "#d7f274", // verde-lima destaque
        },
        surface: {
          DEFAULT: "#0d0d0d", // fundo escuro Autra
          alt: "#1a1a1a",
          light: "#f8fafc",   // fundo claro
        },
        text: {
          DEFAULT: "#ffffff", // texto no escuro
          dark: "#111827",    // texto no claro
          muted: "#9ca3af",
        },
        neutral: "#404040",
      },
      backgroundImage: {
        "radial-brand":
          "radial-gradient(1200px 600px at 50% -10%, rgba(0,57,217,0.3), rgba(0,0,0,0) 60%)",
      },
      boxShadow: {
        "brand-glow": "0 0 25px 3px rgba(0,104,250,0.3)",
      },
    },
  },
  plugins: [],
};

