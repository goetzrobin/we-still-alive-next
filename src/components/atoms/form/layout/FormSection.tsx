import { PropsWithChildren } from 'react';

export interface FormSectionProps extends PropsWithChildren<unknown> {
  subheading: string;
  subdescription?: React.ReactNode;
}

export const FormSection = ({
  subheading,
  subdescription,
  children,
}: FormSectionProps): React.ReactElement => {
  return (
    <>
      <div className="py-4 sm:pr-1 md:pr-3 md:w-2/6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{subheading}</h3>
        {subdescription}
      </div>
      <div className="grid w-full grid-cols-6 gap-6 mx-auto md:w-4/6">{children}</div>
    </>
  );
};
