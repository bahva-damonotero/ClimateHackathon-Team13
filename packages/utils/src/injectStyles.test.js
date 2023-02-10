import injectStyles from './injectStyles';

describe('injectStyles', () => {
  it('should add styles to the page', () => {
    injectStyles(`body {
      margin: 0;
    }`);

    expect(
      window.getComputedStyle(document.querySelector('body')).margin
    ).toEqual('0px');
  });
});
