/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", 'sans-serif'],
        body: ["'DM Sans'", 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      colors: {
        cyan: '#00e5ff',
        'cyan-dim': 'rgba(0,229,255,0.12)',
        'cyan-glow': 'rgba(0,229,255,0.3)',
        'bg-dark': '#050810',
        'bg-dark-2': '#080d1a',
        'surface': 'rgba(255,255,255,0.03)',
        'surface-2': 'rgba(255,255,255,0.06)',
        'text-white': '#f0f4ff',
        'text-muted': 'rgba(240,244,255,0.45)',
        'border-color': 'rgba(0,229,255,0.15)',
      },
      backgroundImage: {
        'gradient-cyan': 'linear-gradient(135deg, #00e5ff 0%, #00b8d4 100%)',
        'gradient-glow': 'linear-gradient(135deg, rgba(0,229,255,0.1) 0%, rgba(124,58,237,0.1) 100%)',
      },
      backdropBlur: {
        'xl': '20px',
      },
      boxShadow: {
        'cyan-glow': '0 0 30px rgba(0,229,255,0.3)',
        'cyan-lg': '0 30px 80px rgba(0,229,255,0.1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-custom': 'pulse 2s infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
