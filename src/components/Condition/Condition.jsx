import React from 'react';

const Condition = ({ when, is, children }) => (when === is ? (
    <>
      {children}
    </>
) : null);

export default Condition;
