import React, { useState } from 'react';
import cn from 'classnames';
import './Navigation.scss';
import SidebarItems from './SidebarItems';
import ActionsBar from './ActionsBar';
import ActionsBarToggler from './ActionsBarToggler';

/**
 * @callback onClick
 * @param {SyntheticEvent} event
 */

/**
 * @callback renderAdditionalActions
 */

/**
 *
 * @param {Object} props
 * @param {null|ReactNode} props.Logo
 * @param {array<ReactNode>} props.children
 * @param {Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string)}>} props.sidebarItems
 * @param {(null|number|string)} props.activeSidebarItem
 * @param {Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string), label: string}>} props.mainActions
 * @param {(null|string|number)} props.mainActionActiveKey
 * @param {string} props.mainActionsLabel
 * @param {Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string), label: string}>} props.helperActions
 * @param {string} props.helperActionsLabel
 * @param {(renderAdditionalActions|null)} props.renderAdditionalActions
 * @returns {JSX.Element}
 * @constructor
 */
const Navigation = ({
  Logo = null,
  children = [],
  sidebarItems = [],
  activeSidebarItem = null,
  mainActions = [],
  mainActionActiveKey = null,
  mainActionsLabel = '',
  helperActions = [],
  helperActionsLabel = '',
  renderAdditionalActions = null,
}) => {
  const [isShowActionBar, setIsShowActionBar] = useState(false);
  const getAppContainerClasses = (show) => cn(
    'app-container',
    show && 'actionbar-show',
  );
  const sidebarClasses = cn(
    'sidebar',
  );
  const logoClasses = cn(
    'sidebar-logo',
  );
  const contentClasses = cn(
    'main-content',
  );

  const handleClickToggler = () => {
    setIsShowActionBar(!isShowActionBar);
  };

  return (
    <div className={getAppContainerClasses(isShowActionBar)}>
      <div className={sidebarClasses}>
        <div className={logoClasses}>
          <Logo />
        </div>
        <SidebarItems
          items={sidebarItems}
          activeKey={activeSidebarItem}
        />
        <ActionsBar
          isShowActionBar={isShowActionBar}
          mainActions={mainActions}
          mainActionsLabel={mainActionsLabel}
          mainActionActiveKey={mainActionActiveKey}
          helperActions={helperActions}
          helperActionsLabel={helperActionsLabel}
          renderAdditionalActions={renderAdditionalActions}
        />
        <ActionsBarToggler
          isShowActionBar={isShowActionBar}
          onClick={handleClickToggler}
        />
      </div>
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  );
};

export default Navigation;
