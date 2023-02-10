/* eslint-disable react/prop-types */
import React from 'react';

import { Button } from '..';
import Tooltip from '.';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    children: { type: null }
  }
};

// used to center the tooltip button/icon in the viewport
const CenterContent = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {children}
  </div>
);

const ButtonTemplate = (args) => (
  <CenterContent>
    <Tooltip {...args}>
      <Button>Mouse over or focus on me</Button>
    </Tooltip>
  </CenterContent>
);

const defaultArgs = {
  content: 'Example tooltip content'
};

export const top = ButtonTemplate.bind({});
top.args = {
  ...defaultArgs,
  position: 'top'
};

export const left = ButtonTemplate.bind({});
left.args = {
  ...defaultArgs,
  position: 'left'
};

export const bottom = ButtonTemplate.bind({});
bottom.args = {
  ...defaultArgs,
  position: 'bottom'
};

export const right = ButtonTemplate.bind({});
right.args = {
  ...defaultArgs
};

const IconTemplate = (args) => (
  <CenterContent>
    <div>
      <p>Try mousing over or focusing on this icon:</p>

      <Tooltip {...args}>
        <div>
          <svg style={{ width: 20, height: 20 }} viewBox="0 0 512 512">
            <g>
              <path
                d={`	
                M256 6C118 6 6 118 6 256s112 250 250	
                250 250-112 250-250S394 6 256 6zm-40.3	
                76.6h84.7V151h-84.7V82.7zm121	
                346.8H175.3V361h32.3v-97h-32.3v-68.4h121V361h40.3v68.4z	
              `}
                fill="#000"
              />
            </g>
          </svg>
        </div>
      </Tooltip>
    </div>
  </CenterContent>
);

export const icon = IconTemplate.bind({});
icon.args = {
  ...defaultArgs
};
