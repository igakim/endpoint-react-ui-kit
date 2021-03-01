import React from 'react';
import cn from 'classnames';
import './Text.scss';

/**
 *
 * @param {Object} props
 * @param {string} props.className
 * @param {string} props.component
 * @param {('body1'|'body2'|'body3'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'subtitle1'|'subtitle2'|'subtitle3')} props.variant
 * @param {('main'|'secondary'|'alter'|'contrast'|'danger'|'info'|'success'|'warning')} props.color
 * @param {array<ReactNode>} props.rest
 * @returns {JSX.Element}
 * @constructor
 */
const Text = ({
  className = '',
  component = 'div',
  variant = 'body1',
  color = 'main',
  bold = false,
  italic = false,
  children,
  ...rest
}) => {
  const classes = cn(
    className,
    `typography-${variant}`,
    `typography-${color}`,
    bold && 'typography-bold',
    italic && 'typography-italic',
  );

  const Component = component;

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default Text;
