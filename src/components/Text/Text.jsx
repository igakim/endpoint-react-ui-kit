import React from 'react';
import cn from 'classnames';
import './Text.scss';

/**
 *
 * @param {Object} props
 * @param {string} props.className
 * @param {string} props.component
 * @param {('body1'|'body2'|'body3'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'subtitle1'|'subtitle2'|'subtitle3')} props.variant
 * @param {('main'|'secondary'|'alter'|'contrast')} props.color
 * @param {array<ReactNode>} props.rest
 * @returns {JSX.Element}
 * @constructor
 */
const Text = ({
  className = '',
  component = 'div',
  variant = 'body1',
  color = 'main',
  children,
  ...rest
}) => {
  const classes = cn(
    className,
    `typography-${variant}`,
    `typography-${color}`,
  );

  const Component = component;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default Text;
