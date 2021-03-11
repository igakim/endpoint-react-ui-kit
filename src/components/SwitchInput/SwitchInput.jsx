import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import './SwitchInput.scss';
import { identity } from 'ramda';
import { Check } from '../icons';

const SwitchInput = ({
  size = 'medium',
  onChange = identity,
  checked = false,
}) => {
  const [currentValue, setCurrentValue] = useState(checked);

  useEffect(() => {
    setCurrentValue(checked);
  }, [checked]);

  const switchContainerClasses = cn('switch');
  const switchWrapper = cn(
    'switch-wrapper',
    `switch-wrapper-${size}`,
    { on: currentValue, off: !currentValue },
  );
  const switchDot = cn('switch-dot');
  // const switchCheckbox = cn('switch-checkbox');

  const handleSwitch = (e) => {
    // Это делайется для библиотеки React-Table,
    // Свитч, который должен выключать все колонки или включать их
    // Внутри библиотеки используется e.target.checked, чего нет в этом компоненте
    const mockedEvent = {
      target: {
        checked: !currentValue,
      },
    };
    onChange(mockedEvent, !currentValue);
  };

  return (
    <div className={switchContainerClasses}>
      <div
        className={switchWrapper}
        onClick={handleSwitch}
      >
        <div className={switchDot}>
          <Check />
        </div>
      </div>
    </div>
  );
};

export default SwitchInput;
