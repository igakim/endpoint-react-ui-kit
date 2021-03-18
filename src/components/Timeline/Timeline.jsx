import React from 'react';
import cn from 'classnames';

import './Timeline.scss';

const Timeline = ({
  items = [],
}) => (
  <div className="timeline">
    {
      items.map((item) => (
        <div className="timeline-item" key={item.id}>
          <div className="timeline-aside">
            {item.aside}
          </div>
          <div className="timeline-progress">
            <div className="timeline-progress-dot-wrapper">
              <div className="timeline-progress-dot" />
            </div>
            <div className="timeline-progress-line" />
          </div>
          <div className="timeline-content">
            {item.content}
          </div>
        </div>
      ))
    }
  </div>
);

export default Timeline;
