import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 my-2 mx-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
