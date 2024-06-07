import { FaCoins, FaDollarSign, FaTasks } from "react-icons/fa";
import useRole from "../../../../useHooks/useRole";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";
import useAuth from "../../../../useHooks/useAuth";

const TaskCreatorHomeState = () => {
    const axiosSecure = useAxiosSecure()
    const [, , userDB] = useRole()
    const { user } = useAuth()

    const { data = {} } = useQuery({
        queryKey: ['task-state'],
        // enabled: !userDB?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/task-creator-state/${user?.email}`)
            return res.data
        }
    })
    console.log(data);

    return (
        <div className=" my-8">
            <h1 className=" text-center text-xl mb-3">States</h1>
            <div className=" md:grid grid-cols-3 gap-6">
                <div className=" border rounded-lg p-4 flex flex-col justify-center items-center text-xl">
                    <FaCoins className=" text-3xl text-red-300 mb-5"></FaCoins>
                    <p>{userDB.coin}</p>
                    <p>Available Coin</p>
                </div>
                <div className=" border rounded-lg p-4 flex flex-col justify-center items-center text-xl">
                    <FaTasks className=" text-3xl text-red-300 mb-5"></FaTasks>
                    <p>{data?.totalQuantity}</p>
                    <p>Pending Task</p>
                </div>
                <div className=" border rounded-lg p-4 flex flex-col justify-center items-center text-xl">
                    <FaDollarSign className=" text-3xl text-red-300 mb-5"></FaDollarSign>
                    <p>{data?.totalPayment} $</p>
                    <p>Total Paid</p>
                </div>
            </div>
        </div>
    );
};

export default TaskCreatorHomeState;