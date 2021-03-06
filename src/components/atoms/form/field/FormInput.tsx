import { FormField } from '../layout/FormField';
import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps {
  id: string;
  label: string;
  prefix?: string;
  className?: string;
  type?: string;
  step?: number;
  register: () => UseFormRegisterReturn;
}

export const FormInput = ({
  id,
  label,
  className = 'col-span-6 sm:col-span-3',
  prefix,
  type,
  step,
  register,
}: FormInputProps): React.ReactElement => {
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
          step={step}
          {...register()}
          className={clsx(
            prefix ? 'rounded-none rounded-r-md' : 'rounded-md',
            'block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blur-500 sm:text-sm'
          )}
        />
      </div>
    </FormField>
  );
};
