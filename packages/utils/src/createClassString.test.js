import createClassString from './createClassString';

describe('createClassString', () => {
  it('should combine a list of classes into a class string', () => {
    expect(createClassString(['class1', 'class2', 'class3'])).toEqual(
      'class1 class2 class3'
    );
  });

  it('should combine a list of classes into a class string, ignoring falsy values', () => {
    expect(
      createClassString([
        undefined,
        'class1',
        null,
        'class2',
        '',
        'class3',
        false
      ])
    ).toEqual('class1 class2 class3');
  });
});
