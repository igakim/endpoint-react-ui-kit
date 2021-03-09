import React from 'react';
import {
  AlertCircle, Button, IconButton, Lock, Text, User, Container,
} from '../src';

const Buttons = () => (
    <Container>
      <Container.Row>
        <Container.Item xxs={12}>
          <Text component="h1" color="main" variant="h1">Buttons</Text>
        </Container.Item>
        <Container.Item xxs={12}>
          <div>
            <Button
              color="primary"
              size="extra-small"
              variant="filled"
              className="test test2"
            >
              Button
            </Button>
            <Button color="secondary" size="extra-small" variant="filled">Button</Button>
            <Button color="danger" size="extra-small" variant="filled">Button</Button>
            <Button color="info" size="extra-small" variant="filled">Button</Button>
            <Button color="success" size="extra-small" variant="filled">Button</Button>
            <Button color="plain" size="extra-small" variant="filled">Button</Button>
            <Button color="primary" size="extra-small" variant="filled" disabled>Button</Button>
            <Button color="warning" size="extra-small" variant="filled" disabled>Button</Button>
          </div>
          <div>
            <Button color="primary" size="extra-small" variant="outlined">Button</Button>
            <Button color="secondary" size="extra-small" variant="outlined">Button</Button>
            <Button color="danger" size="extra-small" variant="outlined">Button</Button>
            <Button color="info" size="extra-small" variant="outlined">Button</Button>
            <Button color="success" size="extra-small" variant="outlined">Button</Button>
            <Button color="plain" size="extra-small" variant="outlined">Button</Button>
            <Button color="primary" size="extra-small" variant="outlined" disabled>Button</Button>
          </div>
          <div>
            <Button color="primary" size="extra-small" variant="contrasted">Button</Button>
            <Button color="secondary" size="extra-small" variant="contrasted">Button</Button>
            <Button color="danger" size="extra-small" variant="contrasted">Button</Button>
            <Button color="info" size="extra-small" variant="contrasted">Button</Button>
            <Button color="success" size="extra-small" variant="contrasted">Button</Button>
            <Button color="muted" size="extra-small" variant="contrasted">Button</Button>
            <Button color="muted" size="extra-small" variant="contrasted" disabled>Button</Button>
          </div>
          <div>
            <Button color="primary" size="extra-small" variant="text">Button</Button>
            <Button color="secondary" size="extra-small" variant="text">Button</Button>
            <Button color="danger" size="extra-small" variant="text">Button</Button>
            <Button color="info" size="extra-small" variant="text">Button</Button>
            <Button color="success" size="extra-small" variant="text">Button</Button>
            <Button color="plain" size="extra-small" variant="text">Button</Button>
            <Button color="plain" size="extra-small" variant="text" disabled>Button</Button>
          </div>
          <div>
            <Button color="primary" size="extra-small" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />}>Button</Button>
            <Button color="secondary" size="small" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />}>Button</Button>
            <Button color="danger" size="medium" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />}>Button</Button>
            <Button color="info" size="large" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />}>Button</Button>
          </div>
          <div>
            <Button color="primary" size="extra-small" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />} fullWidth>Button</Button>
            <Button color="secondary" variant="outlined" size="small" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />} fullWidth>Button</Button>
            <Button color="danger" size="medium" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />} fullWidth>Button</Button>
            <Button color="info" size="large" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />} fullWidth>Button</Button>
          </div>
          <div>
            <Text component="h1" color="main" variant="h1">ICON BUTTONS</Text>
          </div>
          <div>
            <IconButton icon={<AlertCircle />} color="primary" size="small" />
            <IconButton icon={<AlertCircle />} color="secondary" size="small" />
            <IconButton icon={<Lock />} color="danger" size="small" />
            <IconButton icon={<User />} color="info" size="small" />
            <IconButton icon={<AlertCircle />} color="success" size="small" />
          </div>
          <div>
            <IconButton icon={<AlertCircle />} color="primary" size="small" variant="outlined" />
            <IconButton icon={<AlertCircle />} color="secondary" size="small" variant="outlined" />
            <IconButton icon={<Lock />} color="danger" size="small" variant="outlined" />
            <IconButton icon={<User />} color="info" size="small" variant="outlined" />
            <IconButton icon={<AlertCircle />} color="success" size="small" variant="outlined" />
          </div>
          <div>
            <IconButton icon={<AlertCircle />} color="primary" size="small" variant="contrasted" />
            <IconButton icon={<AlertCircle />} color="secondary" size="small" variant="contrasted" />
            <IconButton icon={<Lock />} color="danger" size="small" variant="contrasted" />
            <IconButton icon={<User />} color="info" size="small" variant="contrasted" />
            <IconButton icon={<AlertCircle />} color="success" size="small" variant="contrasted" />
          </div>
          <div>
            <IconButton icon={<AlertCircle />} color="primary" size="extra-small" />
            <IconButton icon={<Lock />} color="secondary" size="small" />
            <IconButton icon={<User />} color="danger" size="medium" />
            <IconButton icon={<AlertCircle />} color="info" size="large" />
          </div>
          <div>
            <IconButton icon={<AlertCircle />} color="primary" size="extra-small" variant="text" />
            <IconButton icon={<Lock />} color="secondary" size="small" variant="text" />
            <IconButton icon={<User />} color="danger" size="medium" variant="text" />
            <IconButton icon={<AlertCircle />} color="info" size="large" variant="text" />
          </div>
        </Container.Item>
      </Container.Row>
    </Container>
);

export default Buttons;
