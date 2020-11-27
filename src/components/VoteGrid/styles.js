import styled from 'styled-components';
import THEME from '../../config/theme';

export const Root = styled.section`
  margin-bottom: ${THEME.sizing(4)};

  .vote-grid {
    width: 100%;

    &__title {
      margin-bottom: ${THEME.sizing(4)};
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: ${THEME.sizing(3)};
    }
  }
`;
