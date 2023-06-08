import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      className="text-sm text-gray-500 bg-transparent border border-gray-300 px-2 py-1 rounded-md hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
