import React from 'react';
import cn from 'classnames';

import './Tabs.scss';
import { identity } from 'ramda';

const Tabs = ({
  items,
  activeItem,
  onTabClick = identity,
}) => {
  const tabsClasses = cn('tabs');
  const getTabsItemClasses = (active) => cn({
    'tabs-item': true,
    'tabs-item-active': active,
  });
  const tabsTextClasses = cn('tabs-text');

  const handleTabClick = (key) => (e) => {
    onTabClick(key, e);
  };

  return (
    <div className={tabsClasses}>
      {
        items.map((tab) => (
          <div
            className={getTabsItemClasses(tab.key === activeItem)}
            key={tab.key}
            onClick={handleTabClick(tab.key)}
          >
            <div className={tabsTextClasses}>
              {tab.label}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Tabs;
