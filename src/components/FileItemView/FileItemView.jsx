import React from 'react';
import cn from 'classnames';

import { Eye, File as FileIcon, Trash2 } from '../icons';
import './FileItemView.scss';
import { identity } from 'ramda';

const FileItemView = ({
  fileName = 'fayl-bez-imeni',
  fileSize = '0kb',
  onRemove = null,
  onView = null,
  progress = 0,
}) => {
  const fileItemClasses = cn('file-item');
  const fileItemContentClasses = cn('file-item-content');
  const fileItemNameClasses = cn('file-item-name');
  const fileItemRemoveClasses = cn('file-item-remove');
  const fileItemIconClasses = cn('file-item-icon');
  const fileItemProgressWrapper = cn('file-item-progress');
  const fileItemProgressFill = cn('file-item-progress-fill');

  return (
    <div className={fileItemClasses}>
      <div className={fileItemContentClasses}>
        <div className={fileItemIconClasses}>
          <FileIcon />
        </div>
        <div className={fileItemNameClasses}>{fileName} ({fileSize})</div>
        {
          onRemove
            ? (
              <div className={fileItemRemoveClasses} onClick={onRemove}>
                <Trash2 />
              </div>
            ) : null
        }
        {
          onView
            ? (
              <div className={fileItemRemoveClasses} onClick={onView}>
                <Eye />
              </div>
            ) : null
        }
      </div>
      <div className={fileItemProgressWrapper}>
        <div className={fileItemProgressFill} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default FileItemView;
