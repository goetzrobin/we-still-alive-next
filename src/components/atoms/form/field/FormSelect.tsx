import React from 'react';
import { FormField } from '../layout/FormField';

export interface FormSelectProps {
  id: string;
  label: string;
  autocomplete?: string;
  children?:
    | React.ReactElement<FormSelectOptionProps>
    | React.ReactElement<FormSelectOptionProps>[];
}

export const FormSelect = ({
  autocomplete,
  id,
  label,
  children,
}: FormSelectProps): React.ReactElement => {
  return (
    <FormField>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        name={id}
        autoComplete={autocomplete}
        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {children}
      </select>
    </FormField>
  );
};

export interface FormSelectOptionProps {
  children?: React.ReactNode;
}

export const FormSelectOption = ({ children }: FormSelectOptionProps): React.ReactElement => {
  return <option>{children}</option>;
};
