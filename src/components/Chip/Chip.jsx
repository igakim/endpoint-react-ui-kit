import React from 'react';
import cn from 'classnames';
import './Chip.scss';
import IconButton from '../IconButton';
import Close from '../icons/Close';

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
  onRemove = null,
  ...rest
}) => {
  const chipClasses = cn(
    'chip',
    `chip-${color}`,
    `chip-${size}`,
    className,
  );

  const chipCloseBtnClasses = cn(
    'chip-close-btn',
  );

  return (
    <span className={chipClasses} {...rest}>
      {children}
      {
        onRemove
          ? (
            <button onClick={onRemove} type="button" className={chipCloseBtnClasses}>
              <Close />
            </button>
          ) : null
      }
    </span>
  );
};

export default Chip;
