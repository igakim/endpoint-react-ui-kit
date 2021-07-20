import React from 'react';

import { DateInput, Container, Text } from '../src';

const DateInputs = () => (
    <Container>
      <Container.Row>
        <Container.Item xss={12}>
          <Text variant="h1">DATE INPUTS</Text>
        </Container.Item>
      </Container.Row>
      <Container.Row spacing={2}>
        <Container.Item xss={12} md={4}>
          <DateInput size="small" variant="outlined" color="primary" value="1990-09-30" />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="medium" variant="outlined" color="primary" />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="large" variant="outlined" color="primary" />
        </Container.Item>
      </Container.Row>
      <Container.Row spacing={2}>
        <Container.Item xss={12} md={4}>
          <DateInput size="small" variant="outlined" color="secondary" />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="medium" variant="outlined" color="secondary" />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="large" variant="outlined" color="secondary" />
        </Container.Item>
      </Container.Row>
      <Container.Row spacing={2}>
        <Container.Item xss={12} md={4}>
          <DateInput size="small" variant="filled" color="primary" />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="medium" variant="filled" color="primary" />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="large" variant="filled" color="primary" />
        </Container.Item>
      </Container.Row>
      <Container.Row spacing={2}>
        <Container.Item xss={12} md={4}>
          <DateInput size="small" variant="filled" color="secondary" />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="medium" variant="filled" color="secondary" />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="large" variant="filled" color="secondary" />
        </Container.Item>
      </Container.Row>
      <Container.Row spacing={2}>
        <Container.Item xss={12} md={4}>
          <DateInput size="small" variant="filled" color="secondary" state="error" tipText="ERROR" />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="medium" variant="filled" color="secondary" state="success" showTip tipText="SUCCESS"/>
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="large" variant="filled" color="secondary" showTip tipText="tip" />
        </Container.Item>
      </Container.Row>
      <Container.Row spacing={2}>
        <Container.Item xss={12} md={4}>
          <DateInput size="small" variant="outlined" color="secondary" state="error" tipText="ERROR" />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="medium" variant="outlined" color="secondary" state="success" showTip tipText="SUCCESS"/>
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="large" variant="outlined" color="secondary" showTip tipText="tip" />
        </Container.Item>
      </Container.Row>
      <Container.Row spacing={2}>
        <Container.Item xss={12} md={4}>
          <DateInput size="small" variant="outlined" color="secondary" withTime onChange={(date) => console.log(date)} />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="medium" variant="outlined" color="secondary" withTime />
        </Container.Item>
        <Container.Item xss={12} md={4}>
          <DateInput size="large" variant="outlined" color="secondary" withTime />
        </Container.Item>
      </Container.Row>
    </Container>
);

export default DateInputs;
