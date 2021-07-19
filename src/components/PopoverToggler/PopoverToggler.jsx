import React from 'react';
import cn from 'classnames';
import { identity } from 'ramda';
import Button from '../Button';
import './PopoverToggler.scss';

const PopoverToggler = ({
  open = false,
  buttonProps = {
    variant: 'filled',
    color: 'primary',
    size: 'medium',
    onClick: identity,
  },
  buttonText = '',
  children = [],
}) => {
  const { onClick = identity, className = '', ...rest } = buttonProps;
  const popoverWrapperClasses = cn('popover-wrapper');
  const getPopoverContainerClasses = (show) => cn({
    'popover-container': true,
    'popover-container-show': show,
  });
  const btnClasses = cn('popover-btn', className);
  const triangleClasses = cn('popover-triangle');

  return (
    <div className={popoverWrapperClasses}>
      <Button
        type="button"
        {...rest}
        onClick={onClick}
        className={btnClasses}
      >
        {buttonText}
      </Button>
      <div className={getPopoverContainerClasses(open)}>
        {children}
        <div className={triangleClasses} />
      </div>
    </div>
  );
};

export default PopoverToggler;
