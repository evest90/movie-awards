import React from 'react';

import { SidebarWrapper } from './Sidebar.styles';

export default function Sidebar({ formattedSubmission }) {
  return (
    <SidebarWrapper>
      <div>{formattedSubmission.map(([category, nominee]) => (
        <div key={nominee}>{category}: {nominee}</div>
      ))}</div>
    </SidebarWrapper>
  )
}