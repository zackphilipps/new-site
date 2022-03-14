module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      teal: {
        60: 'hsl(178deg 32% 95%)',
        100: 'hsl(178deg 30% 92%)',
        200: 'hsl(178deg 30% 82%)',
        300: 'hsl(178deg 30% 72%)',
        400: 'hsl(178deg 30% 62%)',
        500: 'hsl(178deg 30% 52%)',
        600: 'hsl(178deg 30% 42%)',
        700: 'hsl(178deg 30% 32%)',
        800: 'hsl(178deg 30% 22%)',
        900: 'hsl(178deg 30% 12%)'
      },
      'teal-alt': {
        60: 'hsl(178deg 52% 95%)',
        100: 'hsl(178deg 50% 92%)',
        200: 'hsl(178deg 50% 82%)',
        300: 'hsl(178deg 50% 72%)',
        400: 'hsl(178deg 50% 62%)',
        500: 'hsl(178deg 50% 52%)',
        600: 'hsl(178deg 50% 42%)',
        700: 'hsl(178deg 50% 32%)',
        800: 'hsl(178deg 50% 22%)',
        900: 'hsl(178deg 50% 12%)'
      },
      blue: {
        100: 'hsl(208deg 30% 92%)',
        200: 'hsl(208deg 30% 82%)',
        300: 'hsl(208deg 30% 72%)',
        400: 'hsl(208deg 30% 62%)',
        500: 'hsl(208deg 30% 52%)',
        600: 'hsl(208deg 30% 42%)',
        700: 'hsl(208deg 30% 32%)',
        800: 'hsl(208deg 30% 22%)',
        900: 'hsl(208deg 30% 12%)'
      },

      'blue-alt': {
        100: 'hsl(208deg 50% 92%)',
        200: 'hsl(208deg 50% 82%)',
        300: 'hsl(208deg 50% 72%)',
        400: 'hsl(208deg 50% 62%)',
        500: 'hsl(208deg 50% 52%)',
        600: 'hsl(208deg 50% 42%)',
        700: 'hsl(208deg 50% 32%)',
        800: 'hsl(208deg 50% 22%)',
        900: 'hsl(208deg 50% 12%)'
      },
      purple: {
        100: 'hsl(298deg 30% 92%)',
        200: 'hsl(298deg 30% 82%)',
        300: 'hsl(298deg 30% 72%)',
        400: 'hsl(298deg 30% 62%)',
        500: 'hsl(298deg 30% 52%)',
        600: 'hsl(298deg 30% 42%)',
        700: 'hsl(298deg 30% 32%)',
        800: 'hsl(298deg 30% 22%)',
        900: 'hsl(298deg 30% 12%)'
      },
      'purple-alt': {
        100: 'hsl(298deg 50% 92%)',
        200: 'hsl(298deg 50% 82%)',
        300: 'hsl(298deg 50% 72%)',
        400: 'hsl(298deg 50% 62%)',
        500: 'hsl(298deg 50% 52%)',
        600: 'hsl(298deg 50% 42%)',
        700: 'hsl(298deg 50% 32%)',
        800: 'hsl(298deg 50% 22%)',
        900: 'hsl(298deg 50% 12%)'
      },
      magenta: {
        100: 'hsl(358deg 30% 92%)',
        200: 'hsl(358deg 30% 82%)',
        300: 'hsl(358deg 30% 72%)',
        400: 'hsl(358deg 30% 62%)',
        500: 'hsl(358deg 30% 52%)',
        600: 'hsl(358deg 30% 42%)',
        700: 'hsl(358deg 30% 32%)',
        800: 'hsl(358deg 30% 22%)',
        900: 'hsl(358deg 30% 12%)'
      },
      red: {
        100: 'hsl(358deg 52% 92%)',
        200: 'hsl(358deg 52% 82%)',
        300: 'hsl(358deg 52% 72%)',
        400: 'hsl(358deg 52% 62%)',
        500: 'hsl(358deg 52% 52%)',
        600: 'hsl(358deg 52% 42%)',
        700: 'hsl(358deg 52% 32%)',
        800: 'hsl(358deg 52% 22%)',
        900: 'hsl(358deg 52% 12%)'
      },
      orange: {
        100: 'hsl(28deg 60% 92%)',
        200: 'hsl(28deg 60% 82%)',
        300: 'hsl(28deg 60% 72%)',
        400: 'hsl(28deg 60% 62%)',
        500: 'hsl(28deg 60% 60%)',
        600: 'hsl(28deg 60% 42%)',
        700: 'hsl(28deg 60% 32%)',
        800: 'hsl(28deg 60% 22%)',
        900: 'hsl(28deg 60% 12%)'
      },
      green: {
        100: 'hsl(118deg 30% 92%)',
        200: 'hsl(118deg 30% 82%)',
        300: 'hsl(118deg 30% 72%)',
        400: 'hsl(118deg 30% 62%)',
        500: 'hsl(118deg 30% 52%)',
        600: 'hsl(118deg 30% 42%)',
        700: 'hsl(118deg 30% 32%)',
        800: 'hsl(118deg 30% 22%)',
        900: 'hsl(118deg 30% 12%)'
      },
      'green-alt': {
        100: 'hsl(118deg 50% 92%)',
        200: 'hsl(118deg 50% 82%)',
        300: 'hsl(118deg 50% 72%)',
        400: 'hsl(118deg 50% 62%)',
        500: 'hsl(118deg 50% 52%)',
        600: 'hsl(118deg 50% 42%)',
        700: 'hsl(118deg 50% 32%)',
        800: 'hsl(118deg 50% 22%)',
        900: 'hsl(118deg 50% 12%)'
      },
      gray: {
        100: 'hsl(178deg 6% 92%)',
        200: 'hsl(178deg 6% 82%)',
        300: 'hsl(178deg 6% 72%)',
        400: 'hsl(178deg 6% 62%)',
        500: 'hsl(178deg 6% 52%)',
        600: 'hsl(178deg 6% 42%)',
        700: 'hsl(178deg 6% 32%)',
        800: 'hsl(178deg 6% 22%)',
        900: 'hsl(178deg 6% 12%)'
      }
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      serif: ['Spectral', 'serif']
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }
          }
        },
        teal: {
          css: {
            '--tw-prose-body': theme('colors.teal[800]'),
            '--tw-prose-headings': theme('colors.teal[700]'),
            '--tw-prose-lead': theme('colors.teal[700]'),
            '--tw-prose-links': theme('colors.blue[400]'),
            '--tw-prose-bold': theme('colors.teal[800]'),
            '--tw-prose-counters': theme('colors.teal[600]'),
            '--tw-prose-bullets': theme('colors.teal[400]'),
            '--tw-prose-hr': theme('colors.teal[200]'),
            '--tw-prose-quotes': theme('colors.teal[600]'),
            '--tw-prose-quote-borders': theme('colors.teal[300]'),
            '--tw-prose-captions': theme('colors.teal[700]'),
            '--tw-prose-code': theme('colors.teal[700]'),
            '--tw-prose-pre-code': theme('colors.teal[100]'),
            '--tw-prose-pre-bg': theme('colors.teal[800]'),
            '--tw-prose-th-borders': theme('colors.teal[300]'),
            '--tw-prose-td-borders': theme('colors.teal[200]'),
            '--tw-prose-invert-body': theme('colors.teal[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.teal[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.teal[400]'),
            '--tw-prose-invert-bullets': theme('colors.teal[600]'),
            '--tw-prose-invert-hr': theme('colors.teal[700]'),
            '--tw-prose-invert-quotes': theme('colors.teal[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.teal[700]'),
            '--tw-prose-invert-captions': theme('colors.teal[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.teal[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.teal[600]'),
            '--tw-prose-invert-td-borders': theme('colors.teal[700]')
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
