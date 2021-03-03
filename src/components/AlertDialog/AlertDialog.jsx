import React, { useEffect } from 'react';
import cn from 'classnames';
import {
  Warning, Error, Info, Close, Text,
} from '../../index';
import './AlertDialog.scss';
import { identity } from 'ramda';

const AlertDialog = ({
  open = false,
  title = '',
  onClose = identity,
  renderBody = identity,
  renderFooter = identity,
  type = 'info',
}) => {
  const dialogClasses = cn('alert-dialog', open && 'show');
  const dialogWrapper = cn('alert-dialog-wrapper');
  const dialogHeader = cn('alert-dialog-header');
  const dialogIcon = cn('alert-dialog-icon', type);
  const getDialogBodyClasses = (isCentered) => cn(
    'alert-dialog-body',
    isCentered && 'text-center',
  );
  const dialogFooter = cn('alert-dialog-footer');

  useEffect(() => {
    if (open) {
      document.body.classList.add('noscroll');
      return;
    }
    document.body.classList.remove('noscroll');
  }, [open]);

  const iconTypes = {
    info: <Info />,
    warning: <Warning />,
    error: <Error />,
  };

  return (
    <div className={dialogClasses}>
      <div className={dialogWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={dialogHeader}>
          <div className={dialogIcon}>
            {iconTypes[type]}
          </div>
          <Text variant="h2">{title}</Text>
        </div>
        <div className={getDialogBodyClasses(type !== 'error')}>
          {renderBody()}
        </div>
        <div className={dialogFooter}>
          {renderFooter()}
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
