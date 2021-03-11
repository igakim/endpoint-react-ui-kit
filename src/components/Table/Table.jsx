import React from 'react';
import cn from 'classnames';

import './Table.scss';

const Head = ({
  className = '',
  children,
  ...rest
}) => {
  const tableHeadClasses = cn('table-head', className);

  return (
    <thead className={tableHeadClasses} {...rest}>
      {children}
    </thead>
  );
};

const Body = ({
  className = '',
  children,
  ...rest
}) => {
  const tableBodyClasses = cn('table-body', className);

  return (
    <tbody className={tableBodyClasses} {...rest}>
    {children}
    </tbody>
  );
};

const Footer = ({
  className = '',
  children,
  ...rest
}) => {
  const tableFooterClasses = cn('table-footer', className);

  return (
    <tfoot className={tableFooterClasses} {...rest}>
    {children}
    </tfoot>
  );
};

const Tr = ({
  className = '',
  selected = false,
  children,
  ...rest
}) => {
  const tableTrClasses = cn(
    'table-tr',
    className,
    {
      'table-tr-selected': selected,
    },
  );

  return (
    <tr className={tableTrClasses} {...rest}>
      {children}
    </tr>
  );
};

const Td = ({
  className = '',
  children,
  ...rest
}) => {
  const tableTdClasses = cn('table-td', className);

  return (
    <td className={tableTdClasses} {...rest}>{children}</td>
  );
};

const Th = ({
  className = '',
  children,
  ...rest
}) => {
  const tableThClasses = cn('table-th', className);

  return (
    <th className={tableThClasses} {...rest}>{children}</th>
  );
};

const Table = ({
  className,
  children,
  ...rest
}) => {
  const tableClasses = cn('table', className);
  const tableWrapperClasses = cn('table-wrapper');

  return (
    <div className={tableWrapperClasses}>
      <table className={tableClasses} {...rest}>
        {children}
      </table>
    </div>
  );
};

Table.Head = Head;
Table.Body = Body;
Table.Footer = Footer;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

export default Table;
