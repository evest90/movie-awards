import React from 'react';

import { splitOnDashAndMakeUppercase } from 'utils/transformStrings'
import { TitleContainer } from './Category.styles';

export default function Category({ category, index }) {
  const transformedTitle = splitOnDashAndMakeUppercase(category);
  
  return <TitleContainer tabIndex="0" role="heading" aria-level={index + 1}>{transformedTitle}</TitleContainer>
}