import React, { useState } from 'react';

import { SwitchInput, Container } from '../src';

const SwitchContainer = () => {
  const [val, setVal] = useState(false);
  const handleSwitch = (e, value) => {
    console.log(e.target.checked, e.target);
    setVal(value);
  };
  return (
    <Container>
      <Container.Row>
        <Container.Item>
          <SwitchInput size="small" checked={val} onChange={handleSwitch} />
          <SwitchInput checked={val} onChange={handleSwitch} />
          <SwitchInput size="large" checked={val} onChange={handleSwitch} />
        </Container.Item>
      </Container.Row>
    </Container>
  );
};

export default SwitchContainer;
