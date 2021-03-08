import React from 'react';
import cn from 'classnames';

import './ChipAbsolute.scss';

const ChipAbsolute = ({
  color = 'primary',
  className = '',
  top = 'unset',
  left = 'unset',
  right = 'unset',
  bottom = 'unset',
  radiusSide = 'left',
  style = {},
  children,
  ...rest
}) => {
  const chipAbsClasses = cn(
    'chip-abs',
    `chip-abs-${color}`,
    `chip-abs-radius-${radiusSide}`,
    className,
  );

  const commonStyle = {
    ...style,
    top,
    left,
    right,
    bottom,
  };

  return (
    <span
      className={chipAbsClasses}
      {...rest}
      style={commonStyle}
    >
      {children}
    </span>
  );
};

export default ChipAbsolute;
