import styled, { css } from 'styled-components';

export const StyledSubmit = styled.button`
  border: none;
  outline: none;
  color: #fff;
  margin: 0 auto;
  height: 40px;
  width: 200px;

  ${({ disabled }) => disabled ? css`
    background: #34AC9C;
  ` : css`
    background: #009B86;
  `}

  &:hover {
    background: #34AC9C;
  }
`