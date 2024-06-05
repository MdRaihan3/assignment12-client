import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";
import useAuth from "../../../../useHooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useRole from "../../../../useHooks/useRole";

const CheckoutForm = ({ prices }) => {
    const stripe = useStripe()
    const elements = useElements();
    const { user } = useAuth();
    const [, , ,refetch] = useRole()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()

    const price = parseFloat(prices)
    console.log(price);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])

    const handleSubmit = async e => {
        e.preventDefault()
        if (!stripe || !elements) { return; }
        const card = elements.getElement(CardElement)
        if (!card) { return; }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[paymentMethod]', paymentMethod);
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('error in confirm', confirmError);
        } else {
            console.log('payment intent in confirm', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                const amounts = parseFloat(paymentIntent?.amount)
                let coins = 0;
                if (amounts === 100) {
                    coins = 10
                } else if (amounts === 900) {
                    coins = 100
                } else if (amounts === 1900) {
                    coins = 500
                } else if (amounts === 3900) {
                    coins = 1000
                }


                Swal.fire({ icon: 'success', text: "paid successfully" })
                if (coins > 0) {
                    const paymentInfo = {
                        name: user?.displayName,
                        email: user?.email,
                        purchasedCoin: coins,
                        amount: amounts,
                        coinPurchaseDate: new Date()
                    }

                    axiosSecure.patch(`/payment/update/${user?.email}`, { paymentInfo })
                        .then(res => {
                            if (res.data?.coinResult?.modifiedCount > 0) {
                                refetch()
                                setTimeout(() => {                                  
                                    navigate('/dashboard/purchaseCoin')
                                    Swal.fire(` You have purchased ${coins} coin`)
                                }, 3000)
                            }
                            console.log('coin update', res.data?.coinResult);
                            console.log('payment', res.data?.paymentResult);
                        })
                }


                // if (amounts === 100) {
                //     const amounts = 10
                //     axiosSecure.patch(`/coin/update/${user?.email}`, { amounts })
                //         .then(res => {
                //             if (res.data.modifiedCount > 0) {
                //                 setTimeout(() => {
                //                     navigate('/dashboard/purchaseCoin')
                //                     Swal.fire(' you have purchased your coin')
                //                 }, 2000)
                //             }
                //             console.log(res.data);
                //         })
                // } else if (amounts === 900) {
                //     const amounts = 100
                //     axiosSecure.patch(`/coin/update/${user?.email}`, { amounts })
                //         .then(res => {
                //             if (res.data.modifiedCount > 0) {
                //                 setTimeout(() => {
                //                     navigate('/dashboard/purchaseCoin')
                //                     Swal.fire(' you have purchased your coin')
                //                 }, 3000)
                //             }
                //             console.log(res.data);
                //         })
                // } else if (amounts === 1900) {
                //     const amounts = 500
                //     axiosSecure.patch(`/coin/update/${user?.email}`, { amounts })
                //         .then(res => {
                //             if (res.data.modifiedCount > 0) {
                //                 setTimeout(() => {
                //                     navigate('/dashboard/purchaseCoin')
                //                     Swal.fire(' you have purchased your coin')
                //                 }, 3000)
                //             }
                //             console.log(res.data);
                //         })
                // } 
                // else if (amounts === 3900) {
                //     const amounts = 1000

                // }

            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary btn-outline mt-2" type="submit"
                disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className=" text-red-600">{error}</p>
            {transactionId && <p className=" text-green-500">
                your transactionId is {transactionId}
            </p>}
        </form>

    );
};

export default CheckoutForm;