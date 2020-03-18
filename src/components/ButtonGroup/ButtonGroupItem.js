import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';
import nameToId from '~/utils/nameToId';

export default function ButtonGroupItem({ children, checked }) {
  const id = useMemo(() => nameToId(children), [children]);
  function handleSelect(e) {
    e.target.checked = true;
  }
  return (
    <Button type="button" onClick={e => handleSelect(e)}>
      <input
        type="radio"
        name="button-group"
        defaultChecked={checked}
        id={id}
        value={id}
      />
      <label htmlFor={id}>{children}</label>
    </Button>
  );
}

ButtonGroupItem.propTypes = {
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool.isRequired,
};
