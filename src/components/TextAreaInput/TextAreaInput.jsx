import React from 'react';
import cn from 'classnames';

import './TextAreaInput.scss';

/**
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} props.size
 * @param {('outlined'|'filled')} props.variant
 * @param {('primary'|'secondary')} props.color
 * @param {string|null} props.tipText
 * @param {string|null} props.state
 * @param {boolean} props.showTip
 * @param {boolean} props.disabled
 * @param {string} props.className
 * @param {string} props.type
 * @param {(ReactNode|null)} props.prependIcon
 * @param {boolean} props.borderedPrepend
 * @param {(ReactNode|null)} props.appendButtonIcon
 * @param {Object} props.appendButtonProps
 * @param {Object} props.containerProps
 * @param {string} props.containerProps.className
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const TextAreaInput = ({
  size = 'medium',
  variant = 'outlined',
  color = 'primary',
  tipText = null,
  state = null,
  showTip = false,
  disabled = false,
  className = '',
  containerProps = {},
  ...rest
}) => {
  const { className: containerClassName = '', ...restContainerProps } = containerProps;
  const containerClasses = cn(
    'input-container',
    size,
    state && `input-container-${state}`,
    containerClassName,
  );
  const tipClasses = cn(
    'input-tip',
    {
      show: (state === 'error') || showTip,
    },
  );
  const inputClasses = cn(
    'input-base',
    {
      [`input-${color} input-filled`]: variant === 'filled',
      [`input-outline-${color} input-outline`]: variant === 'outlined',
    },
    className,
  );
  const inputContainerClass = cn(
    'input-container-wrapper',
  );

  return (
    <div className={containerClasses} {...restContainerProps}>
      <div className={inputContainerClass}>
        <textarea className={inputClasses} disabled={disabled} {...rest} />
      </div>
      <div className={tipClasses}>
        {tipText}
      </div>
    </div>
  );
};

export default TextAreaInput;
