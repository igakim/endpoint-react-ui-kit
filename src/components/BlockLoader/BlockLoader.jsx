import React from 'react';
import cn from 'classnames';

import './BlockLoader.scss';

const BlockLoader = () => {
  const blockLoader = cn('block-loader');
  return (
    <div className={blockLoader}>
      test
    </div>
  );
};

export default BlockLoader;
