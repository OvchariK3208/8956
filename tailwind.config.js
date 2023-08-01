/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js,jsx,ts,tsx}',
  	'./pages/**/*.{html,js,jsx,ts,tsx}',
  	'./src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {  
    	fontFamily: {
        all: ['Arimo']
      },
    	animation: {    
    		shine: "shine 1s",
    	},
    	keyframes: {    
    		shine: {      
    			"100%": {
    				left: "125%"
    			},
    		},
    	},
    },
  },
  plugins: [
        require('flowbite/plugin')
    ]
}