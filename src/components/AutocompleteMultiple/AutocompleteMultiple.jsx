import React, { useState, useEffect } from 'react';
import cn from 'classnames';
// import { useCombobox } from 'downshift';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import './AutocompleteMultiple.scss';
import {
  equals, filter, find, identity, includes, isEmpty, propEq, splitAt,
} from 'ramda';
import { ChevronDown, Close } from '../icons';
import Tag from '../Tag';
import CheckboxInput from '../CheckboxInput';

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
 * @param {any} props.inputValue
 * @param {string} props.className
 * @param {array} props.options
 * @param {string} props.id
*/
const AutocompleteMultiple = ({
  size = 'medium',
  variant = 'outlined',
  color = 'primary',
  tipText = null,
  state = null,
  showTip = false,
  disabled = false,
  className = '',
  inputValue = [],
  options = [],
  id = '',
  onChange = identity,
  ...rest
}) => {
  const [inputItems, setInputItems] = useState([]);
  const [prevOptions, setPrevOptions] = useState([]);
  const [selectedOption, setSelected] = useState([]);

  if (!equals(options, prevOptions)) {
    setPrevOptions(options);
    setInputItems(options);
    setSelected([]);
  }
  if (isEmpty(inputValue) && !isEmpty(selectedOption)) {
    setSelected([]);
  }
  // const activeItem = find(propEq('id', inputValue), options);
  const activeItems = filter((val) => includes(val.id, inputValue), options);
  if (activeItems && !equals(activeItems, selectedOption) && selectedOption.length === 0) {
    setSelected(activeItems);
  }

  // if (inputValue.length === 0) {
  //   console.log('work');
  //   setSelected([]);
  // }

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
    focused,
    value,
    setAnchorEl,
  } = useAutocomplete({
    id,
    options: inputItems,
    multiple: true,
    value: selectedOption,
    disableCloseOnSelect: true,
    getOptionSelected: (opt, val) => (val ? opt.id === val.id : val),
    getOptionLabel: (value) => (value ? value.label : ''),
    onChange: (ev, value) => {
      setSelected(value);
      onChange(value);
    },
  });

  const wrapperClasses = cn(
    'autocomplete-multiple-wrapper',
    'autocomplete-multiple',
    state && `autocomplete-multiple-wrapper-${state}`,
    size,
    variant,
  );

  const containerWrapper = cn(
    'autocomplete-multiple-container',
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
    'autocomplete-multiple-dropdown-wrapper',
  );

  const dropdownNoOptionsClasses = cn(
    'autocomplete-multiple-dropdown-no-option',
  );

  const getDropdownClasses = (show) => cn(
    'autocomplete-multiple-dropdown',
    show && 'show',
  );

  const getDropdownOptionClasses = (shouldBeActive) => cn(
    'autocomplete-multiple-dropdown-option',
    shouldBeActive && 'active',
  );

  const getInputWrapperClasses = (isFocused) => cn(
    'autocomplete-multiple-input-wrapper',
    isFocused && 'focused',
    'input-base',
    {
      [`input-${color} input-filled`]: variant === 'filled',
      [`input-outline-${color} input-outline`]: variant === 'outlined',
    },
    className,
  );

  const popupIndicatorProps = disabled ? {} : getPopupIndicatorProps();
  const clearProps = disabled ? {} : getClearProps();

  const [renderValues, restValues] = splitAt(2, value);

  return (
    <div className={wrapperClasses}>
      <div className={containerWrapper} {...getRootProps()}>
        <div className={getInputWrapperClasses(focused)} ref={setAnchorEl}>
          {renderValues.map((option, index) => (
            disabled
              ? <Tag {...getTagProps({ index })} onDelete={null} label={option.label} />
              : <Tag {...getTagProps({ index })} label={option.label} />
          ))}
          {
            restValues.length > 0
              ? <Tag label={`+ ${restValues.length}`} />
              : null
          }
          <input
            type="text"
            // className={inputClasses}
            {...rest}
            {...getInputProps()}
            disabled={disabled}
          />
        </div>
        {
          popupOpen
            ? (
              <div className={appendIconClasses} {...clearProps}>
                <Close />
              </div>
            ) : (
              <div className={appendIconClasses} {...popupIndicatorProps}>
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
                            {...getOptionProps({ option: opt, index: i })}
                          >
                            <CheckboxInput label={null} defaultChecked onClick={(e) => e.preventDefault()} />
                            <CheckboxInput label={null} defaultChecked={false} onClick={(e) => e.preventDefault()} />
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

export default AutocompleteMultiple;
