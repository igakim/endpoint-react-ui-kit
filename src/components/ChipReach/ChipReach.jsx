import React from 'react';
import cn from 'classnames';

import './ChipReach.scss';

const ChipReach = ({
  color = 'primary',
  className = '',
  children,
  ...rest
}) => {
  const chipReachClasses = cn(
    'chip-reach',
    className,
    `chip-reach-${color}`,
  );

  return (
    <span className={chipReachClasses} {...rest}>{children}</span>
  );
};

export default ChipReach;
