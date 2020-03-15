import React from 'react';

export const PrimaryBtn = ({ name }) => {
  return (
    <div className="customize-pri-btn shadow-sm">
      <span>{name}</span>
    </div>
  );
};

export const SecondaryBtn = ({ name }) => {
  return (
    <div className="customize-sec-btn shadow-sm">
      <span>{name}</span>
    </div>
  );
};
