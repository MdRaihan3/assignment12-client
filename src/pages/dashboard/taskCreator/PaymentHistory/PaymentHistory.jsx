import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";
import useAuth from "../../../../useHooks/useAuth";

const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: payments = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/get/${user?.email}`)
            return res.data
        }
    })
    console.log(payments);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Purchased Coin</th>
                            <th>Amount</th>
                            <th>Purchased Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {  payments.length > 0  &&
                            payments.map((payment, idx) => 
                                <tr key={payment?._id}>
                                    <th>{idx + 1}</th>
                                    <td>{payment?.purchasedCoin}</td>
                                    <td>{payment?.amount} $</td>
                                    <td>{new Date(payment?.coinPurchaseDate).toLocaleDateString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;