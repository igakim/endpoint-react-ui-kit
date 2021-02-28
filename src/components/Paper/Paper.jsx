import React from 'react';
import cn from 'classnames';
import './Paper.scss';

const Paper = ({
  children,
  padding = 0,
}) => {
  const paperClasses = cn('paper');

  return (
    <div className={paperClasses} style={{ padding }}>
      {children}
    </div>
  );
};

export default Paper;
