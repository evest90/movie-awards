import React from 'react';
import { NomineeImage } from 'Components/NomineeImage';
import { SelectButton } from 'Components/SelectButton';

export default function NomineeCard({ nominee }) {
  const { title, photoUrl, id } = nominee;
  return (
    <div>
      <div>{title}</div>
      <NomineeImage image={photoUrl} />
      <SelectButton />
    </div>
  )
}