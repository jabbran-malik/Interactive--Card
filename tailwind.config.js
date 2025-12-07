/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       spacing: {
      128: '32rem',
      144: '36rem',
    },
      colors: {
        primary: {
          DEFAULT: 'hsl(249, 99%, 64%)',      // for buttons, bg
          gradientStart: 'hsl(249, 99%, 64%)', // gradient start
          gradientEnd: 'hsl(278, 94%, 30%)',   // gradient end
          error: 'hsl(0, 100%, 66%)',          // input errors
        },
        neutral: {
          white: 'hsl(0, 100%, 100%)',
          gray200: 'hsl(270, 3%, 87%)',
          gray400: 'hsl(212, 12%, 71%)',
          purple950: 'hsl(278, 68%, 11%)',
        },
      },
  fontFamily: {
  sans: ['"Space Grotesk"', 'sans-serif'],
},
      fontSize: {
        base: '18px',
      },
      fontWeight: {
        medium: 500,
      },
    },
  },
  plugins: [],
};
