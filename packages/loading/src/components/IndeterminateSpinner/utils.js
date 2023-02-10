import { injectStyles } from '@boozallen-uip/uswds-react-utils';

// eslint-disable-next-line import/prefer-default-export
export function handleSpecialCases(size, type, setInnerStyle, setChildStyle) {
  // Percentages don't work with parts of these transforms,
  // so we inject these animation styles into the page
  // using the calculated pixel values.

  switch (type) {
    case 'rotating-plane':
      {
        const perspective = 3 * size;

        const injectedStyles = `@keyframes bah-uswds-spinner-rotatePlane-${size} {
          0% {
            transform: perspective(${perspective}px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: perspective(${perspective}px) rotateX(-180.1deg) rotateY(0deg);
          }
          100% {
            transform: perspective(${perspective}px) rotateX(-180deg) rotateY(-179.9deg);
          }
        }`;
        injectStyles(injectedStyles);

        setChildStyle({});
        setInnerStyle({
          animation: `bah-uswds-spinner-rotatePlane-${size} 1.2s infinite ease-in-out`
        });
      }
      break;

    case 'wandering-cubes':
      {
        const translate = size * (3 / 4);

        const injectedStyles = `@keyframes bah-uswds-spinner-wanderingCube-${size} {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: translateX(${translate}px) rotate(-90deg) scale(0.5);
          }
          50% {
            /* Hack to make FF rotate in the right direction */
            transform: translateX(${translate}px) translateY(${translate}px) rotate(-179deg);
          }
          50.1% {
            transform: translateX(${translate}px) translateY(${translate}px) rotate(-180deg);
          }
          75% {
            transform: translateX(0) translateY(${translate}px) rotate(-270deg) scale(0.5);
          }
          100% {
            transform: rotate(-360deg);
          }
        }`;
        injectStyles(injectedStyles);

        setInnerStyle({});
        setChildStyle({
          animation: `bah-uswds-spinner-wanderingCube-${size} 1.8s ease-in-out -1.8s infinite both`
        });
      }
      break;

    default:
      setInnerStyle({});
      setChildStyle({});
  }
}
