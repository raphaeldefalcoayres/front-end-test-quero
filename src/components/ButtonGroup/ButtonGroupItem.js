import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';
import nameToId from '~/utils/nameToId';

export default function ButtonGroupItem({ children, checked, action }) {
  const id = useMemo(() => nameToId(children), [children]);
  let label = children;
  const IS_LABEL_VALID = children.indexOf('.') !== -1;

  if (IS_LABEL_VALID) {
    const name_parts = children.split('.');
    label = `${name_parts[1]}° Semestre de ${name_parts[0]}`;
  }

  return (
    <Button type="button" onClick={() => action(children)}>
      <input
        type="radio"
        name="button-group"
        defaultChecked={checked}
        id={id}
        value={id}
      />
      <label htmlFor={id}>{label}</label>
    </Button>
  );
}

ButtonGroupItem.propTypes = {
  children: PropTypes.node.isRequired,
  checked: PropTypes.string,
  action: PropTypes.func,
};

ButtonGroupItem.defaultProps = {
  checked: null,
  action: null,
};
