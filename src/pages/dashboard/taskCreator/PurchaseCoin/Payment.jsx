import {  Elements } from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_API_GATEWAY_KEY)
const Payment = () => {
    const {prices} = useParams()
    console.log(prices);
    return (
        <div className=' my-8'>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm prices={prices}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;