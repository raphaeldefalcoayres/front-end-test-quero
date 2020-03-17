import React from 'react';

// import { Container } from './styles';

export default function BreadcrumbItem({ children, href }) {
  return <li>{href ? <a href={href}>{children}</a> : children}</li>;
}
