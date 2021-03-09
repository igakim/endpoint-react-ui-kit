import React from 'react';
import cn from 'classnames';
import './IconButton.scss';

/**
 * @param {Object} props
 * @param {ReactNode} props.icon
 * @param {('extra-small'|'small'|'medium'|'large')} props.size
 * @param {('primary'|'secondary'|'info'|'danger'|'success')} props.color
 * @param {('filled'|'outlined'|'contrasted'|'text')} props.variant
 * @param {string} props.className
 * @constructor
 */
const IconButton = ({
  icon = null,
  size = 'small',
  color = 'primary',
  variant = 'filled',
  className = '',
  ...rest
}) => {
  const classes = cn(
    'btn-icon',
    size,
    {
      [`btn-icon-${color}`]: variant === 'filled',
      [`btn-icon-outline-${color}`]: variant === 'outlined',
      [`btn-icon-contrasted-${color}`]: variant === 'contrasted',
      [`btn-icon-text-${color}`]: variant === 'text',
    },
    className,
  );

  const iconWrapper = icon ? React.cloneElement(icon, { className: 'icon' }) : null;

  return (
    <button className={classes} {...rest}>
      {iconWrapper}
    </button>
  );
};

export default IconButton;
