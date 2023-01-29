const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    // @return map.get((xs:0,sm:480px,md:768px,lg:992px,xl:1200px, xxl: 1400px), $key)
    // screens: {
    //   xs: 0,
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      textColor: {
        primaryContrast: 'white',
        secondaryContrast: 'white',
      },
      backgroundColor: {
        primary: 'hsl(240, 91%, 56%)',
        secondary: 'hsl(343, 91%, 56%)',
      },
      textShadow: {
        default: '0px 0px 1px rgb(0 0 0 / 20%), 0px 0px 1px rgb(1 0 5 / 10%)',
        sm: '1px 1px 3px rgb(36 37 47 / 25%)',
        md: '0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%)',
        lg: '3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%)',
        xl: '1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%)',
        none: 'none',
      },
    },
  },
  plugins: [
    plugin(function ({addBase, addComponents, matchUtilities, theme}) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        {values: theme('textShadow')}
      )
      addBase({
        '.flex': {
          'flex-direction': 'column',
        },
      })
      addComponents({
        '.flex-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.absolute-fill-x': {
          position: 'absolute',
          left: 0,
          right: 0,
        },
        '.absolute-fill-y': {
          position: 'absolute',
          top: 0,
          bottom: 0,
        },
        '.absolute-fill': {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      })
    }),
  ],
}
