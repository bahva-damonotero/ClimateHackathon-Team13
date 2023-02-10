import React from 'react';
import { Tooltip } from '@boozallen-uip/uswds-react-core';

export default function TooltipIconExample() {
  return (
    <div>
      <p>Try mousing over or focusing on this icon:</p>

      <Tooltip content="Example tooltip content">
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
  );
}
