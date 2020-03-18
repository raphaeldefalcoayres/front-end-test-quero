import React from 'react';
import PropTypes from 'prop-types';

export default function BreadcrumbItem({ children, href }) {
  return <li>{href ? <a href={href}>{children}</a> : children}</li>;
}

BreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

BreadcrumbItem.defaultProps = {
  href: null,
};
