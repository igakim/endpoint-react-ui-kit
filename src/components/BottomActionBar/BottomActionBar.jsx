import React from 'react';
import cn from 'classnames';

import './BottomActionBar.scss';

const BottomActionBar = ({
  children,
}) => {
  const bottomActionBar = cn('bottom-action-bar');

  return (
    <div className={bottomActionBar}>
      {children}
    </div>
  );
};

export default BottomActionBar;
