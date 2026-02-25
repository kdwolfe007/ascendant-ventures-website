import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#0F0F23',
        'space-mid': '#13132e',
        'space-light': '#1a1a3e',
        'av-cyan': '#00D4FF',
        'av-purple': '#7B2FF7',
        'av-pink': '#FF0080',
        'av-slate': '#A0A0C0',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'av-gradient': 'linear-gradient(135deg, #7B2FF7 0%, #00D4FF 100%)',
        'av-gradient-r': 'linear-gradient(90deg, #7B2FF7 0%, #00D4FF 100%)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(123,47,247,0.3), transparent)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
