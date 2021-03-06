import React, { useState } from 'react';

import {
  Container, Steps, User, Calendar, Lock, Key,
} from '../src';

const steps = [
  { label: 'Step One', key: 'a', icon: User },
  { label: 'Step Two', key: 'b', icon: Calendar },
  { label: 'Step Three', key: 'c', icon: Key },
  { label: 'Step Four', key: 'd', icon: User },
];

const stepsWithoutIcons = [
  { label: 'Step One', key: 'a' },
  { label: 'Step Two', key: 'b' },
  { label: 'Step Three', key: 'c' },
  { label: 'Step Four', key: 'd' },
];

const StepsContainer = () => {
  const [step, setStep] = useState('a');

  return (
    <Container>
      <Container.Row spacing={2}>
        <Container.Item xxs={12}>
          <Steps
            activeKey={step}
            steps={stepsWithoutIcons}
            onStepClick={(key) => {
              setStep(key);
            }}
          />

          <Steps
            activeKey={step}
            steps={steps}
            onStepClick={(key) => {
              setStep(key);
            }}
            variant="icons"
          />
        </Container.Item>
      </Container.Row>
    </Container>
  );
};

export default StepsContainer;
