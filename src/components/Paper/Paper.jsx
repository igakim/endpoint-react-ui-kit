import React from 'react';
import cn from 'classnames';
import './Paper.scss';

const Paper = ({
  children,
  padding = 0,
  margin = 0,
  ...rest
}) => {
  const paperClasses = cn('paper');

  return (
    <div className={paperClasses} style={{ padding, margin }} {...rest}>
      {children}
    </div>
  );
};

export default Paper;
