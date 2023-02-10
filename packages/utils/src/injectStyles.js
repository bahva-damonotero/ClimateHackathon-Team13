export default function injectStyles(...styles) {
  const styleElement = document.createElement('style');
  document.head.appendChild(styleElement);

  const styleSheet = styleElement.sheet;
  // eslint-disable-next-line no-restricted-syntax
  for (const style of styles) {
    styleSheet.insertRule(style, styleSheet.cssRules.length);
  }
}
