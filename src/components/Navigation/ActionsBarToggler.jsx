import React from 'react';
import cn from 'classnames';
import { ChevronLeft, ChevronRight } from '../icons';
import './ActionsBarToggler.scss';

/**
 * @callback onClick
 * @param {SyntheticEvent} event
 */

/**
 *
 * @param {Object} props
 * @param {boolean} props.isShowActionBar
 * @param {onClick} onClick
 * @returns {JSX.Element}
 * @constructor
 */
const ActionsBarToggler = ({
  isShowActionBar = true,
  onClick = () => {},
}) => {
  const actionBarToggler = cn(
    'actionbar-toggler',
  );

  return (
    <div className={actionBarToggler} onClick={onClick}>
      {
        isShowActionBar
          ? <ChevronLeft />
          : <ChevronRight />
      }
    </div>
  );
};

export default ActionsBarToggler;
