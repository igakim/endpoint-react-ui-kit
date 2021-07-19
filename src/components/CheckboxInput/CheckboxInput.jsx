import React from 'react';
import cn from 'classnames';

import './CheckboxInput.scss';
import { Check } from '../icons';

/**
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {Object} props.labelProps
 * @returns {JSX.Element}
 * @constructor
 */
const CheckboxInput = ({
  label = '',
  labelProps = {},
  ...rest
}) => {
  const { className: labelClassName, ...restLabelProps } = labelProps;
  const containerProps = cn(
    'pretty', 'p-svg', 'p-has-focus', 'checkbox',
  );

  const iconClasses = cn('state', 'p-primary');

  const labelClasses = cn(
    'checkbox-label',
    labelClassName,
  );

  return (
    <div className={containerProps}>
      <input type="checkbox" {...rest} />
      <div className={iconClasses}>
        <Check className="svg svg-icon" />
        <label className={labelClasses} {...restLabelProps}>
          <span>{label}</span>
        </label>
      </div>
    </div>
  );
};

export default CheckboxInput;
