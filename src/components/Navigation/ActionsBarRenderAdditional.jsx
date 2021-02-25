import React from 'react';
import cn from 'classnames';

/**
 * @callback renderAdditionalActions
 */

/**
 *
 * @param {Object} props
 * @param {(renderAdditionalActions| null)} props.renderComponent
 * @returns {JSX.Element|null}
 * @constructor
 */
const ActionsBarRenderAdditional = ({
  renderComponent,
}) => {
  const actionBarAdditional = cn(
    'actionbar-nav-additional',
  );
  const actionBarDivider = cn(
    'actionbar-divider',
  );
  return renderComponent
    ? (
      <>
        <div className={actionBarDivider} />
        <div className={actionBarAdditional}>
          {renderComponent()}
        </div>
      </>
    ) : null;
};

export default ActionsBarRenderAdditional;
