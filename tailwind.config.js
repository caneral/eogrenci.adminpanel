module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          base: '#f8f8f8',
        },
        black: {
          base: '#625f6e'
        },
        purple: {
          base: '#7367f0'
        }
      },
      fontFamily: {
        'sans' : ['"Montserrat"','Helvetica', 'Arial', 'serif'],
      },
      fontSize: {
        'cr': '1.1rem' 
      },
      boxShadow: {
              
        'all': '0px 4px 24px 0 rgba(34, 41, 47, 0.1)'
      }

    },
  },
  plugins: [],
}
