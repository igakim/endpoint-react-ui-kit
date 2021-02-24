import React, { useState } from 'react';
import cn from 'classnames';
import { useCombobox } from 'downshift';
import './Autocomplete.scss';
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
 * @param {string} props.className
 * @param {array} props.options
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
  options = [],
  ...rest
}) => {
  const [inputItems, setInputItems] = useState(options);

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    openMenu,
  } = useCombobox({
    items: inputItems,
    itemToString: (value) => (value ? value.label : ''),
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        options.filter(
          (item) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      );
    },
    onSelectedItemChange: (value) => console.log(value.selectedItem),
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
      <div className={containerWrapper} {...getComboboxProps()}>
        <input
          type="text"
          className={inputClasses}
          {...rest}
          {...getInputProps({
            onFocus: () => {
              if (!isOpen) {
                openMenu();
              }
            },
          })}
          disabled={disabled}
        />
        {
          isOpen
            ? (
              <div className={appendIconClasses} onClick={() => {
                selectItem(null);
              }}>
                <Close />
              </div>
            ) : (
              <div className={appendIconClasses} {...getToggleButtonProps()}>
                <ChevronDown />
              </div>
            )
        }
        <div className={getDropdownClasses(isOpen)} {...getMenuProps()}>
          {
            isOpen
              ? (
                <div className={dropdownWrapperClasses}>
                  {
                    inputItems.length > 0
                      ? (
                        inputItems.map((opt, i) => (
                          <div
                            className={getDropdownOptionClasses(highlightedIndex === i)}
                            key={opt.id}
                            {...getItemProps({ item: opt.label, index: i })}
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
