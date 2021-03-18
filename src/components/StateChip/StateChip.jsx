import React from 'react';
import cn from 'classnames';

import './StateChip.scss';
import { Check, MinusCircle } from '../icons';

const StateChip = ({ state = 'success' }) => {
  const icons = {
    success: <Check />,
    failure: <MinusCircle />,
  };

  const stateChipClasses = cn({
    'state-chip': true,
    'state-chip-failure': state === 'failure',
    'state-chip-success': state === 'success',
  });
  return (
    <span className={stateChipClasses}>
      {icons[state]}
    </span>
  );
};

export default StateChip;
