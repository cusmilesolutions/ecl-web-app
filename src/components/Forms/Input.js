import React from 'react';

const Input = ({ name, type, id, label }) => {
  return (
    <div className="input container">
      <label>{label}</label>
      <input name={name} type={type} id={id} />
    </div>
  );
};

export default Input;
