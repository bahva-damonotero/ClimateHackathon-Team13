import React from 'react';
import {
  GridCol,
  GridContainer,
  GridRow
} from '@boozallen-uip/uswds-react-core';

export default function GridColExample() {
  const widths = {
    width: 6,
    mobile: 4,
    tablet: 2,
    desktop: 1
  };

  return (
    <GridContainer id="grid-example">
      <GridRow>
        Resize the window and notice how the number of columns per row increases
        as the width does:
      </GridRow>

      <GridRow>
        {[...Array(12)].map(() => (
          <GridCol {...widths}>column</GridCol>
        ))}
      </GridRow>
    </GridContainer>
  );
}
