import React from 'react';

export const Spinner = ({ size, color }) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        style={{ width: size, height: size }}
        className={`spinner-border text-${color}`}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
