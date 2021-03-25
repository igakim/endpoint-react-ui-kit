import React from 'react';
import cn from 'classnames';

/**
 *
 * @param {Object} props
 * @param {Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string), label: string}>} props.actions
 * @param {string} props.helperActionsLabel
 * @returns {JSX.Element|null}
 * @constructor
 */
const ActionsBarHelperActions = ({
  actions = [],
  helperActionsLabel = '',
}) => {
  const actionBarDivider = cn(
    'actionbar-divider',
  );
  const actionBarActions = cn(
    'actionbar-nav-actions',
  );
  const actionBarNavLabel = cn(
    'actionbar-nav-label',
  );

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
  return actions.length > 0
    ? (
      <>
        <div className={actionBarDivider} />
        <div className={actionBarActions}>
          <div className={actionBarNavLabel}>{helperActionsLabel}</div>
          {
            actions.map(
              ({
                key,
                onClick,
                icon: Icon,
                label,
                shouldRender = true,
              }) => (shouldRender ? (
                <div className={getActionBarItem()} key={key} onClick={onClick}>
                  <div className={actionBarItemIcon}>
                    <Icon />
                  </div>
                  <div className={actionBarItemLabel}>
                    {label}
                  </div>
                </div>
              ) : null),
            )
          }
        </div>
      </>
    ) : null;
};

export default ActionsBarHelperActions;
