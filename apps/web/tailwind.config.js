'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const config = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require('../../libs/ui/tailwind.config')],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}
exports.default = config
