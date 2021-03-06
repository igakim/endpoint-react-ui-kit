import React, { useState } from 'react';

import { SwitchInput, Container } from '../src';

const SwitchContainer = () => {
  const [val, setVal] = useState(false);
  const handleSwitch = (e, value) => {
    setVal(value);
  };
  return (
    <Container>
      <Container.Row>
        <Container.Item>
          <SwitchInput size="small" value={val} onChange={handleSwitch} />
          <SwitchInput value={val} onChange={handleSwitch} />
          <SwitchInput size="large" value={val} onChange={handleSwitch} />
        </Container.Item>
      </Container.Row>
    </Container>
  );
};

export default SwitchContainer;
