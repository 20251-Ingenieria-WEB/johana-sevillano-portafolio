/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Para Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Para tus componentes
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Para Next.js App Router
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Si tienes una carpeta src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
