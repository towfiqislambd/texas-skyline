export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  		roboto: 'Roboto, sans-serif',
        montserrat: 'Montserrat, sans-serif'
  		},
  		container: {
  			center: true,
  			screens: {
  				'4xl': '1600px'
  			},
  			padding: '15px'
  		},
        colors:{
        	bannerTitle: '#B7783F',
        	bodyText: '#BDBDBD',
        	primaryBg:'#8F4F24',
          deepBlackBg: '#20232B'
      }
    },
  },
  plugins: [],
}

