// eslint-disable-next-line import/prefer-default-export
export function validatorsToObject(validators) {
  return validators.reduce(
    (prev, { name, regex }) => ({
      ...prev,
      [`data-validate-${name}`]: regex
    }),
    {}
  );
}
