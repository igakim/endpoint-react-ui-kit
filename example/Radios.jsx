import React, { useState } from 'react';

import {
  Container, RadioInput,
} from '../src';

const Radios = () => {
  const [step, setStep] = useState(1);

  return (
    <Container>
      <Container.Row spacing={2}>
        <Container.Item xxs={12}>
          <RadioInput label="Male" name="gender" />
          <RadioInput label="Female" name="gender" />
          <RadioInput label="Unknown" name="gender" />
        </Container.Item>
      </Container.Row>
    </Container>
  );
};

export default Radios;
