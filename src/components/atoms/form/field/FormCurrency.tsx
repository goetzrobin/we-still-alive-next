import clsx from 'clsx';
import CurrencyInput from 'react-currency-input-field';
import { FormField } from '../layout/FormField';

interface FormCurrencyProps {
  prefix?: string;
  className?: string;
  label?: string;
  id: string;
  name: string;
  placeholder: string;
  defaultValue: number;
  decimalsLimit: number;
  value?: number;
  onValueChange: (value: string | undefined, name?: string | undefined) => void;
}

export const FormCurrency = ({
  className,
  label,
  prefix,
  id,
  name,
  placeholder,
  defaultValue,
  decimalsLimit,
  value,
  onValueChange,
}: FormCurrencyProps): React.ReactElement => {
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
        <CurrencyInput
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          defaultValue={defaultValue}
          decimalsLimit={decimalsLimit}
          onValueChange={onValueChange}
          className={clsx(
            prefix ? 'rounded-none rounded-r-md' : 'rounded-md',
            'block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blur-500 sm:text-sm'
          )}
        />
      </div>
    </FormField>
  );
};
