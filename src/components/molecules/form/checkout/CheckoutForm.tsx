import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { WButton } from '@atoms/typo/buttons/WButton';

export const CheckoutForm = ({
  customerInfo,
  onCancel,
  secret,
}: {
  customerInfo: any;
  onCancel: () => void;
  secret: string | null;
}): React.ReactElement => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any): Promise<void> => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements || !secret) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);
    const result = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
        billing_details: {
          name: customerInfo.firstName + ' ' + customerInfo.lastName,
        },
      },
    });

    if (result.error) {
      console.log('error', result);
      // Show error to your customer (e.g., insufficient funds)
      setLoading(false);
      setSuccess(false);
      setLoaded(true);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        console.log('success');
        setLoading(false);
        setSuccess(true);
        setLoaded(true);
      }
    }
  };

  let content = <div className="hidden"></div>;
  if (!loaded && loading) {
    content = <div>Loading...</div>;
  } else if (loaded && success) {
    content = <div>Success</div>;
  } else if (loaded && !success) {
    content = <div>Something went wrong...</div>;
  }
  return (
    <form className="col-span-6 p-3" onSubmit={handleSubmit}>
      <h3 className="mb-4 text-lg font-medium leading-6 text-gray-900">
        Enter Your Card Information
      </h3>
      <div className="max-w-xl py-4">
        {content}
        <CardElement className={loading || loaded ? 'hidden' : 'block'} />
      </div>
      <div className="flex py-4 sm:py-6">
        <WButton type="submit" disabled={!stripe}>
          Complete Donation
        </WButton>
        <button className="ml-6" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
