import React from 'react';
import cn from 'classnames';

import './ProgressBar.scss';

const ProgressBar = ({ open = false, progress = 0 }) => {
  const progressClasses = cn('progress');
  const progressLineClasses = cn('progress-line');

  return open ? (
    <div className={progressClasses}>
      <div className={progressLineClasses} style={{ width: `${progress}%` }} />
    </div>
  ) : null;
};

export default ProgressBar;
