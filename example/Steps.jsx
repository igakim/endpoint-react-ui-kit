import React, { useState } from 'react';

import {
  Container, Steps, User, Calendar, Lock, Key,
} from '../src';

const steps = [
  { label: 'Step One', key: 1, icon: User },
  { label: 'Step Two', key: 2, icon: Calendar },
  { label: 'Step Three', key: 3, icon: Key },
  { label: 'Step Four', key: 4, icon: User },
];

const StepsContainer = () => {
  const [step, setStep] = useState(1);

  return (
    <Container>
      <Container.Row spacing={2}>
        <Container.Item xxs={12}>
          <Steps
            activeKey={step}
            steps={steps}
            onStepClick={(key) => {
              setStep(key);
            }}
          />
        </Container.Item>
      </Container.Row>
    </Container>
  );
};

export default StepsContainer;
