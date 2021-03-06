import React, { useRef } from 'react';
import cn from 'classnames';
import { Upload } from '../icons';
import './FileUpload.scss';
import { identity } from 'ramda';

/**
 * @callback onChange
 * @param {File[]} files
 */

/**
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.id
 * @param {string} props.tipText
 * @param {(null|'error')} props.state
 * @param {boolean} props.showTip
 * @param {('extra-small'|'small'|'medium'|'large')} props.size
 * @param {('primary'|'secondary'|'info'|'danger'|'success'|'plain'|'warning')} props.color
 * @param {boolean} props.disabled
 * @param {boolean} props.multiple
 * @param {onChange} props.onChange
 * @param ref
 * @returns {JSX.Element}
 * @constructor
 */
const FileUpload = ({
  label = '',
  id = '',
  tipText = '',
  state = null,
  showTip = false,
  size = 'medium',
  color = 'primary',
  disabled = false,
  multiple = true,
  onChange = identity,
}) => {
  const uploaderClasses = cn('uploader');
  const uploaderWrapperClasses = cn('uploader-wrapper');
  const uploaderInputClasses = cn('uploader-input');
  const uploaderIconClasses = cn('uploader-icon');
  const uploaderTipClasses = cn(
    'uploader-tip',
    `uploader-tip-${state}`,
    `uploader-tip-${size}`,
  );
  const uploaderLabelClasses = cn(
    'uploader-label',
    `uploader-label-${size}`,
    `uploader-label-${color}`,
  );

  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.files);
  };

  return (
    <div className={uploaderClasses}>
      <div className={uploaderWrapperClasses}>
        <input
          type="file"
          id={id}
          className={uploaderInputClasses}
          disabled={disabled}
          onChange={handleChange}
          multiple={multiple}
        />
        <label htmlFor={id} className={uploaderLabelClasses}>
          {label}
          <Upload className={uploaderIconClasses} />
        </label>
      </div>
      {
        showTip || state === 'error'
          ? (
            <div className={uploaderTipClasses}>
              {tipText}
            </div>
          ) : null
      }
    </div>
  );
};

export default FileUpload;
