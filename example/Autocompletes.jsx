import React from 'react';
import { Container, Text, Autocomplete } from '../src';

const Autocompletes = () => (
  <Container>
    <Container.Row>
      <Container.Item xxs={12}>
        <Text variant="h1">AUTOCOMPLETES</Text>
      </Container.Item>
    </Container.Row>
    <Container.Row spacing={2}>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="small" color="primary" variant="filled" />
      </Container.Item>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="medium" color="primary" variant="filled" />
      </Container.Item>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="large" color="primary" variant="filled" />
      </Container.Item>
    </Container.Row>
    <Container.Row spacing={2}>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="small" color="primary" variant="outlined" />
      </Container.Item>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="medium" color="primary" variant="outlined" />
      </Container.Item>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="large" color="primary" variant="outlined" />
      </Container.Item>
    </Container.Row>
    <Container.Row spacing={2}>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="small" color="primary" variant="outlined" tipText="test" showTip />
      </Container.Item>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="medium" color="primary" variant="outlined" tipText="test" showTip />
      </Container.Item>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="large" color="primary" variant="outlined" tipText="test" showTip />
      </Container.Item>
    </Container.Row>
    <Container.Row spacing={2}>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="small" color="primary" variant="outlined" tipText="test" state="error" placeholder="Error state"/>
      </Container.Item>
      <Container.Item xxs={12} md={4}>
        <Autocomplete size="medium" color="primary" variant="outlined" tipText="test" state="success" showTip placeholder="Success state" />
      </Container.Item>
      <Container.Item xxs={12} md={4}>
        <Autocomplete
          size="large"
          color="primary"
          variant="outlined"
          tipText="test"
          state="error"
          placeholder="Error State"
          selectedItem={1}
          id="new-test"
          options={[
            { id: 1, label: 'Opt1' },
            { id: 2, label: 'Opt2' },
            { id: 3, label: 'Opt3' },
            { id: 4, label: 'Opt4' },
          ]}
        />
      </Container.Item>
    </Container.Row>
  </Container>
);

export default Autocompletes;
