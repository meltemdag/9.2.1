/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        meb: {
          blue: '#1E40AF',
          darkBlue: '#1E293B',
          lightBlue: '#EFF6FF',
          accent: '#0284C7',
          success: '#15803D',
          danger: '#DC2626',
          warning: '#D97706',
          bg: '#F8FAFC'
        }
      }
    },
  },
  plugins: [],
}
