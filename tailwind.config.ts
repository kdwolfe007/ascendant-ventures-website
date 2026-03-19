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
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.8s ease-out both',
        'scale-in': 'scaleIn 0.5s ease-out both',
        'slide-up': 'slideUp 0.7s ease-out both',
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
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(16px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
