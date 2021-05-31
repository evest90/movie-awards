import React from 'react';

import { ImageContainer } from './NomineeImages.styles';

export default function NomineeImage({ image }) {
  return (
    <ImageContainer
      src={image}
      alt=""
    />
  )
}