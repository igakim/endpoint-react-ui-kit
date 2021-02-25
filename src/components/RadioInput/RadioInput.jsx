import React from 'react';
import cn from 'classnames';

import './RadioInput.scss';

/**
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.name
 * @param {object} props.labelProps
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const RadioInput = ({
  label = '',
  name = '',
  labelProps = {},
  ...rest
}) => {
  const { className: labelClassName, ...restLabelProps } = labelProps;
  const containerClasses = cn(
    'pretty', 'p-default', 'p-round', 'radio',
  );

  const iconClasses = cn('state');

  const labelClasses = cn(
    'radio-label',
    labelClassName,
  );

  return (
    <div className={containerClasses}>
      <input type="radio" name={name} {...rest} />
      <div className={iconClasses}>
        <label className={labelClasses} {...restLabelProps}>{label}</label>
      </div>
    </div>
  );
};

export default RadioInput;
