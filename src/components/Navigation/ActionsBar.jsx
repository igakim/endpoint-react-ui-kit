import React from 'react';
import cn from 'classnames';
import './ActionsBar.scss';

import ActionsBarMainActions from './ActionsBarMainActions';
import ActionsBarHelperActions from './ActionsBarHelperActions';
import ActionsBarRenderAdditional from './ActionsBarRenderAdditional';
/**
 * @callback onClick
 * @param {SyntheticEvent} event
 */

/**
 * @callback renderAdditionalActions
 */

/**
 * @param {Object} props
 * @param {boolean} props.isShowActionBar
 * @param {Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string), label: string}>} props.mainActions
 * @param {string} props.mainActionsLabel
 * @param {(null|string|number)} props.mainActionActiveKey
 * @param {Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string), label: string}>} props.helperActions
 * @param {string} props.helperActionsLabel
 * @param {(renderAdditionalActions| null)} props.renderAdditionalActions
 * @returns {JSX.Element}
 * @constructor
 */
const ActionsBar = ({
  isShowActionBar = false,
  mainActions = [],
  mainActionsLabel = '',
  mainActionActiveKey = null,
  helperActions = [],
  helperActionsLabel = '',
  renderAdditionalActions = null,
}) => {
  const getActionBarClasses = (show) => cn(
    'actionbar',
    show && 'show',
  );
  const actionBarContainer = cn(
    'actionbar-container',
  );
  const actionBarNav = cn(
    'actionbar-nav',
  );
  const actionBarNavLabel = cn(
    'actionbar-nav-label',
  );

  return (
    <div className={getActionBarClasses(isShowActionBar)}>
      <div className={actionBarContainer}>
        <div className={actionBarNav}>
          <div className={actionBarNavLabel}>{mainActionsLabel}</div>
          <ActionsBarMainActions
            actions={mainActions}
            activeKey={mainActionActiveKey}
          />
        </div>
        <ActionsBarHelperActions
          actions={helperActions}
          helperActionsLabel={helperActionsLabel}
        />
        <ActionsBarRenderAdditional
          renderComponent={renderAdditionalActions}
        />
      </div>
    </div>
  );
};

export default ActionsBar;
