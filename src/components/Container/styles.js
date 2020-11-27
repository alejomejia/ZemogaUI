import styled, { css } from 'styled-components';
import THEME from '../../config/theme';

export const Root = styled.div`
  & .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
    padding: 0 ${THEME.sizing(2)};

    ${(props) =>
      props.boxed &&
      css`
        margin: 0 auto;
        max-width: ${THEME.grid.base};
      `}
  }
`;
