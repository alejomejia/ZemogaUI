import styled from 'styled-components';
import THEME from '../../config/theme';

const COMPONENT_HEIGHT = '50px';

export const Root = styled.div`
  background-color: rgba(112, 112, 112, 0.3);
  margin-top: auto;

  .closing {
    &__wrapper {
      min-height: ${COMPONENT_HEIGHT};
    }

    &__text {
      position: relative;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 30%;
      color: ${THEME.palette.white.base};
      font-size: ${THEME.sizing(1.625)};
      text-align: right;
      text-transform: uppercase;
      padding-right: ${THEME.sizing(2)};

      &:after {
        content: '';
        position: absolute;
        z-index: 1;
        width: 10px;
        height: 20px;
        right: -10px;
        clip-path: polygon(0 0%, 0% 100%, 100% 50%);
        background: #aea8a1;
      }
    }

    &__days {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      width: 70%;
      min-height: ${COMPONENT_HEIGHT};
      font-size: ${THEME.sizing(4)};
      font-weight: 300;
      padding-left: ${THEME.sizing(3)};

      & strong {
        font-weight: 400;
        margin-right: ${THEME.sizing(1)};
      }

      &:before {
        content: '';
        width: 1000%;
        height: 100%;
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;
