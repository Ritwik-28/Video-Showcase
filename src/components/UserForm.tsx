import React from 'react';

interface UserFormProps {
  name: string;
  number: string;
  onNameChange: (value: string) => void;
  onNumberChange: (value: string) => void;
  error: boolean;
}

export const UserForm: React.FC<UserFormProps> = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  error
}) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Enter learner's name"
        className={`px-4 py-2 border rounded-lg ${
          error && !name ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      <input
        type="text"
        value={number}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, '').slice(0, 10);
          onNumberChange(value);
        }}
        placeholder="Enter learner's number"
        className={`px-4 py-2 border rounded-lg ${
          error && (!number || number.length !== 10) ? 'border-red-500' : 'border-gray-300'
        }`}
      />
    </div>
  );
};