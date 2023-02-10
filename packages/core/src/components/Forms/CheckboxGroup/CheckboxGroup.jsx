import React from 'react';
import PropTypes from 'prop-types';

import { flattenChildren } from '@boozallen-uip/uswds-react-utils';

import { Fieldset, FormError } from '..';

export default function CheckboxGroup({ children, error, id, tile }) {
  let label;
  const options = [];

  flattenChildren(React.Children.toArray(children)).forEach((child) => {
    const componentType = child.type.displayName;

    switch (componentType) {
      case 'Legend':
        label = child;
        break;

      case 'Checkbox':
        options.push(child);
        break;

      default:
        throw new Error(
          `Invalid child component '${componentType}' used in CheckboxGroup.`
        );
    }
  });

  if (!label) {
    throw new Error('A Legend is required inside of a CheckboxGroup.');
  }

  if (!options.length) {
    throw new Error(
      'At least one Checkbox must be present inside of a CheckboxGroup.'
    );
  }

  return (
    <Fieldset>
      {React.cloneElement(label, { error })}

      <FormError error={error} />

      {options.map((child, index) =>
        React.cloneElement(child, {
          groupIndex: index,
          id,
          tile
        })
      )}
    </Fieldset>
  );
}

CheckboxGroup.propTypes = {
  /** `<Legend>` + `<Checkbox>` node(s) */
  children: PropTypes.node.isRequired,
  /** Error message to display */
  error: PropTypes.string,
  /** ID for the group of checkboxes */
  id: PropTypes.string.isRequired,
  /** If `true`, the tile checkbox variant is used for the entire group */
  tile: PropTypes.bool
};

CheckboxGroup.defaultProps = {
  tile: false
};
