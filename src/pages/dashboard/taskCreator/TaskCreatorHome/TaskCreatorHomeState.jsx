import { FaCoins } from "react-icons/fa";
import useRole from "../../../../useHooks/useRole";

const TaskCreatorHomeState = () => {
    const [ , , userDB] = useRole()
    return (
        <div>
            <div className=" grid grid-cols-3 gap-6">
                <div className=" border rounded-lg p-4 flex flex-col justify-center items-center text-xl">
                    <FaCoins className=" text-3xl text-red-300 mb-5"></FaCoins>
                    <p>{userDB.coin}</p>
                    <p>Available Coin</p>
                </div>                
                <div className=" border rounded-lg p-4 flex flex-col justify-center items-center text-xl">
                    <FaCoins className=" text-3xl text-red-300 mb-5"></FaCoins>
                    <p>abadaba</p>
                    <p>Pending Task</p>
                </div>                
                <div className=" border rounded-lg p-4 flex flex-col justify-center items-center text-xl">
                    <FaCoins className=" text-3xl text-red-300 mb-5"></FaCoins>
                    <p>gabadaba</p>
                    <p>Total Paid</p>
                </div>                
            </div>
        </div>
    );
};

export default TaskCreatorHomeState;