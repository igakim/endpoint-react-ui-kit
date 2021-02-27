import React, { useState } from 'react';
import cn from 'classnames';

import { ChevronLeft, ChevronRight, MoreHorizontal } from '../icons';
import './Pagination.scss';
import {
  identity, inc, range, times,
} from 'ramda';

const getPages = (totalPages, activePage) => {
  if (totalPages <= 5) return [times(inc, totalPages), true, true];
  const beforeStart = activePage - 1;
  const beforeEnd = totalPages - activePage;
  const isBeforeStartLessThanTwo = beforeStart <= 2;
  const isBeforeEndLessThanTwo = beforeEnd <= 2;
  const startPosition = isBeforeStartLessThanTwo
    ? 1
    : (
      isBeforeEndLessThanTwo
        ? activePage - (5 - (totalPages - activePage))
        : activePage - 2
    );

  const endPosition = isBeforeEndLessThanTwo
    ? totalPages
    : (
      isBeforeStartLessThanTwo
        ? activePage + 2 + (4 - activePage)
        : activePage + 2
    );

  return [
    range(startPosition, inc(endPosition)),
    isBeforeStartLessThanTwo,
    isBeforeEndLessThanTwo,
  ];
};

const Pagination = ({
  activePage = 1,
  totalObjects = 0,
  pageSize = 10,
  onPrevClick = identity,
  onNextClick = identity,
  onPageChange = identity,
}) => {
  const paginationClasses = cn('pagination');

  const paginationWrapperClasses = cn('pagination-wrapper');

  const getPaginationItemClasses = (isChevron, isActive, isDisabled) => cn(
    'pagination-item',
    isChevron && 'chevron',
    isActive && 'active',
    isDisabled && 'disabled',
  );

  const totalPages = Math.ceil(totalObjects / pageSize);
  const [productedPages, isBeforeStartLessThanTwo, isBeforeEndLessThanTwo] = getPages(totalPages, activePage);

  return (
    <div className={paginationClasses}>
      <div className={paginationWrapperClasses}>
        <div
          className={getPaginationItemClasses(true, false, activePage === 1)}
          onClick={() => {
            if (activePage !== 1) onPrevClick();
          }}
        >
          <ChevronLeft />
        </div>
        {
          !isBeforeStartLessThanTwo
            ? (
              <div className="pagination-item">
                <MoreHorizontal />
              </div>
            ) : null
        }
        {
          productedPages.map((pageNum) => (
            <div
              className={getPaginationItemClasses(false, pageNum === activePage)}
              onClick={() => onPageChange(pageNum)}
              key={pageNum}
            >
              {pageNum}
            </div>
          ))
        }
        {
          !isBeforeEndLessThanTwo
            ? (
              <div className="pagination-item more">
                <MoreHorizontal />
              </div>
            ) : null
        }
        <div
          className={getPaginationItemClasses(true, false, activePage === totalPages)}
          onClick={() => {
            if (activePage !== totalPages) onNextClick();
          }}
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
