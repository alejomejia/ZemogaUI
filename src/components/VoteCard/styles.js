import styled from 'styled-components';
import THEME from '../../config/theme';

export const Root = styled.article`
  .vote-card {
    display: flex;
    position: relative;
    min-height: 550px;
    background-color: ${THEME.palette.black};
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 5;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.6) 35%,
        transparent 75%
      );
      z-index: 1;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      width: 100%;
      min-height: 100%;
      z-index: 5;
    }

    .figure {
      &__header {
        display: flex;
        align-items: flex-end;
        color: ${THEME.palette.white.base};
        padding-right: ${THEME.sizing(2)};
        margin-bottom: ${THEME.sizing(1)};
      }

      &__thumb {
        min-width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-right: ${THEME.sizing(1)};
        margin-bottom: ${THEME.sizing(1)};

        &.up {
          background-color: ${THEME.palette.primary.base};
        }

        &.down {
          background-color: ${THEME.palette.secondary.base};
          transform: scale(-1, 1);
        }

        &.middle {
          background-color: ${THEME.palette.black};
          transform: rotate(90deg);
        }
      }

      &__name {
        font-size: ${THEME.sizing(6)};
        font-weight: 400;
        line-height: 1;
      }

      &__body {
        color: ${THEME.palette.white.base};
        font-weight: 300;
        padding-left: ${THEME.sizing(5)};
        padding-right: ${THEME.sizing(2)};
        margin-bottom: ${THEME.sizing(4)};
      }

      &__desc {
        line-height: 1.2;
        min-height: 38px;
      }

      &__footer {
        padding-left: ${THEME.sizing(5)};
        padding-right: ${THEME.sizing(2)};
        margin-bottom: ${THEME.sizing(4)};
      }
    }

    .vote {
      display: flex;

      &__radio {
        position: relative;
        margin-right: ${THEME.sizing(1)};
      }

      &__label {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 35px;
        height: 35px;
        color: ${THEME.palette.white.base};

        &.up {
          background-color: ${THEME.palette.primary.base};
        }

        &.down {
          background-color: ${THEME.palette.secondary.base};
          transform: scale(-1, 1);
        }
      }

      &__input {
        position: absolute;
        visibility: hidden;
        top: 0;
        left: 0;

        &:checked + label {
          border: 2px solid ${THEME.palette.white.base};
        }
      }

      &__btn {
        cursor: pointer;
        color: ${THEME.palette.white.base};
        border: 1px solid ${THEME.palette.white.base};
        padding-left: ${THEME.sizing(2)};
        padding-right: ${THEME.sizing(2)};
        min-height: 35px;

        &:hover {
          color: ${THEME.palette.black};
          background-color: ${THEME.palette.white.base};
        }
      }
    }

    .thumbs-wrapper {
      display: flex;
      width: 100%;
    }
  }
`;
