import React from 'react';
import { Button, Tooltip } from '@boozallen-uip/uswds-react-core';

export default function TooltipExample() {
  return (
    <Tooltip content="Example tooltip content">
      <Button>Try mousing over or focusing on me</Button>
    </Tooltip>
  );
}
