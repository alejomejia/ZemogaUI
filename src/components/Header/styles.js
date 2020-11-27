import styled from 'styled-components';
import THEME from '../../config/theme';

export const Root = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(51, 51, 51, 0.82),
    transparent
  );
  z-index: ${THEME.zindex.header};

  .header {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: ${THEME.grid.base};
      min-height: 120px;
      margin: 0 auto;
      padding: 0 ${THEME.sizing(2)};
    }
  }
`;
