import { rgba } from 'polished';

// Baseline for spacing and font sizes
const BASELINE = 8;

const THEME = {
  palette: {
    white: {
      base: '#ffffff',
      dark: '#ebebeb',
    },
    black: '#333333',
    primary: {
      base: '#31c0ba',
      opacity(perc) {
        return rgba('#31c0ba', perc);
      },
    },
    secondary: {
      base: '#f7ad2d',
      opacity(perc) {
        return rgba('#f7ad2d', perc);
      },
    },
  },
  typography: {
    size: {
      root: `${BASELINE * 2}px`,
      h1: `${BASELINE * 7}px`,
      h2: `${BASELINE * 4}px`,
      h3: `${BASELINE * 3}px`,
    },
  },
  grid: {
    // 1024px base
    base: `${BASELINE * 128}px`,
  },
  sizing(value) {
    return `${value * BASELINE}px`;
  },
  transitions: {
    fast: 'all .15s ease',
    default: 'all .35s ease',
    slow: 'all .5s ease',
  },
  breakpoints: {
    xs: 400,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 1920,
  },
  zindex: {
    header: 500,
  },
};

export default THEME;
