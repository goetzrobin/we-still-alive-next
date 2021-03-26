import React from 'react';
import { FormField } from '../layout/FormField';

export interface FormHeadingProps {
  headline: string;
  intro: string;
}

export const FormHeading = ({ headline, intro }: FormHeadingProps): React.ReactElement => {
  return (
    <FormField>
      <h3 className="text-xl font-medium leading-6 text-gray-900">{headline}</h3>
      <p className="mt-1 text-gray-600 text-md">{intro}</p>
    </FormField>
  );
};
