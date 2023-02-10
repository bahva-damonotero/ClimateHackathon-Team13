import React from 'react';
import {
  GridCol,
  GridContainer,
  GridRow
} from '@boozallen-uip/uswds-react-core';

export default function GridRowExample() {
  return (
    <GridContainer id="grid-example">
      <GridRow gaps gapSize={2}>
        <GridCol width={5}>5/12 width</GridCol>
        <GridCol width={4}>1/3 width</GridCol>
        <GridCol width={3}>1/4 width</GridCol>
      </GridRow>
    </GridContainer>
  );
}
