import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  text-align: center;
  border: solid 1px;
  height: 200px;
  padding-top: 20px;
  
  ${({ $isSelected}) => $isSelected ?
    css`
    background: #34ac9c;
    color: #ccc;
  `: css`
    background: #009B86;
  
  `}


  &:hover {
    background: #34ac9c;
    color: #ccc;
  }
`;
