import { FormHeading, FormHeadingProps } from '@atoms/form/field/FormHeading';
import { FormInput } from '@atoms/form/field/FormInput';
import { FormSelectButton } from '@atoms/form/field/FormSelectButton';
import { FormDivider } from '@atoms/form/layout/FormDivider';
import { FormGrid, FormGridRow } from '@atoms/form/layout/FormGrid';
import { FormSection } from '@atoms/form/layout/FormSection';
import { WButton } from '@atoms/typo/buttons/WButton';
import React, { useState } from 'react';
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
  const onDonationChange = (value: string | number | null): void => {
    setDonation(parseFloat(`${value}` ?? 0) * 100);
  };
  const onFormChange = (e: unknown): void => {
    console.log(e);
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
              <FormInput
                label="Or choose your own"
                id="custom"
                type="number"
                step={0.01}
                value={(donation / 100.0).toFixed(2).toString()}
                min={0}
                prefix="$"
                onChange={onDonationChange}
              />
            </FormSection>
          </FormGridRow>
          <FormDivider />
          <FormGridRow>
            <FormSection
              subheading="Contact Information"
              subdescription="Thank you so much for your donation. Help us get to know you!"
            >
              <FormInput label="First Name" id="first-name" onChange={onFormChange} />
              <FormInput label="Last Name" id="last-name" onChange={onFormChange} />
              <FormInput
                className="col-span-6 sm:col-span-4"
                label="E-Mail Address"
                id="email"
                onChange={onFormChange}
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
                id="email"
                onChange={onFormChange}
              />
              <FormInput
                className="col-span-6 sm:col-span-3 lg:col-span-2"
                label="City"
                id="email"
                onChange={onFormChange}
              />
              <FormInput
                className="col-span-6 sm:col-span-3 lg:col-span-2"
                label="ZIP"
                id="email"
                onChange={onFormChange}
              />
              <FormInput
                className="col-span-6 sm:col-span-3 lg:col-span-2"
                label="State"
                id="email"
                onChange={onFormChange}
              />
            </FormSection>
          </FormGridRow>
          <FormGridRow>
            <div className="py-4 sm:py-6">
              <WButton
                className="w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  (async () => {
                    const response = await fetch(`/api/donations/intent?amount=${donation}`);
                    const { client_secret: clientSecret } = await response.json();
                    setSecret(clientSecret);
                    setReadyForPayment(true);
                  })();
                }}
              >
                Donate Now
              </WButton>
            </div>
          </FormGridRow>
        </>
      ) : (
        <FormGridRow>
          <FormSection
            subheading="Payment Information"
            subdescription={
              <p className="mt-1 text-gray-700 text-7xl">{formatDonation(donation)}</p>
            }
          >
            <CheckoutForm secret={secret} />
          </FormSection>
        </FormGridRow>
      )}
    </FormGrid>
  );
};
