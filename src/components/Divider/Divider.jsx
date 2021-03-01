import React from 'react';
import './Divider.scss';

/**
 *
 * @param props
 * @param {number} props.marginTop
 * @param {number} props.marginBottom
 * @param {object} props.style
 * @returns {JSX.Element}
 * @constructor
 */
const Divider = ({
  marginTop = 0,
  marginBottom = 0,
  style = {},
  ...rest
}) => {
  const styles = {
    marginTop,
    marginBottom,
    ...style,
  };

  return (
    <div className="divider" style={styles} {...rest} />
  );
};

export default Divider;
