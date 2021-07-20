import React from 'react';
import { Form, Field } from 'react-final-form';
import { identity } from 'ramda';
import {
  Container, Text, Autocomplete, AutocompleteMultiple, DateInput,
} from '../src';

const DateInputAdapter = ({ input, meta, ...rest }) => {
  const isError = meta.touched && meta.error;

  return (
    <DateInput
      {...rest}
      state={isError ? 'error' : null}
      tipText={meta.error}
      {...input}
    />
  );
};

const MultipleAdapter = ({ input, meta, ...rest }) => (
  <AutocompleteMultiple
    size="small"
    color="secondary"
    variant="outlined"
    placeholder="Multiple"
    selectedItem={1}
    onChange={input.onChange}
    id="new-test"
    state={meta.error ? 'error' : null}
    tipText={meta.error}
    inputValue={input.value}
    options={[
      { label: 'The Shawshank Redemption', year: 1994, id: 1 },
      { label: 'The Godfather', year: 1972, id: 2 },
      { label: 'The Godfather: Part II', year: 1974, id: 3 },
      { label: 'The Dark Knight', year: 2008, id: 4 },
      { label: '12 Angry Men', year: 1957, id: 5 },
      { label: "Schindler's List", year: 1993, id: 6 },
      { label: 'Pulp Fiction', year: 1994, id: 7 },
      { label: 'The Lord of the Rings: The Return of the King', year: 2003, id: 8 },
      { label: 'The Good, the Bad and the Ugly', year: 1966, id: 9 },
      { label: 'Fight Club', year: 1999, id: 10 },
      { label: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, id: 11 },
      { label: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980, id: 12 },
      { label: 'Forrest Gump', year: 1994, id: 13 },
      { label: 'Inception', year: 2010, id: 14 },
      { label: 'The Lord of the Rings: The Two Towers', year: 2002, id: 15 },
      { label: "One Flew Over the Cuckoo's Nest", year: 1975, id: 16 },
      { label: 'Goodfellas', year: 1990, id: 17 },
    ]}
    {...rest}
  />
);

const AutocompleteAdapter = ({
  input, meta, onChange = identity, ...rest
}) => {
  const isError = meta.touched && meta.error;

  return (
    <Autocomplete
      size="large"
      variant="outlined"
      color="secondary"
      tipText={meta.error}
      state={isError ? 'error' : null}
      inputValue={input.value}
      onChange={(value) => {
        if (value) {
          input.onChange(value.id);
          onChange(value.id);
          return;
        }
        input.onChange(undefined);
        onChange(undefined);
      }}
      {...rest}
    />
  );
};

const Autocompletes = () => (
  <Container>
    <Container.Row>
      <Container.Item xxs={12}>
        <Text variant="h1">AUTOCOMPLETES</Text>
      </Container.Item>
    </Container.Row>
    <Container.Row spacing={2}>
      <Container.Item xxs={12}>
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={{
            test: {
              testAuto: 1,
              testAuto2: 1,
            },
          }}
        >
          {({ handleSubmit: submit, form, values }) => (
            <form onSubmit={submit}>
              <Field
                name="test.testAuto"
                component={AutocompleteAdapter}
                options={[
                  { label: 'test 1', id: 1 },
                  { label: 'test 5', id: 5 },
                  { label: 'test 4', id: 4 },
                  { label: 'test 3', id: 3 },
                  { label: 'test 2', id: 2 },
                ]}
              />
              <Field
                name="test.testAuto2"
                component={AutocompleteAdapter}
                options={[
                  { label: 'test 1', id: 1 },
                  { label: 'test 5', id: 5 },
                  { label: 'test 4', id: 4 },
                  { label: 'test 3', id: 3 },
                  { label: 'test 2', id: 2 },
                ]}
              />
              <button type="button" onClick={() => {
                form.change('test.testAuto', 4);
                form.change('test.testAuto2', 3);
              }}>set value</button>

              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        </Form>
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
      <Container.Item xxs={12} md={4}>
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit: submit, values, form }) => (
            <form onSubmit={submit}>
              <div style={{ display: 'flex' }}>
                <div>
                  <Field
                    name="date"
                    component={DateInputAdapter}
                  />
                </div>
                <div>
                  <Field
                    name="multiple"
                    component={MultipleAdapter}
                    size="large"
                  />
                </div>
                <div>
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
                  <button onClick={() => {
                    form.reset();
                  }}>RESET</button>
                </div>
              </div>
              <pre>
                {JSON.stringify(values, 0, 2)}
              </pre>
            </form>
          )}
        </Form>
      </Container.Item>
    </Container.Row>
  </Container>
);

export default Autocompletes;
