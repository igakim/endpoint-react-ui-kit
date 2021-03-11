import React, { useState } from 'react';
import { Tabs } from '../src';

const TabsContainer = () => {
  const [current, setCurrent] = useState('tab1');
  const items = [
    { key: 'tab1', label: 'TAB No. 1' },
    { key: 'tab2', label: 'TAB No. 2' },
    { key: 'tab3', label: 'TAB No. 3' },
    { key: 'tab4', label: 'TAB No. 4' },
    { key: 'tab5', label: 'TAB No. 5' },
  ];

  return (
    <Tabs
      items={items}
      activeItem={current}
      onTabClick={(key) => {
        setCurrent(key);
      }}
    />
  );
};

export default TabsContainer;
