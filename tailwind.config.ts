import type {Config} from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
    './stories/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        red: {
          theme: {
            normal: '#EC5757',
            light: '#FF9797'
          }
        },
        purple: {
          theme: {
            normal: '#7C5DFA',
            'light': '#9277FF'
          }
        },
        blue: {
          theme: {
            wild: '#7E88C3'
          }
        },
        gray: {
          theme: {
            light: '#DFE3FA',
            normal: '#888EB0'
          }
        },
        clay: {
          theme: {
            ebony: {
              normal: '#252945',
              dark: '#141625',
              'dark-2': '#1E2139',
              darker: '#0C0E16'
            }
          }
        }
      },
      boxShadow: {
        theme: '0 10px 10px -10px rgba(72, 84, 159, 0.10)'
      }

    }
  },
  plugins: []
}
export default config
