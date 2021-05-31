import React from 'react';

import { splitOnDashAndMakeUppercase } from 'utils/transformStrings'
import { TitleContainer } from './Category.styles';

export default function Category({ category }) {
  const transformedTitle = splitOnDashAndMakeUppercase(category);
  
  return <TitleContainer>{transformedTitle}</TitleContainer>
}