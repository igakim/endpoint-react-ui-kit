import React from 'react';
import cn from 'classnames';

import './IconTabs.scss';
import { identity } from 'ramda';

const IconTabs = ({
  items,
  activeItem,
  onTabClick = identity,
}) => {
  const getTabItemClasses = (item) => cn({
    'icontabs-item': true,
    'icontabs-item-active': activeItem === item,
  });

  const handleClick = (tab) => () => {
    onTabClick(tab);
  };

  return (
    <div className="icontabs">
      <div className="icontabs-container">
        {items.map((tab) => (
          <div className={getTabItemClasses(tab.key)} key={tab.key} onClick={handleClick(tab.key)}>
            <span className="icontabs-icon">
              {tab.icon}
            </span>
            <span className="icontabs-label">{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconTabs;
