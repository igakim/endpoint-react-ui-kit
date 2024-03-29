import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import dayjs from 'dayjs';
import NumberFormat from 'react-number-format';
import { Calendar } from '../icons';
import TextInput from '../TextInput';

import './DateInput.scss';

/**
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} props.size
 * @param {('outlined'|'filled')} props.variant
 * @param {('primary'|'secondary')} props.color
 * @param {string|null} props.tipText
 * @param {('error'|'success'|null)} props.state
 * @param {boolean} props.showTip
 * @param {boolean} props.disabled
 * @param {boolean} props.withTime
 * @param {boolean} props.allowEmptyFormatting
 * @param {string} props.className
 * @param {Object} props.appendButtonProps
 * @param {function} props.onChange
 */
const DateInput = ({
  size = 'medium',
  variant = 'outlined',
  color = 'primary',
  tipText = null,
  state = null,
  showTip = false,
  disabled = false,
  appendButtonProps = {},
  withTime = false,
  allowEmptyFormatting = true,
  className = '',
  onChange = () => {},
  value = '',
  onBlur,
  ...rest
}) => {
  const [date, setDate] = useState(dayjs(value));

  useEffect(() => {
    setDate(dayjs(value));
  }, [value]);

  const containerClasses = cn(
    'date-input',
    size,
    state && `date-input-${state}`,
  );

  const dateInputWrapperClasses = cn(
    'date-input-wrapper',
  );

  const textInputClasses = cn(
    'input-base',
    {
      [`input-${color} input-filled`]: variant === 'filled',
      [`input-outline-${color} input-outline`]: variant === 'outlined',
    },
    className,
  );

  const tipClasses = cn(
    'input-tip',
    {
      show: (state === 'error') || showTip,
    },
  );

  const appendCalendarClasses = cn(
    'show',
    'append-button',
    'input-calendar',
  );

  const calendarInputClasses = cn(
    'date-input-calendar',
  );

  const handleSetValue = (e) => {
    onBlur(e);
    const newDate = dayjs(e.target.value, withTime ? 'DD.MM.YYYY (HH:mm)' : 'DD.MM.YYYY');
    if (newDate.isValid()) {
      setDate(newDate);
      onChange(newDate);
      return;
    }
    onChange(null);
    setDate({});
  };

  return (
    <div className={containerClasses}>
      <div className={dateInputWrapperClasses}>
        <NumberFormat
          customInput={TextInput}
          format={withTime ? '##.##.#### (##:##)' : '##.##.####'}
          mask="_"
          allowEmptyFormatting={allowEmptyFormatting}
          value={
            dayjs(
              date,
              withTime ? 'DD.MM.YYYY (HH:mm)' : 'DD.MM.YYYY',
            ).format(
              withTime ? 'DD.MM.YYYY (HH:mm)' : 'DD.MM.YYYY',
            )
          }
          onBlur={handleSetValue}
          disabled={disabled}
          className={textInputClasses}
          appendButtonIcon={<Calendar />}
          {...rest}
        />
        <div className={appendCalendarClasses}>
          <input
            type={withTime ? 'datetime-local' : 'date'}
            {...appendButtonProps}
            disabled={disabled}
            className={calendarInputClasses}
            value={
              dayjs(date).isValid()
                ? dayjs(date).format(withTime ? 'YYYY-MM-DD[T]HH:mm' : 'YYYY-MM-DD')
                : ''
            }
            onChange={(e) => {
              const newDate = dayjs(e.target.value);
              if (newDate.isValid()) {
                setDate(newDate);
                onChange(newDate);
              }
            }}
            tabIndex={-1}
          />
        </div>
      </div>
      <div className={tipClasses}>
        {tipText}
      </div>
    </div>
  );
};

export default DateInput;
