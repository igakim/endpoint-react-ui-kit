import React, { useState } from 'react';
import cn from 'classnames';
import { findIndex, prop, propEq } from 'ramda';
import './Steps.scss';
import Text from '../Text';

import { User, ArrowRight, Check } from '../icons';

const getIndexOf = (steps, key) => findIndex(propEq('key', key))(steps);

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
 * @param {('icons'|'plain')} props.variant
 * @returns {JSX.Element}
 * @constructor
 */
const Steps = ({
  activeKey = null,
  steps = [],
  onStepClick = () => {},
  variant = 'plain',
}) => {
  const stepsClasses = cn(
    `steps-${variant}`,
  );

  const stepsWrapperClasses = cn(
    `steps-${variant}-wrapper`,
  );

  const getItemClasses = (active) => cn(
    `steps-${variant}-item`,
    active && 'active',
  );

  const stepsContentClasses = cn(
    'steps-content',
    `steps-${variant}-content`,
  );

  const stepsIconClasses = cn(
    `steps-${variant}-icon`,
  );

  const stepsLabelClasses = cn(
    'steps-label',
    `steps-${variant}-label`,
  );

  const stepsNextIconClasses = cn(
    `steps-${variant}-next-icon`,
  );

  const stepsLabelIcon = cn(
    'steps-plain-label-icon',
  );

  const stepsLabelText = cn(
    'steps-plain-label-text',
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
                  getIndexOf(steps, key) <= getIndexOf(steps, activeKey),
                )
              }
              key={key}
              onClick={handleStepClick(key)}
            >
              <div className={stepsContentClasses}>
                {
                  variant === 'icons'
                    ? (
                      <div className={stepsIconClasses}>
                        <Icon />
                      </div>
                    ) : null
                }
                <div className={stepsLabelClasses}>
                  {
                    variant === 'icons'
                      ? `${i + 1}. ${label}`
                      : (
                        <>
                          <div className={stepsLabelIcon}>
                            {
                              getIndexOf(steps, key) <= (getIndexOf(steps, activeKey) - 1)
                                ? <Check />
                                : i + 1
                            }
                          </div>
                          <div className={stepsLabelText}>
                            {label}
                          </div>
                        </>
                      )
                  }
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
