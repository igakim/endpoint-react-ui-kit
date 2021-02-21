import cn from 'classnames';
import React from 'react';

/**
 *
 * @param {Object} props
 * @param {('start'|'end'|'center'|null)} props.alignSelf
 * @param {number|null} props.xxs
 * @param {number|null} props.xs
 * @param {number|null} props.sm
 * @param {number|null} props.md
 * @param {number|null} props.xl
 * @param {number|null} props.xxl
 * @param {number|null} props.xxxl
 * @param {string} props.className
 * @param {array<ReactNode>} props.children
 * @returns {JSX.Element}
 * @constructor
 */
const Item = ({
  alignSelf = null,
  xxs = null,
  xs = null,
  sm = null,
  md = null,
  xl = null,
  xxl = null,
  xxxl = null,
  className = '',
  children,
  ...rest
}) => {
  const classes = cn(
    {
      col: true,
      [`col-xxs-${xxs}`]: Boolean(xxs),
      [`col-xs-${xs}`]: Boolean(xs),
      [`col-sm-${sm}`]: Boolean(sm),
      [`col-md-${md}`]: Boolean(md),
      [`col-xl-${xl}`]: Boolean(xl),
      [`col-xxl-${xxl}`]: Boolean(xxl),
      [`col-xxxl-${xxxl}`]: Boolean(xxxl),
      [`self-${alignSelf}`]: Boolean(alignSelf),
    },
    className,
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Item;
