import React, { useEffect } from 'react';
import { identity } from 'ramda';
import cn from 'classnames';
import { Close } from '../icons';
import { Text } from '../../index';
import './Dialog.scss';

const Dialog = ({
  open = false,
  title = '',
  onClose = identity,
  renderBody = identity,
  withoutFooter = false,
  renderFooter = identity,
}) => {
  const dialogClasses = cn('dialog', 'show');
  const dialogWrapper = cn('dialog-wrapper');
  const dialogHeader = cn('dialog-header');
  const dialogHeaderClose = cn('dialog-header-close');
  const dialogBody = cn('dialog-body');
  const dialogFooter = cn('dialog-footer');

  useEffect(() => {
    if (open) {
      document.body.classList.add('noscroll');
      return;
    }
    document.body.classList.remove('noscroll');
  }, [open]);

  return open && (
    <div className={dialogClasses} onClick={() => {
      onClose();
    }}>
      <div className={dialogWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={dialogHeader}>
          <Text variant="h2">{title}</Text>
          <button type="button" className={dialogHeaderClose} onClick={onClose}>
            <Close />
          </button>
        </div>
        <div className={dialogBody}>
          {renderBody()}
        </div>
        {
          withoutFooter
            ? null
            : (
              <div className={dialogFooter}>
                {renderFooter()}
              </div>
            )
        }
      </div>
    </div>
  );
};

export default Dialog;
