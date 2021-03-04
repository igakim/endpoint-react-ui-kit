import React, { useEffect } from 'react';
import cn from 'classnames';

import './ScrollSpy.scss';

/**
 *
 * @param {object} props
 * @param {Array.<{key: 'string', label: 'string'}>} props.anchors
 * @returns {JSX.Element}
 * @constructor
 */
const ScrollSpy = ({
  anchors = [],
}) => {
  const scrollSpyClasses = cn('scrollspy');
  const scrollSpyWrapperClasses = cn('scrollspy-wrapper');
  const scrollSpyItemClasses = cn('scrollspy-item');
  const scrollSpyItemLineClasses = cn('scrollspy-item-line');
  const scrollSpyItemLabelClasses = cn('scrollspy-item-label');
  const scrollSpyItemDotClasses = cn('scrollspy-item-dot');
  const scrollSpyItemTextClasses = cn('scrollspy-item-text');

  const handleClick = (key) => () => {
    const htmlElement = document.querySelector(`#${key}`);
    window.scrollTo(0, htmlElement.offsetTop);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowY = window.scrollY;
      anchors.forEach((anchor) => {
        const htmlElement = document.querySelector(`#${anchor.key}`);
        if (!htmlElement) return;

        const sectionTop = htmlElement.offsetTop - 50;
        if (windowY > sectionTop) {
          document.querySelector(`[data-anchor="${anchor.key}"]`).classList.add('active');
        } else {
          document.querySelector(`[data-anchor="${anchor.key}"]`).classList.remove('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={scrollSpyClasses}>
      <div className={scrollSpyWrapperClasses}>
        {
          anchors.map((anchor) => (
            <div
              className={scrollSpyItemClasses}
              key={anchor.key}
              onClick={handleClick(anchor.key)}
              data-anchor={anchor.key}
            >
              <div className={scrollSpyItemLineClasses} />
              <div className={scrollSpyItemLabelClasses}>
                <div className={scrollSpyItemDotClasses} />
                <div className={scrollSpyItemTextClasses}>
                  {anchor.label}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ScrollSpy;
