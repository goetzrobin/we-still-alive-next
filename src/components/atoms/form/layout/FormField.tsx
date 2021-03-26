import React from 'react';

interface FormFieldProps {
  className?: string;
  children: React.ReactNode;
}

export const FormField = ({
  children,
  className = 'col-span-6 sm:col-span-3',
}: FormFieldProps): React.ReactElement => {
  return <div className={className}>{children}</div>;
};
