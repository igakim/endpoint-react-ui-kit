import React, { useState, useEffect } from 'react';
import cn from 'classnames';
// import { useCombobox } from 'downshift';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import './Autocomplete.scss';
import {
  equals, find, identity, propEq,
} from 'ramda';
import { ChevronDown, Close } from '../icons';

/**
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} props.size
 * @param {('outlined'|'filled')} props.variant
 * @param {('primary'|'secondary')} props.color
 * @param {string|null} props.tipText
 * @param {string|null} props.state
 * @param {boolean} props.showTip
 * @param {boolean} props.disabled
 * @param {any} props.defaultSelected
 * @param {string} props.className
 * @param {array} props.options
 * @param {string} props.id
*/
const Autocomplete = ({
  size = 'medium',
  variant = 'outlined',
  color = 'primary',
  tipText = null,
  state = null,
  showTip = false,
  disabled = false,
  className = '',
  defaultSelected = null,
  options = [],
  id = '',
  onChange = identity,
  ...rest
}) => {
  const [inputItems, setInputItems] = useState([]);
  const [prevOptions, setPrevOptions] = useState([]);
  const [selectedOption, setSelected] = useState(null);

  if (!equals(options, prevOptions)) {
    setPrevOptions(options);
    setInputItems(options);
    setSelected(null);
  }

  const activeItem = find(propEq('id', defaultSelected), options);

  if (activeItem && !equals(activeItem, selectedOption) && !selectedOption) {
    setSelected(activeItem);
  }

  const {
    getTagProps,
    getRootProps,
    getInputProps,
    getClearProps,
    getPopupIndicatorProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    popupOpen,
    focusedTag,
  } = useAutocomplete({
    id,
    options: inputItems,
    value: selectedOption,
    getOptionSelected: (opt, val) => (val ? opt.id === val.id : val),
    getOptionLabel: (value) => (value ? value.label : ''),
    onChange: (ev, value) => {
      setSelected(value);
      onChange(value);
    },
  });

  const wrapperClasses = cn(
    'autocomplete-wrapper',
    'autocomplete',
    state && `autocomplete-wrapper-${state}`,
    size,
    variant,
  );

  const containerWrapper = cn(
    'autocomplete-container',
  );

  const inputClasses = cn(
    'input-base',
    {
      [`input-${color} input-filled`]: variant === 'filled',
      [`input-outline-${color} input-outline`]: variant === 'outlined',
    },
    className,
  );

  const appendIconClasses = cn(
    'append-icon',
    size,
  );

  const tipClasses = cn(
    'input-tip',
    {
      show: (state === 'error') || showTip,
    },
  );

  const dropdownWrapperClasses = cn(
    'autocomplete-dropdown-wrapper',
  );

  const dropdownNoOptionsClasses = cn(
    'autocomplete-dropdown-no-option',
  );

  const getDropdownClasses = (show) => cn(
    'autocomplete-dropdown',
    show && 'show',
  );

  const getDropdownOptionClasses = (shouldBeActive) => cn(
    'autocomplete-dropdown-option',
    shouldBeActive && 'active',
  );

  return (
    <div className={wrapperClasses}>
      <div className={containerWrapper} {...getRootProps()}>
        <input
          type="text"
          className={inputClasses}
          {...rest}
          {...getInputProps()}
          disabled={disabled}
        />
        {
          popupOpen
            ? (
              <div className={appendIconClasses} {...getClearProps()}>
                <Close />
              </div>
            ) : (
              <div className={appendIconClasses} {...getPopupIndicatorProps()}>
                <ChevronDown />
              </div>
            )
        }
        <div className={getDropdownClasses(popupOpen)}>
          {
            popupOpen
              ? (
                <div className={dropdownWrapperClasses} {...getListboxProps()}>
                  {
                    groupedOptions.length > 0
                      ? (
                        groupedOptions.map((opt, i) => (
                          <div
                            className={getDropdownOptionClasses(focusedTag === i)}
                            key={opt.id}
                            {...getOptionProps({ option: opt, index: i })}
                          >
                            {opt.label}
                          </div>
                        ))
                      ) : (
                        <div className={dropdownNoOptionsClasses}>No Option</div>
                      )
                  }
                </div>
              ) : null
          }
        </div>
      </div>
      <div className={tipClasses}>
        {tipText}
      </div>
    </div>
  );
};

export default Autocomplete;
