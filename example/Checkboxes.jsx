import React, { useState } from 'react';

import {
  Container, CheckboxInput,
} from '../src';

const Checkboxes = () => {
  const [step, setStep] = useState(1);

  return (
    <Container>
      <Container.Row spacing={2}>
      <Container.Item xxs={1}>
        <CheckboxInput label="E-Kali dsaljkdasl dasdjasd sda dsat" />
        <CheckboxInput label="Login" />
        <CheckboxInput label="Password" />
      </Container.Item>
        <Container.Item xxs={1}>
          <CheckboxInput label="E-Kalit" />
          <CheckboxInput label="Login" />
          <CheckboxInput label="Password" />
        </Container.Item>
        <Container.Item xxs={1}>
          <CheckboxInput label="E-Kalit" />
          <CheckboxInput label="Login" />
          <CheckboxInput label="Password" />
        </Container.Item>
      </Container.Row>
    </Container>
  );
};

export default Checkboxes;
