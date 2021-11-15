import React from 'react';
import cn from 'classnames';
import {
  Warning, Success, Error, Info,
} from '../icons';

import './Alert.scss';

const Alert = ({
  type = 'danger',
  text = '',
  blocked = true,
}) => {
  const alertBoxClasses = cn({
    'alert-box': true,
    [`alert-box-${type}`]: true,
    'alert-box-inline': !blocked,
  });

  const icons = {
    danger: <Error />,
    success: <Success />,
    info: <Info />,
    warning: <Warning />,
  };

  return (
    <div className={alertBoxClasses}>
      <div className="alert-box-icon">{icons[type]}</div>
      <span className="alert-box-text">{text}</span>
    </div>
  );
};

export default Alert;
