import styled from 'styled-components';
import THEME from '../../config/theme';

export const Root = styled.nav`
  .navigation {
    &__wrapper {
      display: flex;
      color: ${THEME.palette.white.base};
      list-style-type: none;
    }

    &__item {
      padding: 0 ${THEME.sizing(4)};

      &:last-child {
        padding-right: 0;
      }
    }

    &__link {
      color: ${THEME.palette.white.base};
      font-weight: 300;
    }

    &__icon {
      cursor: pointer;
      font-size: ${THEME.sizing(3)};
    }
  }
`;
