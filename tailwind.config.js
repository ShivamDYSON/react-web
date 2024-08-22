/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-40px) rotate(45deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-60px) rotate(-45deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(45deg)' },
        },
      },
      animation: {
        float1: 'float1 12s ease-in-out infinite',
        float2: 'float2 14s ease-in-out infinite',
        float3: 'float3 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

