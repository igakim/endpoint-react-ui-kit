import React from 'react';
import cn from 'classnames';
import './Chip.scss';
/**
 *
 * @param {Object} props
 * @param {('primary'|'secondary'|'alter')} props.color
 * @param {('small'|'medium'|'large')} props.size
 * @param {array<ReactNode>} children
 * @param {string} className
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Chip = ({
  color = 'primary',
  size = 'small',
  children,
  className = '',
  ...rest
}) => {
  const chipClasses = cn(
    'chip',
    `chip-${color}`,
    `chip-${size}`,
    className,
  );

  return (
    <span className={chipClasses} {...rest}>{children}</span>
  );
};

export default Chip;
