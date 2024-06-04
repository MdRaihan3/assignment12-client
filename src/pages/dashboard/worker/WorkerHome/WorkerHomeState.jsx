import { FaCoins } from "react-icons/fa";

const WorkerHomeState = () => {
    return (
        <div className=" my-8">
            <h1 className=" text-2xl my-3 text-center">States</h1>
            <div className=" grid grid-cols-3 gap-6">
                <div className=" border rounded-lg p-5 flex flex-col justify-center items-center">                  
                    <p className=" text-xl mb-3">Available Coins</p>
                    <div className=" flex justify-center items-center text-lg">
                    <FaCoins className=" text-2xl mr-2"></FaCoins>
                    <span>101</span>
                    </div>
                </div>
                <div className=" border rounded-lg p-5 flex flex-col justify-center items-center">                  
                    <p className=" text-xl mb-3">Total Submission</p>
                    <div className=" flex justify-center items-center text-lg">
                    <FaCoins className=" text-2xl mr-2"></FaCoins>
                    <span>101</span>
                    </div>
                </div>
                <div className=" border rounded-lg p-5 flex flex-col justify-center items-center">                  
                    <p className=" text-xl mb-3">Total Earning</p>
                    <div className=" flex justify-center items-center text-lg">
                    <FaCoins className=" text-2xl mr-2"></FaCoins>
                    <span>101</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WorkerHomeState;