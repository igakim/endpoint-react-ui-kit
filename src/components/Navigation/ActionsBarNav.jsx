import React from 'react';
import cn from 'classnames';
import './ActionsBarNav.scss';
/**
 *
 * @param {Object} props
 * @param {Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string), label: string}>} props.actions
 * @param {(string|number)} props.activeKey
 * @param {string} props.actionLabel
 * @returns {ReactNode[]}
 * @constructor
 */
const ActionsBarNav = ({
  actions = [],
  activeKey,
  actionLabel = '',
}) => {
  const getActionBarItem = (active) => cn(
    'actionbar-nav-item',
    active && 'active',
  );
  const actionBarItemIcon = cn(
    'actionbar-nav-item-icon',
  );
  const actionBarItemLabel = cn(
    'actionbar-nav-item-label',
  );
  const actionBarNav = cn(
    'actionbar-nav',
  );
  const actionBarNavLabel = cn(
    'actionbar-nav-label',
  );

  return (
    <div className={actionBarNav}>
      <div className={actionBarNavLabel}>{actionLabel}</div>
      {
        actions.map(
          ({
            key,
            onClick,
            icon: Icon,
            label,
          }) => (
            <div
              className={getActionBarItem(activeKey === key)}
              key={key}
              onClick={onClick}
            >
              <div className={actionBarItemIcon}>
                <Icon />
              </div>
              <div className={actionBarItemLabel}>
                {label}
              </div>
            </div>
          ),
        )
      }
    </div>
  );
};

export default ActionsBarNav;
