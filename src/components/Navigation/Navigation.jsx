import React, { useState } from 'react';
import cn from 'classnames';
import './Navigation.scss';
import { identity } from 'ramda';
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
 * @callback onTogglerClick
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
 * @param {Array.<{icon: ReactNode, onClick: onClick, key: (null|number|string), label: string}>} props.helperActions
 * @param {string} props.helperActionsLabel
 * @param {boolean} props.isShowActionBar
 * @param {onTogglerClick} props.onTogglerClick,
 * @param {(renderAdditionalActions|null)} props.renderAdditionalActions
 * @returns {JSX.Element}
 * @constructor
 */
const Navigation = ({
  Logo = null,
  children = [],
  sidebarItems = [],
  activeSidebarItem = null,
  renderSidebarExtra = identity,
  mainActions = [],
  mainActionActiveKey = null,
  helperActions = [],
  helperActionsLabel = '',
  renderAdditionalActions = null,
  isShowActionBar = false,
  onTogglerClick = () => {},
}) => {
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
  const sidebarExtraClasses = cn(
    'sidebar-extra',
  );

  const handleClickToggler = () => {
    onTogglerClick();
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
        <div className={sidebarExtraClasses}>
          {renderSidebarExtra()}
        </div>
        <ActionsBar
          isShowActionBar={isShowActionBar}
          mainActions={mainActions}
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
