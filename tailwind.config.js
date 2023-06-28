/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        // 400px
        100: "25rem",
        // 416px
        104: "26rem",
        // 432px
        108: "27rem",
        // 448px
        112: "28rem",
        // 464px
        116: "29rem",
      },
    },
  },
  plugins: [],
};
