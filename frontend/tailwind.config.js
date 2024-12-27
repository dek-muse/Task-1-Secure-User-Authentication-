/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans your React app for class usage
  ],
  theme: {
    extend: {}, // Add custom theme extensions here if needed
  },
  plugins: [
    require('@tailwindcss/forms'), // Add the forms plugin here
  ],
};
