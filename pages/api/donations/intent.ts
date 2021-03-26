// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2020-08-27' });
  const { amount } = req?.query;
  const intent = await stripe.paymentIntents.create({
    amount: parseInt(amount as string, 10),
    currency: 'usd',
    metadata: { integration_check: 'accept_a_payment' },
  });
  res.status(200).json({ client_secret: intent.client_secret });
};
