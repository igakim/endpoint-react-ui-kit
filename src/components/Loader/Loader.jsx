import React from 'react';
import cn from 'classnames';

import './Loader.scss';

const Loader = ({
  show = false,
  text = '',
  color = '#1976d2',
}) => {
  const loaderClasses = cn('loader');
  const loaderWrapperClasses = cn('loader-wrapper');
  const loaderIconClasses = cn('loader-icon');
  const loaderTextClasses = cn('loader-text');

  return show ? (
    <div className={loaderClasses}>
      <div className={loaderWrapperClasses}>
        <div className={loaderIconClasses}>
          <div className="multi-spinner-container">
            <div className="multi-spinner" style={{ borderTopColor: color }}>
              <div className="multi-spinner" style={{ borderTopColor: color }}>
                <div className="multi-spinner" style={{ borderTopColor: color }}>
                  <div className="multi-spinner" style={{ borderTopColor: color }}>
                    <div className="multi-spinner" style={{ borderTopColor: color }}>
                      <div className="multi-spinner" style={{ borderTopColor: color }}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={loaderTextClasses}>
          {text}
        </div>
      </div>
    </div>
  ) : null;
};

export default Loader;
