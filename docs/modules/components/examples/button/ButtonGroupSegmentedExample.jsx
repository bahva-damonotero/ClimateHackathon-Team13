import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupItem
} from '@boozallen-uip/uswds-react-core';

export default function ButtonGroupSegmentedExample() {
  return (
    <ButtonGroup segmented>
      <ButtonGroupItem>
        <Button>Button 1</Button>
      </ButtonGroupItem>

      <ButtonGroupItem>
        <Button>Button 2</Button>
      </ButtonGroupItem>

      <ButtonGroupItem>
        <Button>Button 3</Button>
      </ButtonGroupItem>
    </ButtonGroup>
  );
}
