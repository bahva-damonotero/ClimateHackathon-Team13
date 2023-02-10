import React from 'react';
import {
  GridCol,
  GridContainer,
  GridRow
} from '@boozallen-uip/uswds-react-core';

export default function GridContainerExample() {
  return (
    <GridContainer id="grid-example">
      <GridRow>
        <GridCol width="auto">width based on content</GridCol>
        <GridCol width={4}>25% width</GridCol>
        <GridCol>fill remaining width</GridCol>
      </GridRow>
    </GridContainer>
  );
}
