import React from 'react';
import cn from 'classnames';

import './InputLabel.scss';

/**
 *
 * @param {Object} props
 * @param {string} props.htmlFor
 * @param {('small'|'medium'|'large')} props.size
 * @param {array<ReactNode|string>} children
 * @returns {JSX.Element}
 * @constructor
 */
const InputLabel = ({
  htmlFor = '',
  size = 'medium',
  children,
  ...rest
}) => {
  const classes = cn(
    'label',
    size,
  );

  return (
    <label htmlFor={htmlFor} className={classes} {...rest}>
      {children}
    </label>
  );
};

export default InputLabel;
