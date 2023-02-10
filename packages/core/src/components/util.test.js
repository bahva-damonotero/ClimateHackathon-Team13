import { validatorsToObject } from './util';

describe('validatorsToObject', () => {
  it('should convert an array of validators to an object with the proper key-value pairs', () => {
    expect(
      validatorsToObject([
        {
          name: 'uppercase',
          regex: '[A-Z]'
        },
        {
          name: 'numerical',
          regex: '\\d'
        }
      ])
    ).toEqual({
      'data-validate-numerical': '\\d',
      'data-validate-uppercase': '[A-Z]'
    });
  });
});
