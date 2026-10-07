/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#DDF2FF",
          navy: "#123B8A",
          primary: "#1677D2",
          primaryHover: "#0E5FA6",
          darkText: "#20324D",
          mutedText: "#5E718C",
          card: "#FFFFFF",
          border: "#BFDBFE",
          lightBlue: "#EAF6FF",
          accent: "#0284C7",
          glow: "#38BDF8",
          sky: "#BAE6FD"
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 59, 138, 0.08)',
        'soft-lg': '0 10px 30px -3px rgba(18, 59, 138, 0.12)',
        'soft-xl': '0 20px 40px -4px rgba(18, 59, 138, 0.16)',
        'blue-glow': '0 0 25px rgba(22, 119, 210, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
