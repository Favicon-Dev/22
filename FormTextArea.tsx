import React from 'react';

interface FormTextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

export function FormTextArea({ label, value, onChange, required }: FormTextAreaProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        required={required}
        rows={4}
        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
      />
    </div>
  );
}