import React from 'react';
import cn from 'classnames';
import './SidebarItems.scss';

/**
 * @callback onClick
 * @param {SyntheticEvent} event
 */

/**
 *
 * @param {Object} props
 * @param {Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string)}>} props.items
 * @param {(null|number|string)} props.activeKey
 * @returns {JSX.Element}
 * @constructor
 */
const SidebarItems = ({
  items = [],
  activeKey = null,
}) => {
  const sidebarItemsClasses = cn(
    'sidebar-items',
  );
  const getSidebarItemClasses = (active) => cn(
    'sidebar-items-item',
    active && 'active',
  );
  const sidebarItemIcon = cn(
    'sidebar-items-icon',
  );

  return (
    <div className={sidebarItemsClasses}>
      {
        items.map(
          ({
            key,
            icon: Icon,
            onClick,
          }) => (
            <div
              className={getSidebarItemClasses(activeKey === key)}
              key={key}
              onClick={onClick}
            >
              <div className={sidebarItemIcon}>
                <Icon />
              </div>
            </div>
          ),
        )
      }
    </div>
  );
};

export default SidebarItems;
