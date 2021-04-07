import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import {
  Container, Button, Dialog, AlertDialog, Text, Autocomplete,
} from '../src';

const Dialogs = () => {
  const [open, setOpen] = useState(false);
  const [openWarning, setWarnignOpen] = useState(false);

  return (
    <Container>
      <Container.Row>
        <Container.Item>
          <Button
            onClick={() => setOpen(true)}
          >Dialog open</Button>
          <Dialog
            title="TEST"
            open={open}
            onClose={() => setOpen(false)}
            renderBody={() => (
              <Form
                onSubmit={(values) => console.log(values)}
              >
                {({ handleSubmit: submit }) => (
                  <form onSubmit={submit} id="testing">
                    <Field
                      name="test"
                      component={Autocomplete}
                      options={[
                        {
                          label: 'fadsa',
                          id: 1,
                        },
                        {
                          label: 'fadsa',
                          id: 12,
                        },
                        {
                          label: 'fadsa',
                          id: 2,
                        },
                        {
                          label: 'fadsa',
                          id: 3,
                        },
                        {
                          label: 'fadsa',
                          id: 4,
                        },
                        {
                          label: 'fadsa',
                          id: 5,
                        },
                        {
                          label: 'fadsa',
                          id: 6,
                        },
                        {
                          label: 'fadsa',
                          id: 7,
                        },
                      ]}
                    />
                    Lorem ipsum dolor sit amet, co
                  </form>
                )}
              </Form>
            )}
            renderFooter={() => (
              <button type="submit" onClick={() => {
                document.getElementById('testing')
                  .dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
              }}>click</button>
            )}
          />
        </Container.Item>
        <Container.Item>
          <Button
            onClick={() => setWarnignOpen(true)}
          >Dialog open</Button>
          <AlertDialog
            title="Внимание! После этого действия нельзя будет вернуться назад!"
            open={openWarning}
            onClose={() => setWarnignOpen(false)}
            renderBody={() => (
              <Text variant="body2" color="secondary">Сохраняя протокол Вы подтверждаете что он заполнен верно. В случае несоответствия данных, ответственность лежит на должностном лице составившем протокол.</Text>
            )}
            renderFooter={() => (
              <div>
                <Button
                  variant="contrasted"
                  color="plain"
                  size="large"
                  style={{ marginRight: 30 }}
                  onClick={() => setWarnignOpen(false)}
                >
                  Отменить
                </Button>
                <Button
                  variant="filled"
                  color="primary"
                  size="large"
                  onClick={() => setWarnignOpen(false)}
                >
                  Подтвердить
                </Button>
              </div>
            )}
            type="warning"
          />
        </Container.Item>
      </Container.Row>
    </Container>
  );
};

export default Dialogs;
