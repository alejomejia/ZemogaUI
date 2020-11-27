import styled from 'styled-components';
import { rgba } from 'polished';
import THEME from '../../config/theme';

export const Root = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  .vote-box {
    margin-bottom: ${THEME.sizing(6)};

    &__content {
      color: ${THEME.palette.white.base};
      background-color: ${rgba(THEME.palette.black, 0.4)};
      backdrop-filter: blur(40px);
      padding: ${THEME.sizing(3)};
    }

    &__title {
      font-weight: 300;
      font-size: ${THEME.sizing(2)};
    }

    &__figure-name {
      display: block;
      font-size: ${THEME.sizing(8)};
      font-weight: 400;
      line-height: 1;
      margin-bottom: ${THEME.sizing(3)};
    }

    &__description {
      font-size: ${THEME.sizing(2.5)};
      font-weight: 300;
      line-height: 1.5;
      margin-bottom: ${THEME.sizing(3)};
    }

    &__link {
      display: inline-block;
      color: ${rgba(THEME.palette.white.base, 0.8)};
      font-size: ${THEME.sizing(2)};
      font-weight: 300;
      margin-bottom: ${THEME.sizing(3)};

      &:hover {
        color: ${THEME.palette.white.base};
      }
    }

    &__more {
      display: inline-block;
      margin-left: ${THEME.sizing(0.5)};
      border-bottom: 1px solid;
    }

    &__verdict {
      font-size: ${THEME.sizing(2.5)};
      font-weight: 700;
    }

    &__thumbs {
      display: flex;
    }

    &__thumb-wrapper {
      flex: 1;
      min-height: 80px;
    }

    &__thumb-up,
    &__thumb-down {
      cursor: pointer;
      font-size: ${THEME.sizing(4)};
      color: #fff;
      height: 100%;
      text-align: center;
      width: 100%;
    }

    &__thumb-up {
      background-color: ${THEME.palette.primary.opacity(0.9)};
    }

    &__thumb-down {
      background-color: ${THEME.palette.secondary.opacity(0.9)};
      transform: scale(-1, 1);
    }
  }
`;
