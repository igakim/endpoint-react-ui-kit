import cn from 'classnames';
import React from 'react';

/**
 *
 * @param {Object} props
 * @param {('start'|'end'|'center'|'between'|'around'|'evenly'|null)} props.justify
 * @param {('start'|'end'|'center'|null)} props.align
 * @param {( 0 | 1 | 2 | 3 | 4 | 5 | 6 )} props.spacing
 * @param {string} props.className
 * @param {array<ReactNode>} props.children
 * @returns {JSX.Element}
 * @constructor
 */
const Row = ({
  justify = null,
  align = null,
  spacing = 0,
  className = '',
  children,
  ...rest
}) => {
  const classes = cn(
    'row',
    `spacing-${spacing}`,
    {
      [`justify-${justify}`]: Boolean(justify),
      [`align-${align}`]: Boolean(align),
    },
    className,
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Row;
