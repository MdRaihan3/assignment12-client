import { FaDollarSign, FaRegistered, FaTasks } from "react-icons/fa";

const HowItWorkSection = () => {
    return (
        <div>
            <div className=" my-8">
                <h1 className=" text-center text-2xl my-3">How It Work</h1>
                <div className=" grid grid-cols-3 gap-6">
                    <div className=" border rounded-lg p-4">
                        <div className="flex gap-3 text-lg mb-1">
                            <FaRegistered></FaRegistered>
                            <span>Register your email</span>
                        </div>
                        <p>Register your email with name, image and password. You can also use gmail. After register you can create or complete task.</p>
                    </div>
                    <div className=" border rounded-lg p-4">
                        <div className="flex gap-3 text-lg mb-1">
                            <FaTasks></FaTasks>
                            <span>Complete tasks</span>
                        </div>
                        <p>There are more than 500k+ tasks. So complete your tasks and earn coins. </p>
                    </div>
                    <div className=" border rounded-lg p-4">
                        <div className="flex gap-3 text-lg mb-1">
                            <FaDollarSign></FaDollarSign>
                            <span>Earn Rewards</span>
                        </div>
                        <p>Complete your task in time. The more you complete your task, the more you earn rewards.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorkSection;