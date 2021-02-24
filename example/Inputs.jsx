import React from 'react';
import {
  Container, InputLabel, Lock, TextInput, User, Text,
} from '../src';

const Inputs = () => (
    <Container>
      <Container.Row>
        <Container.Item xxs={12}>
          <Text variant="h1">INPUTS</Text>
        </Container.Item>
      </Container.Row>
      <Container.Row>
        <Container.Item>
          <div>
            <Container>
              <Container.Row spacing={2}>
                <Container.Item xs={6}>
                  <TextInput size="medium" color="primary" placeholder="outlined primary" tipText="Required" appendButtonIcon={<User />} />
                </Container.Item>
                <Container.Item xs={6}>
                  <TextInput size="medium" color="secondary" placeholder="outlined secondary" tipText="Required" />
                </Container.Item>
              </Container.Row>

              <Container.Row spacing={2}>
                <Container.Item xs={6}>
                  <TextInput size="medium" color="primary" variant="filled" placeholder="filled primary" tipText="Required" />
                </Container.Item>
                <Container.Item xs={6}>
                  <TextInput size="medium" color="secondary" variant="filled" placeholder="filled secondary" tipText="Required" appendButtonIcon={<User />} />
                </Container.Item>
              </Container.Row>
              <Container.Row spacing={2}>
                <Container.Item xs={6}>
                  <TextInput size="medium" color="primary" variant="outlined" placeholder="disabled primary outlined" disabled appendButtonIcon={<User />} />
                </Container.Item>
                <Container.Item xs={6}>
                  <TextInput size="medium" color="secondary" variant="filled" placeholder="disabled secondary filled" tipText="Required" disabled />
                </Container.Item>
              </Container.Row>
              <Container.Row spacing={2}>
                <Container.Item xs={4}>
                  <TextInput size="small" color="primary" variant="outlined" placeholder="small" />
                </Container.Item>
                <Container.Item xs={4}>
                  <TextInput size="medium" color="primary" variant="outlined" placeholder="medium" />
                </Container.Item>
                <Container.Item xs={4}>
                  <TextInput size="large" color="primary" variant="outlined" placeholder="large" />
                </Container.Item>
              </Container.Row>
              <Container.Row spacing={2}>
                <Container.Item xs={6}>
                  <TextInput size="medium" color="secondary" variant="outlined" placeholder="Error outlined" state="error" tipText="Error" />
                </Container.Item>
                <Container.Item xs={6}>
                  <TextInput size="medium" color="primary" variant="filled" placeholder="Error filled" state="error" tipText="Error" />
                </Container.Item>
              </Container.Row>
              <Container.Row spacing={2}>
                <Container.Item xs={6}>
                  <TextInput size="medium" color="secondary" variant="outlined" placeholder="Success outlined" state="success" tipText="Success" showTip appendButtonIcon={<User />} />
                </Container.Item>
                <Container.Item xs={6}>
                  <TextInput size="medium" color="primary" variant="filled" placeholder="Success filled" state="success" tipText="Success" showTip />
                </Container.Item>
              </Container.Row>
              <Container.Row spacing={2}>
                <Container.Item xs={4}>
                  <TextInput size="small" color="secondary" variant="outlined" placeholder="with prepend icon" prependIcon={<User />} />
                </Container.Item>
                <Container.Item xs={4}>
                  <TextInput size="medium" color="secondary" variant="outlined" placeholder="with prepend icon" prependIcon={<User />} />
                </Container.Item>
                <Container.Item xs={4}>
                  <TextInput
                    size="large"
                    color="secondary"
                    variant="outlined"
                    placeholder="with prepend icon"
                    prependIcon={<Lock />}
                    state="error"
                    tipText="Error"
                    borderedPrepend
                    appendButtonIcon={<User />}
                    appendButtonProps={{
                      onClick: () => console.log('test'),
                    }}
                  />
                </Container.Item>
              </Container.Row>
              <Container.Row spacing={2}>
                <Container.Item xs={4}>
                  <TextInput
                    size="small"
                    color="primary"
                    variant="filled"
                    placeholder="with prepend icon"
                    prependIcon={<User />}
                    borderedPrepend
                    appendButtonIcon={<User />}
                    appendButtonProps={{
                      onClick: () => console.log('test'),
                    }}
                  />
                </Container.Item>
                <Container.Item xs={4}>
                  <TextInput
                    size="medium"
                    color="primary"
                    variant="filled"
                    placeholder="with prepend icon"
                    prependIcon={<User />}
                    appendButtonIcon={<User />}
                    appendButtonProps={{
                      onClick: () => console.log('test'),
                    }}
                  />
                </Container.Item>
                <Container.Item xs={4}>
                  <TextInput
                    size="large"
                    color="primary"
                    variant="filled"
                    placeholder="with prepend icon"
                    prependIcon={<Lock />}
                    appendButtonIcon={<User />}
                    appendButtonProps={{
                      onClick: () => console.log('test'),
                    }}
                  />
                </Container.Item>
              </Container.Row>
            </Container>
          </div>
          <div>
            <Container>
              <Container.Row align="center" spacing={2}>
                <Container.Item xs={12} md={5} className="pb-md-2 pb-xs-0">
                  <InputLabel htmlFor="username" size="small">Username</InputLabel>
                </Container.Item>
                <Container.Item xs={12} md={7} className="pt-md-2 pt-xs-0">
                  <TextInput type="text" size="large" color="primary" placeholder="with label" tipText="Required" id="username" variant="filled" />
                </Container.Item>
              </Container.Row>
              <Container.Row align="center" spacing={2}>
                <Container.Item xs={12} md={5} className="pb-md-2 pb-xs-0">
                  <InputLabel htmlFor="username" size="small">Password</InputLabel>
                </Container.Item>
                <Container.Item xs={12} md={7} className="pt-md-2 pt-xs-0">
                  <TextInput type="password" size="large" color="primary" placeholder="with label" id="username" variant="filled" />
                </Container.Item>
              </Container.Row>
            </Container>
          </div>
        </Container.Item>
      </Container.Row>
    </Container>
);

export default Inputs;
