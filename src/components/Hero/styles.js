import styled, { css } from 'styled-components';
import THEME from '../../config/theme';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  min-height: ${THEME.sizing(90)};
  margin-bottom: ${THEME.sizing(5)};
  padding-top: 120px;
  background-color: ${THEME.palette.black};

  ${(props) =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-size: cover;
      background-position: center;
    `}

  & > div:first-child {
    display: flex;
    flex-grow: 1;
  }
`;
