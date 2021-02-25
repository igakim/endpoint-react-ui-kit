import React from 'react';
import cn from 'classnames';

/**
 *
 * @param {Object} props
 * @param {Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string), label: string}>} props.actions
 * @param {(string|number)} props.activeKey
 * @returns {ReactNode[]}
 * @constructor
 */
const ActionsBarMainActions = ({
  actions = [],
  activeKey,
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

  return actions.map(
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
  );
};

export default ActionsBarMainActions;
