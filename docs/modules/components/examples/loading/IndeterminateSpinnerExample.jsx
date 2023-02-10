import React, { useState } from 'react';
import {
  Dropdown,
  Form,
  GridCol,
  GridRow
} from '@boozallen-uip/uswds-react-core';
import { IndeterminateSpinner } from '@boozallen-uip/uswds-react-loading';

export default function IndeterminateSpinnerExample() {
  const [type, setType] = useState('wandering-cubes');
  const [color, setColor] = useState('blue-gray');

  const typeOptions = [
    'chasing-dots',
    'circle',
    'cube-grid',
    'double-bounce',
    'fading-circle',
    'folding-cube',
    'pulse',
    'rotating-plane',
    'three-bounce',
    'wandering-cubes',
    'wave'
  ];

  const colorOptions = [
    'black',
    'white',
    'light-gray',
    'gray',
    'dark-gray',
    'blue-gray',
    'light-blue',
    'blue',
    'dark-blue',
    'light-green',
    'green',
    'dark-green',
    'light-yellow',
    'yellow',
    'dark-yellow',
    'amber',
    'orange',
    'deep-orange',
    'light-red',
    'red',
    'dark-red',
    'light-purple',
    'purple',
    'dark-purple',
    'magenta',
    'light-brown',
    'brown',
    'dark-brown'
  ];

  return (
    <Form className="margin-1">
      <GridRow gaps>
        <GridCol>
          <Dropdown
            id="type"
            options={typeOptions}
            value={type}
            onChange={(e) => setType(e.detail.value)}
          >
            Type
          </Dropdown>
        </GridCol>

        <GridCol>
          <Dropdown
            id="color"
            options={colorOptions}
            value={color}
            onChange={(e) => setColor(e.detail.value)}
          >
            Color
          </Dropdown>
        </GridCol>
      </GridRow>

      <br />

      <GridRow>
        <GridCol />
        <GridCol>
          <IndeterminateSpinner color={color} size={80} type={type} />
        </GridCol>
        <GridCol />
      </GridRow>
    </Form>
  );
}
