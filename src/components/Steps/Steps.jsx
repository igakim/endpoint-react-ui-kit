import React, { useState } from 'react';
import cn from 'classnames';
import { findIndex, prop, propEq } from 'ramda';
import './Steps.scss';
import Text from '../Text';

import { User, ArrowRight } from '../icons';

const getIndexOf = (steps, key) => {

};

/**
 * Callback onStepClick
 *
 * @callback onStepClick
 * @param {key} key
 */
/**
 *
 * @param {Object} props
 * @param {(null|string|number)} props.activeKey
 * @param {Array.<{icon: ReactNode, label: string, key: (null|number|string)}>} props.steps
 * @param {onStepClick} props.onStepClick
 * @returns {JSX.Element}
 * @constructor
 */
const Steps = ({
  activeKey = null,
  steps = [],
  onStepClick = () => {},
}) => {
  const stepsClasses = cn(
    'steps',
  );

  const stepsWrapperClasses = cn(
    'steps-wrapper',
  );

  const getItemClasses = (active) => cn(
    'steps-item',
    active && 'active',
  );

  const stepsContentClasses = cn(
    'steps-content',
  );

  const stepsIconClasses = cn(
    'steps-icon',
  );

  const stepsLabelClasses = cn(
    'steps-label',
  );

  const stepsNextIconClasses = cn(
    'steps-next-icon',
  );

  const handleStepClick = (key) => (e) => {
    e.preventDefault();
    onStepClick(key);
  };

  return (
    <div className={stepsClasses}>
      <div className={stepsWrapperClasses}>
        {
          steps.map(({ icon: Icon, label, key }, i) => (
            <div
              className={
                getItemClasses(
                  findIndex(propEq('key', key))(steps) <= findIndex(propEq('key', activeKey))(steps),
                )
              }
              key={key}
              onClick={handleStepClick(key)}
            >
              <div className={stepsContentClasses}>
                <div className={stepsIconClasses}>
                  <Icon />
                </div>
                <div className={stepsLabelClasses}>
                  {i + 1}. {label}
                </div>
                {
                  !(findIndex(propEq('key', key))(steps) >= steps.length - 1)
                    ? (
                      <div className={stepsNextIconClasses}>
                        <ArrowRight />
                      </div>
                    ) : null
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Steps;
