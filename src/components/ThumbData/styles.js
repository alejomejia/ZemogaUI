import styled from 'styled-components';
import THEME from '../../config/theme';

export const Root = styled.div`
  width: ${(props) => props.width}%;
  min-width: 25%;
  max-width: 75%;
  transition: width 0.35s ease-out;

  .thumbs-data {
    display: flex;
    align-items: center;
    height: 50px;
    padding: ${THEME.sizing(1)};

    &.up {
      background-color: ${THEME.palette.primary.opacity(0.7)};

      i.fas {
        margin-right: ${THEME.sizing(1)};
      }
    }

    &.down {
      justify-content: flex-end;
      background-color: ${THEME.palette.secondary.opacity(0.7)};

      i.fas {
        margin-left: ${THEME.sizing(1)};
        transform: scale(-1, 1);
      }
    }

    &__info {
      display: flex;
      align-items: center;
      color: ${THEME.palette.white.base};
    }

    &__perc {
      font-size: ${THEME.sizing(4)};
      font-weight: 300;
    }

    &__icon {
      font-size: ${THEME.sizing(3)};
    }
  }
`;
