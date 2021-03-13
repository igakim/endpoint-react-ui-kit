import React from 'react';
import cn from 'classnames';

import './Tag.scss';
import { identity } from 'ramda';
import { Close } from '../icons';

/**
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.color
 * @param {function} props.onDelete
 * @param {string} props.className
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Tag = ({
  label = '',
  color = 'primary',
  onDelete = null,
  className = '',
  ...rest
}) => {
  const tagClasses = cn(
    'tag',
    `tag-${color}`,
    className,
  );

  const tagCloseClasses = cn(
    'tag-close',
  );

  return (
    <span className={tagClasses} {...rest}>
      {label}
      {
        onDelete
          ? (
            <span className={tagCloseClasses} onClick={onDelete}>
              <Close />
            </span>
          ) : null
      }
    </span>
  );
};

export default Tag;
