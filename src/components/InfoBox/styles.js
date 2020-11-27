import styled from 'styled-components';
import THEME from '../../config/theme';

export const Root = styled.section`
  margin-bottom: ${THEME.sizing(4)};

  .infobox {
    display: flex;
    align-items: center;
    background-color: ${THEME.palette.white.dark};
    padding: ${THEME.sizing(3)};

    &__title {
      display: block;
      font-size: ${THEME.sizing(3)};
      font-weight: 300;
    }

    &__subtitle {
      display: block;
      font-size: ${THEME.sizing(5)};
      font-weight: 700;
    }

    &__column-right {
      flex: 1;
      padding: 0 ${THEME.sizing(3)};
    }

    &__description {
      font-size: 15px;
      line-height: 1.5;
    }

    &__close-btn {
      cursor: pointer;
      padding: ${THEME.sizing(1)};
    }

    &__close-icon {
      font-size: ${THEME.sizing(3)};
    }
  }
`;
