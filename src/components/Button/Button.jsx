import React from 'react';
import cn from 'classnames';
import './Button.scss';

/**
 *
 * @param {Object} props
 * @param {('primary'|'secondary'|'info'|'danger'|'success'|'plain'|'warning')} props.color
 * @param {('extra-small'|'small'|'medium'|'large')} props.size
 * @param {('filled'|'outlined'|'contrasted'|'text')} props.variant
 * @param {boolean} props.fullWidth
 * @param {string} props.className
 * @param {ReactNode} props.prependIcon
 * @param {ReactNode} props.appendIcon
 * @param {any} props.children
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({
  color = 'primary',
  size = 'small',
  variant = 'filled',
  fullWidth = false,
  className = '',
  prependIcon = null,
  appendIcon = null,
  children,
  ...rest
}) => {
  const classes = cn(
    size,
    'btn',
    {
      [`btn-${color}`]: variant === 'filled',
      [`btn-outline-${color}`]: variant === 'outlined',
      [`btn-contrasted-${color}`]: variant === 'contrasted',
      [`btn-text-${color}`]: variant === 'text',
      'full-width': fullWidth,
    },
    className,
  );

  const appendIconWrapper = appendIcon ? React.cloneElement(appendIcon, { className: 'append-icon' }) : null;
  const prependIconWrapper = prependIcon ? React.cloneElement(prependIcon, { className: 'prepend-icon' }) : null;

  return (
    <button className={classes} {...rest}>
      {prependIconWrapper} {children} {appendIconWrapper}
    </button>
  );
};

export default Button;
