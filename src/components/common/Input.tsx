import React, { forwardRef } from 'react';

type InputProps = {
  placeholder: string;
  type?: string;
  id?: string;
  error?: string;
  value?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = 'text', id, error, value, name, onChange }, ref) => {
    return (
      <>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          ref={ref} // ใช้ ref
          className={`w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 ${
            error ? 'border-red-500 focus:ring-red-300' : 'border-gray-400 focus:border-blue-500 focus:ring-blue-300'
          }`}
        />
        {error && <small className="text-red-500">{error}</small>} 
      </>
    );
  }
);

export default Input;
