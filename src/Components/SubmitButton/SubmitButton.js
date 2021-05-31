import React from 'react';

import { StyledSubmit } from './SubmitButton.styles';

export default function SubmitButton({ onSubmit, readyToSubmit }) {
  return <StyledSubmit onClick={onSubmit} disabled={!readyToSubmit}>SUBMIT</StyledSubmit>
}