import React from 'react';

declare module '@boozallen-uip/uswds-react-loading' {
  export import IndeterminateSpinner = __Loading.IndeterminateSpinner;
  export import IndeterminateSpinnerProps = __Loading.IndeterminateSpinnerProps;
  export import ProgressCircle = __Loading.ProgressCircle;
  export import ProgressCircleProps = __Loading.ProgressCircleProps;
}

declare namespace __Loading {
  export interface IndeterminateSpinnerProps {
    /** Color of the spinner */
    color?:
      | 'black'
      | 'white'
      | 'light-gray'
      | 'gray'
      | 'dark-gray'
      | 'blue-gray'
      | 'light-blue'
      | 'blue'
      | 'dark-blue'
      | 'light-green'
      | 'green'
      | 'dark-green'
      | 'light-yellow'
      | 'yellow'
      | 'dark-yellow'
      | 'amber'
      | 'orange'
      | 'deep-orange'
      | 'light-red'
      | 'red'
      | 'dark-red'
      | 'light-purple'
      | 'purple'
      | 'dark-purple'
      | 'magenta'
      | 'light-brown'
      | 'brown'
      | 'dark-brown';
    /** Size of the spinner in pixels */
    size?: number;
    /** Animation type of the spinner */
    type?:
      | 'chasing-dots'
      | 'circle'
      | 'cube-grid'
      | 'double-bounce'
      | 'fading-circle'
      | 'folding-cube'
      | 'pulse'
      | 'rotating-plane'
      | 'three-bounce'
      | 'wandering-cubes'
      | 'wave';
  }
  export const IndeterminateSpinner: React.FC<IndeterminateSpinnerProps>;

  export interface ProgressCircleProps {
    /** Color of the progress circle */
    color?: string;
    /** Font family used to display percentage */
    fontFamily?: string;
    /** Font size used to display percentage */
    fontSize?: number;
    /** Font weight used to display percentage */
    fontWeight?: number | 'normal' | 'bold' | 'bolder' | 'lighter';
    /** If `false`, the displayed percentage will not be rounded down */
    rounded?: boolean;
    /** If `false`, the percentage is not displayed */
    showPercentage?: boolean;
    /** Size of the progress circle in pixels */
    size?: number;
    /** Stroke width of the progress circle in pixels */
    strokeWidth?: number;
    /** Percentage (out of 100) of the progress circle */
    value: number;
  }
  export const ProgressCircle: React.FC<ProgressCircleProps>;
}
