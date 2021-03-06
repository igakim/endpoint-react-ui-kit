import React from 'react';
import cn from 'classnames';
import './Container.scss';
import Row from './Row';
import Item from './Item';

/**
 *
 * @param {Object} props
 * @param {string} props.className
 * @param {array<ReactNode>} props.children
 * @returns {JSX.Element}
 * @constructor
 */
const Container = ({
  className,
  children,
  ...rest
}) => {
  const classes = cn(
    'container',
    className,
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Container.Row = Row;
Container.Item = Item;

export default Container;
