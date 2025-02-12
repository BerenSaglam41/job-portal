/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // JSX ve TSX eklendi!
  theme: {
    extend: {},
  },
  plugins: [],
  mode: "jit", // Bu satır artık gereksiz, çünkü JIT varsayılan olarak açık.
}
