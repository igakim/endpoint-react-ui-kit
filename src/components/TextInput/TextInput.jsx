import React from 'react';
import cn from 'classnames';

import './TextInput.scss';

const TextInput = ({
  size = 'medium',
  type = 'outlined',
  color = 'primary',
  tipText = null,
  state = null,
  showTip = false,
  disabled = false,
}) => {
  const containerClasses = cn(
    'input-container',
    size,
    state && `input-container-${state}`,
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
      [`input-${color} input-filled`]: type === 'filled',
      [`input-outline-${color} input-outline`]: type === 'outlined',
    },
  );

  return (
    <div className={containerClasses}>
      <input className={inputClasses} type="text" placeholder="test placeholder" disabled={disabled} />
      <div className={tipClasses}>
        {tipText}
      </div>
    </div>
  );
};

export default TextInput;
