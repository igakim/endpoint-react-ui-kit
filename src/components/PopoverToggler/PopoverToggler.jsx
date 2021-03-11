import React, { useState } from 'react';
import cn from 'classnames';
import Button from '../Button';
import './PopoverToggler.scss';
import { identity } from 'ramda';

const PopoverToggler = ({
  buttonProps = {
    variant: 'filled',
    color: 'primary',
    size: 'medium',
    onChange: identity,
  },
  buttonText = '',
  children = [],
}) => {
  const { onChange = identity, className = '', ...rest } = buttonProps;
  const popoverWrapperClasses = cn('popover-wrapper');
  const getPopoverContainerClasses = (show) => cn({
    'popover-container': true,
    'popover-container-show': show,
  });
  const btnClasses = cn('popover-btn', className);
  const triangleClasses = cn('popover-triangle');

  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(!open);
    onChange(e);
  };

  const handleHide = () => {
    setOpen(false);
  };

  return (
    <div className={popoverWrapperClasses}>
      <Button
        type="button"
        {...rest}
        onClick={handleClick}
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
