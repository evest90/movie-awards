import React from 'react';

import { ModalWrapper, ModalContent, ModalClose } from './Modal.styles'

export default function Modal({ onClose, formattedSubmission }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalClose onClick={onClose}>&times;</ModalClose>
        <div><strong>Your Submission</strong></div>
        <div>{formattedSubmission.map(([category, nominee]) => (
          <div>{category}: {nominee}</div>
        ))}</div>
      </ModalContent>
    </ModalWrapper>
  )
}