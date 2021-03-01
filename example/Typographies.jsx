import React from 'react';
import { Text, Container } from '../src';

const Typographies = () => (
    <Container>
      <Container.Row>
        <Container.Item xxs={12}>
          <Text component="h1" color="main" variant="h1">TYPOGRAPHY</Text>
        </Container.Item>
      </Container.Row>
      <Container.Row>
        <div>
          <Text component="h1" color="main">H1</Text>
          <Text component="h2" color="secondary">H2</Text>
          <Text component="h3" color="alter">H3</Text>
          <Text component="h4" color="contrast" style={{ background: 'black' }}>H4</Text>
          <Text component="h5">H5</Text>
          <Text component="h6">H6</Text>
        </div>
        <div>
          <Text component="span" variant="body1">inline </Text>
          <Text component="span" variant="body2">inline </Text>
          <Text component="span" variant="body3">inline </Text>
          <Text component="span" variant="h1">inline </Text>
        </div>
        <div>
          <Text variant="body1">body1</Text>
          <Text variant="body2">body2</Text>
          <Text variant="body3">body3</Text>
          <Text variant="h1" color="success">h1</Text>
          <Text variant="h2">h2</Text>
          <Text variant="h3">h3</Text>
          <Text variant="h4">h4</Text>
          <Text variant="h5">h5</Text>
          <Text variant="h6">h6</Text>
          <Text variant="subtitle1" color="warning">subtitle1</Text>
          <Text variant="subtitle2" color="success">subtitle2</Text>
          <Text variant="subtitle3">subtitle3</Text>
        </div>
      </Container.Row>
    </Container>
);

export default Typographies;
