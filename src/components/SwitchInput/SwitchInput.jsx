import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './SwitchInput.scss';
import { identity } from 'ramda';
import { Check } from '../icons';

const SwitchInput = ({
  size = 'medium',
  value = false,
  onChange = identity,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const switchContainerClasses = cn('switch');
  const switchWrapper = cn(
    'switch-wrapper',
    `switch-wrapper-${size}`,
    { on: currentValue, off: !currentValue },
  );
  const switchDot = cn('switch-dot');

  const handleSwitch = (e) => {
    setCurrentValue(!currentValue);
    onChange(e, !currentValue);
  };

  return (
    <div className={switchContainerClasses}>
      <div className={switchWrapper} onClick={handleSwitch}>
        <div className={switchDot}>
          <Check />
        </div>
      </div>
    </div>
  );
};

export default SwitchInput;
