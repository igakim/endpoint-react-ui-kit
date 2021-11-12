import React, { useState } from 'react';
import {
  Send, Tabs, IconTabs, Mail, Horn,
} from '../src';

const TabsContainer = () => {
  const [current, setCurrent] = useState('tab1');
  const items = [
    { key: 'tab1', label: 'TAB No. 1' },
    { key: 'tab2', label: 'TAB No. 2' },
    { key: 'tab3', label: 'TAB No. 3' },
    { key: 'tab4', label: 'TAB No. 4' },
    { key: 'tab5', label: 'TAB No. 5' },
  ];

  const items2 = [
    { key: 'tab1', label: 'TAB No. 1', icon: <Send /> },
    { key: 'tab2', label: 'TAB No. 2', icon: <Mail /> },
    { key: 'tab3', label: 'TAB No. 3', icon: <Horn /> },
    { key: 'tab4', label: 'TAB No. 4', icon: <Mail /> },
    { key: 'tab5', label: 'TAB No. 5', icon: <Mail /> },
  ];

  return (
    <>
      <Tabs
        items={items}
        activeItem={current}
        onTabClick={(key) => {
          setCurrent(key);
        }}
      />
      <IconTabs
        items={items2}
        activeItem={current}
        onTabClick={(key) => {
          setCurrent(key);
        }}
      />
    </>
  );
};

export default TabsContainer;
