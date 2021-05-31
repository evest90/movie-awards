import React from 'react';
import { NomineeImage } from 'Components/NomineeImage';
import { SelectButton } from 'Components/SelectButton';

import { CardContainer } from './NomineeCard.styles';

export default function NomineeCard({ nominee, onClick, category, $isSelected }) {
  const { title, photoUrL } = nominee;
  return (
    <CardContainer $isSelected={$isSelected}>
      <div>{title}</div>
        <NomineeImage image={photoUrL} />
      <div>
        <SelectButton onClick={onClick} category={category} nominee={nominee} />
      </div>
    </CardContainer>
  )
}