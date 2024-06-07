import { useQuery } from "@tanstack/react-query";
import { FaCoins, FaDollarSign, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";

const AdminHomeState = () => {
    const axiosSecure = useAxiosSecure()

    const { data: states = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-state')
            return res.data
        }
    })
    return (
        <div className=" my-8">
            <h1 className=" text-2xl my-3 text-center">States</h1>
            <div className=" md:grid grid-cols-3 gap-6">
                <div className=" border rounded-lg p-5 flex flex-col justify-center items-center">
                    <p className=" text-xl mb-3">Total User</p>
                    <div className=" flex justify-center items-center text-lg">
                        <FaUsers className=" text-2xl mr-2"></FaUsers>
                        <span>{states?.totalUser}</span>
                    </div>
                </div>
                <div className=" border rounded-lg p-5 flex flex-col justify-center items-center">
                    <p className=" text-xl mb-3">Total Coin</p>
                    <div className=" flex justify-center items-center text-lg">
                        <FaCoins className=" text-2xl mr-2"></FaCoins>
                        <span>{states?.totalCoin}</span>
                    </div>
                </div>
                <div className=" border rounded-lg p-5 flex flex-col justify-center items-center">
                    <p className=" text-xl mb-3">Total Payment</p>
                    <div className=" flex justify-center items-center text-lg">
                        <FaDollarSign className=" text-2xl mr-2"></FaDollarSign>
                        <span>{states?.totalPayment}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminHomeState;