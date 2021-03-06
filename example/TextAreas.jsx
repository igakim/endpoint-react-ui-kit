import React from 'react';
import { TextAreaInput, Container } from '../src';

const TextAreas = () => (
    <Container>
      <Container.Row>
        <Container.Item xxs={4}>
          <TextAreaInput size="small" color="secondary" variant="filled" disabled />
        </Container.Item>
        <Container.Item xxs={4}>
          <TextAreaInput size="medium" color="secondary" />
        </Container.Item>
        <Container.Item xxs={4}>
          <TextAreaInput size="large" color="primary" />
        </Container.Item>
        <Container.Item xxs={4}>
          <TextAreaInput state="error" tipText="eEROROROR" size="small" color="secondary" variant="filled" disabled />
        </Container.Item>
        <Container.Item xxs={4}>
          <TextAreaInput state="success" size="medium" color="secondary" tipText="SUCCESS" showTip />
        </Container.Item>
        <Container.Item xxs={4}>
          <TextAreaInput size="large" color="primary" state="info" showTip tipText="INFO" />
        </Container.Item>
      </Container.Row>
    </Container>
);

export default TextAreas;
