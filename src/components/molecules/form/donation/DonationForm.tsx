import { FormCurrency } from '@atoms/form/field/FormCurrency';
import { FormHeading, FormHeadingProps } from '@atoms/form/field/FormHeading';
import { FormInput } from '@atoms/form/field/FormInput';
import { FormSelectButton } from '@atoms/form/field/FormSelectButton';
import { FormDivider } from '@atoms/form/layout/FormDivider';
import { FormGrid, FormGridRow } from '@atoms/form/layout/FormGrid';
import { FormSection } from '@atoms/form/layout/FormSection';
import { WButton } from '@atoms/typo/buttons/WButton';
import React, { useEffect, useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { CheckoutForm } from '../checkout/CheckoutForm';

export interface DonationFormProps {
  formHeading: FormHeadingProps;
}

const formatDonation = (donation: number): string => {
  return donation > 0
    ? (donation / 100.0).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
    : '0.00';
};
export const DonationForm = ({
  formHeading: { headline, intro },
}: DonationFormProps): React.ReactElement => {
  const [donation, setDonation] = useState(1000);
  const [readyForPayment, setReadyForPayment] = useState(false);
  const [secret, setSecret] = useState<string | null>(null);
  const [formData, setFormData] = useState<any | null>(null);
  const onDonationChange = (value: string | number | null): void => {
    setDonation(parseFloat(`${value}` ?? 0) * 100);
  };
  const { register, handleSubmit, formState } = useForm();
  const submitForm = async (data: any): Promise<void> => {
    setFormData(data);
    const response = await fetch(`/api/donations/intent?amount=${donation}`);
    const { client_secret: clientSecret } = await response.json();
    setSecret(clientSecret);
    setReadyForPayment(true);
  };
  return (
    <FormGrid>
      <FormGridRow>
        <FormHeading headline={headline} intro={intro} />
      </FormGridRow>
      {!readyForPayment ? (
        <>
          <FormGridRow>
            <FormSection
              subheading="Your Donation"
              subdescription={
                <p className="mt-1 text-gray-700 text-7xl">{formatDonation(donation)}</p>
              }
            >
              <FormSelectButton
                id="amount"
                label="Choose an amount"
                value={donation.toString()}
                onOptionSelected={(value) => onDonationChange(parseInt(`${value}` ?? 0) / 100)}
                options={[
                  {
                    label: '$10',
                    value: 1000,
                  },
                  {
                    label: '$20',
                    value: 2000,
                  },
                  {
                    label: '$30',
                    value: 3000,
                  },
                  {
                    label: '$50',
                    value: 5000,
                  },
                ]}
              />
              <FormCurrency
                label="Or choose your own"
                id="custom"
                name="custom"
                placeholder="Enter Dollar Amount"
                defaultValue={donation / 100}
                value={donation / 100}
                decimalsLimit={2}
                prefix="$"
                onValueChange={(value) => onDonationChange(value || null)}
              />
            </FormSection>
          </FormGridRow>
          <FormDivider />
          <form id="personal-data" onSubmit={handleSubmit(submitForm)}>
            <FormGridRow>
              <FormSection
                subheading="Contact Information"
                subdescription="Thank you so much for your donation. Help us get to know you!"
              >
                <FormInput
                  label="First Name"
                  id="first-name"
                  register={() => register('firstName', { required: true })}
                />
                <FormInput label="Last Name" id="last-name" register={() => register('lastName')} />
                <FormInput
                  className="col-span-6 sm:col-span-4"
                  label="E-Mail Address"
                  id="email"
                  register={() => register('email', { required: true })}
                />
              </FormSection>
            </FormGridRow>
            <FormGridRow>
              <FormSection
                subheading="Billing Address"
                subdescription="This is for our records and your tax credit only"
              >
                <FormInput
                  className="col-span-6"
                  label="Street Address"
                  id="street"
                  register={() => register('street')}
                />
                <FormInput
                  className="col-span-6 sm:col-span-3 lg:col-span-2"
                  label="City"
                  id="city"
                  register={() => register('city')}
                />
                <FormInput
                  className="col-span-6 sm:col-span-3 lg:col-span-2"
                  label="ZIP"
                  id="zip"
                  register={() => register('zip')}
                />
                <FormInput
                  className="col-span-6 sm:col-span-3 lg:col-span-2"
                  label="State"
                  id="state"
                  register={() => register('state')}
                />
              </FormSection>
            </FormGridRow>
            <FormGridRow>
              <div className="py-4 sm:py-6">
                <WButton className="w-full sm:w-auto" type="submit" form="personal-data">
                  Donate Now
                </WButton>
              </div>
            </FormGridRow>
          </form>
        </>
      ) : (
        <FormGridRow>
          <FormSection
            subheading="Payment Information"
            subdescription={
              <p className="mt-1 text-gray-700 text-7xl">{formatDonation(donation)}</p>
            }
          >
            <CheckoutForm
              customerInfo={formData}
              onCancel={() => setReadyForPayment(false)}
              secret={secret}
            />
          </FormSection>
        </FormGridRow>
      )}
    </FormGrid>
  );
};
