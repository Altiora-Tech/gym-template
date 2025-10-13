/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // activa el modo oscuro por clase
  theme: {
    extend: {
      colors: {
        // Primary - Vibrant Orange (Energizing and bold)
        primary: {
          DEFAULT: '#FF6B35', // Vibrant Orange
          dark: '#E64A19',    // Darker Orange
          light: '#FFAB91',   // Light Orange
          contrast: '#BF360C', // Deep Orange
          lighter: '#FFE0B2', // Very Light Orange
        },
        // Secondary - Deep Blue (Trust and strength)
        secondary: {
          DEFAULT: '#1976D2',  // Strong Blue
          dark: '#0D47A1',    // Dark Blue
          light: '#64B5F6',   // Light Blue
          lighter: '#BBDEFB', // Very Light Blue
        },
        // Accent - Electric Yellow (Energy and action)
        accent: {
          DEFAULT: '#FFD600', // Bright Yellow
          dark: '#FFAB00',    // Darker Yellow
          light: '#FFEE58',   // Light Yellow
        },
        // Success - Green (Health and growth)
        success: {
          DEFAULT: '#43A047',
          dark: '#2E7D32',
          light: '#81C784',
        },
        // Alert - Red (Important actions)
        alert: {
          DEFAULT: '#E53935',
          dark: '#C62828',
          light: '#EF5350',
        },
        background: {
          light: '#F8FAFC',   // slate-50
          dark: '#0F172A',    // slate-900
        },
        foreground: {
          light: '#1E293B',   // slate-800
          dark: '#F1F5F9',    // slate-100 (lighter for better contrast)
        },
        card: {
          light: '#FFFFFF',   // white
          dark: '#1E293B',    // slate-800
        },
        muted: {
          light: '#64748B',   // slate-500
          dark: '#94A3B8',    // slate-400
        },
        border: {
          light: '#E2E8F0',   // slate-200
          dark: '#334155',    // slate-700
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slide-in 0.5s ease-out forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

