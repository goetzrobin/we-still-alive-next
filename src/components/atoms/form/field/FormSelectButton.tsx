import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { FormField } from '../layout/FormField';

const getAppropriteClass = (index: number, max: number, isSelected = false): string => {
  const base = clsx(
    'inline-flex items-center justify-center w-full px-3 py-2 text-sm border border-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500',
    isSelected ? 'z-30' : 'z-10'
  );
  if (index === 0 && max === 1) {
    return clsx(base, 'rounded-md');
  }
  if (index === 0) {
    return clsx(base, 'rounded-l-md');
  } else if (index === max - 1) {
    return clsx(base, 'rounded-r-md');
  } else {
    return clsx(base, 'rounded-r-0 rounded-l-0');
  }
};

export interface FormSelectButtonProps {
  id: string;
  label: string;
  options: FormSelectButtonOptionProps[];
  value?: string;
  onOptionSelected: (value: number | string | null) => void;
}

export const FormSelectButton = ({
  id,
  label,
  options,
  value,
  onOptionSelected,
}: FormSelectButtonProps): React.ReactElement => {
  const [selected, setSelectedValue] = useState<{ index: number; value: string | number | null }>({
    index: -1,
    value: null,
  });
  useEffect(() => {
    const newValue = parseInt(value ?? '0');
    if (options.findIndex((option) => option.value === newValue) === -1) {
      setSelectedValue({
        index: -1,
        value: newValue,
      });
    }
  }, [value, setSelectedValue, options]);
  return (
    <FormField className="col-span-6">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex mt-1 rounded-md shadow-sm">
        {options.map(({ label, value }, index) => (
          <FormSelectButtonOption
            key={index}
            isSelected={index === selected.index}
            label={label}
            index={index}
            max={options.length}
            valueSelected={() => {
              const newValue = index !== selected?.index ? value ?? null : null;
              const newIndex = index !== selected?.index ? index : -1;
              onOptionSelected(newValue);
              setSelectedValue({ index: newIndex, value: newValue });
            }}
          />
        ))}
      </div>
    </FormField>
  );
};

export interface FormSelectButtonOptionProps {
  label?: string;
  value?: string | number;
}
export const FormSelectButtonOption = ({
  label,
  index,
  max,
  valueSelected,
  isSelected,
}: FormSelectButtonOptionProps & {
  isSelected: boolean;
  valueSelected: () => void;
  index: number;
  max: number;
}): React.ReactElement => {
  return (
    <button
      className={getAppropriteClass(index, max, isSelected)}
      onClick={(e) => {
        e.preventDefault();
        valueSelected();
      }}
    >
      {label}
    </button>
  );
};
