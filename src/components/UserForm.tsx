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
    <div className="bg-white rounded-lg p-6 mb-4 shadow-lg">
      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Learner's Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Enter learner's name"
            className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              error && !name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error && !name && <p className="text-xs text-red-500 mt-1">Please enter a name.</p>}
        </div>

        {/* Number Input */}
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">Learner's Number</label>
          <input
            id="number"
            type="text"
            value={number}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 10);
              onNumberChange(value);
            }}
            placeholder="Enter learner's number"
            className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              error && (!number || number.length !== 10) ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error && (!number || number.length !== 10) && <p className="text-xs text-red-500 mt-1">Please enter a valid 10-digit number.</p>}
        </div>
      </div>
    </div>
  );
};