import '../styles/globals.css'
import SiteLayout from '../src/components/layouts/SiteLayout'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Loading from '@organisms/loading/Loading';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => <SiteLayout children={page} />)

  return <>
    <Loading />
    <Elements stripe={stripePromise}> {getLayout(
      <Component {...pageProps} />)}
    </Elements></>;
}

export default MyApp
