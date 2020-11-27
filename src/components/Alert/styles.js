import styled, { css } from 'styled-components';
import THEME from '../../config/theme';

export const Root = styled.div`
  position: fixed;
  z-index: 100;
  bottom: ${THEME.sizing(3)};
  right: ${THEME.sizing(3)};
  color: rgb(97, 26, 21);
  background-color: rgb(253, 236, 234);
  border-top: 1px solid #dabfbc;
  border-left: 1px solid #dabfbc;
  border-right: 1px solid #dabfbc;
  border-bottom: 3px solid #f44336;
  border-radius: ${THEME.sizing(0.5)} ${THEME.sizing(0.5)} 0 0;
  transition: all 1s ease;

  ${(props) =>
    props.show
      ? css`
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          opacity: 0;
          transform: translateY(200px);
        `}

  .alert {
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${THEME.sizing(2)};

    &__icon {
      display: inline-block;
      color: #f44336;
      width: ${THEME.sizing(3)};
      height: ${THEME.sizing(3)};
      font-weight: 700;
      text-align: center;
      border: 2px solid;
      border-radius: 50%;
      margin-right: ${THEME.sizing(1)};
    }
  }
`;
