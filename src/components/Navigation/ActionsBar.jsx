import React from 'react';
import cn from 'classnames';
import './ActionsBar.scss';

import ActionsBarNav from './ActionsBarNav';
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
 * @param {Array.<{moduleLabel: string, key: (number|string), navs: Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string), label: string}>}>} props.mainActions
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

  return (
    <div className={getActionBarClasses(isShowActionBar)}>
      <div className={actionBarContainer}>
        {
          mainActions.map((nav) => (
            <ActionsBarNav
              actions={nav.navs}
              activeKey={mainActionActiveKey}
              actionLabel={nav.moduleLabel}
              key={nav.key}
            />
          ))
        }
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
