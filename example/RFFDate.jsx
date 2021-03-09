import React from 'react';
import { Field, Form } from 'react-final-form';
import dayjs from 'dayjs';
import { DateInput } from '../src';

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

const RFFDate = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Form onSubmit={handleSubmit} initialValues={{ violationDate: dayjs().subtract(5, 'minutes').format('YYYY-MM-DDTHH:mm:ss.SSS') }}>
      {({ handleSubmit: submit, values }) => (
        <form onSubmit={submit}>
          <Field
            id="violationDate"
            name="violationDate"
            component={DateInputAdapter}
            size="medium"
            placeholder="test date"
            withTime
            parse={(value) => {
              if (!value) return value;
              return (value.isValid() ? value.format('YYYY-MM-DD') : value);
            }}
          />
          <pre>
            {JSON.stringify(values, 0, 2)}
          </pre>
        </form>
      )}
    </Form>
  );
};

export default RFFDate;
