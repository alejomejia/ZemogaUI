import styled from 'styled-components';
import THEME from '../../config/theme';

export const Root = styled.div`
  .logo {
    &__text {
      color: ${THEME.palette.white.base};
      font-size: ${THEME.sizing(4)};
    }
  }
`;
