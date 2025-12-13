import { colors } from './src/design-system/tokens/colors';
import { typography } from './src/design-system/tokens/typography';
import { spacing } from './src/design-system/tokens/spacing';
import { radius } from './src/design-system/tokens/radius';
import { stroke } from './src/design-system/tokens/stroke';
import plugin from 'tailwindcss/plugin';

// Refresh
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      letterSpacing: typography.letterSpacing,
      spacing,
      borderRadius: radius,
      borderWidth: stroke.width,
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {};
      Object.entries(typography.textStyles).forEach(([key, value]) => {
        const className = `.text-${key.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        newUtilities[className] = {
          fontFamily: typography.fontFamily[value.fontFamily],
          fontWeight: typography.fontWeight[value.fontWeight],
          fontSize: typography.fontSize[value.fontSize],
          lineHeight: typography.lineHeight[value.lineHeight],
          letterSpacing: typography.letterSpacing[value.letterSpacing],
        };
        if (value.textTransform) {
          newUtilities[className].textTransform = value.textTransform;
        }
      });
      addUtilities(newUtilities);
    }),
  ],
}
