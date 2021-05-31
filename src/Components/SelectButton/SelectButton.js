import React from 'react';
import { StyledButton } from './SelectButton.styles';

export default function SelectButton({ onClick, category, nominee }) {
  return (
    <StyledButton onClick={() => onClick(category, nominee.id)}>
      Select Nominee
    </StyledButton>
  )
}