import React, { useEffect, useState } from 'react';
import * as _ from 'lodash';
import { FormField } from '../layout/FormField';
import clsx from 'clsx';

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  value?: string;
  debounce?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: string) => void;
  className?: string;
  prefix?: string;
}

export const FormInput = ({
  id,
  label,
  autoComplete,
  value,
  type = 'text',
  debounce = 0,
  min,
  max,
  step,
  onChange,
  className = 'col-span-6 sm:col-span-3',
  prefix,
}: FormInputProps): React.ReactElement => {
  const [innerValue, setValue] = useState(value ?? '');
  const onValueChange = _.debounce(onChange, debounce);
  useEffect(() => {
    setValue(value ?? '');
  }, [value]);
  return (
    <FormField className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex mt-1 rounded-md shadow-sm">
        {prefix && (
          <span className="inline-flex items-center px-3 py-2 text-gray-500 border border-r-0 border-gray-300 sm:text-sm rounded-l-md bg-gray-50">
            {prefix}
          </span>
        )}
        <input
          type={type}
          name={id}
          id={id}
          min={min}
          max={max}
          step={step}
          value={innerValue}
          autoComplete={autoComplete}
          onChange={(e) => {
            setValue(e.target.value);
            onValueChange(e.target.value);
          }}
          className={clsx(
            prefix ? 'rounded-none rounded-r-md' : 'rounded-md',
            'block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blur-500 sm:text-sm'
          )}
        />
      </div>
    </FormField>
  );
};
