import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../useHooks/useAxiosPublic";

const WithdrawRequest = () => {
    const axiosSecure = useAxiosSecure()
const axiosPublic = useAxiosPublic()

    const { data: requests = [] } = useQuery({
        queryKey: ['withdrawReq'],
        queryFn: async () => {
            const res = await axiosSecure.get('/withdrawRequest')
            return res.data
        }
    })
    console.log(requests);
    const handleWithdrawSuccess = (request) => {
        console.log('request',request);
        const withdrawId = request?._id
        const workerEmail = request?.workerEmail
        const coin = request?.coinToWithdraw
        const reqInfo = { withdrawId, workerEmail, coin }
        axiosPublic.patch('/withdrawSuccess', reqInfo)
            .then(res => {
                console.log(res.data);
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({text:'Withdrawal approved successfully', icon:'success'})
                }else {
                    Swal.fire('Withdrawal update failed', 'No changes were made', 'error');
                }
            }) .catch(err => {
                console.error(err);
                Swal.fire('error', 'error');
            });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Worker Name</th>
                            <th>Withdraw Coin</th>
                            <th>Withdraw Amount</th>
                            <th>Account Number</th>
                            <th>Payment System</th>
                            <th>Withdrawal Req Time(mm/dd/yy)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requests.map((r, idx) =>
                                <tr key={r?._d}>
                                    <th>{idx + 1}</th>
                                    <td>{r?.workerName}</td>
                                    <td>{r?.coinToWithdraw}</td>
                                    <td>{r?.withdrawAmount} $</td>
                                    <td>{r?.accountNumber}</td>
                                    <td>{r?.paymentSystem}</td>
                                    <td>{new Date(r?.withdrawalRequestTime).toLocaleDateString()}</td>
                                    <td><button onClick={() => handleWithdrawSuccess(r)} className=" btn btn-success btn-outline">Payment Success</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WithdrawRequest;