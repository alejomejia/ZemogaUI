import { createGlobalStyle } from 'styled-components';
import THEME from './theme';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;

    &:after,
    &:before{
      box-sizing: border-box;
    }
  }
  
  html,
  body{
    overflow-x: hidden;
  }

  body{
    position: relative;
    color: ${THEME.palette.black};
    font-size: ${THEME.typography.size.root};
    font-family: 'Lato', 'Helvetica', sans-serif;
  }

  h1{
    font-size: ${THEME.typography.size.h1};
  }

  h2{
    font-size:${THEME.typography.size.h2};
    font-weight: 300;
  }

  h3{
    font-size:${THEME.typography.size.h3};
  }

  button{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: none;
    font-family: 'Lato', 'Helvetica', sans-serif;
  }
`;

export default GlobalStyles;
