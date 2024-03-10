// tailwind.config.js
// Using ES module export syntax
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    // ... other configurations ...
    theme: {
      extend: {
        gridTemplateColumns: {
          'auto-fit-minmax-340': 'repeat(auto-fit, minmax(340px, 1fr))',
        },
        gridAutoRows: {
          '400': '300px',
        },
      },
    },
    // ... more of your configurations ...
  };
  
