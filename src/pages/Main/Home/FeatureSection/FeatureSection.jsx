import { FaCoins, FaDollarSign, FaTasks } from "react-icons/fa";

const FeatureSection = () => {
    return (
        <div className=" my-8">
            <h1 className=" text-center text-2xl my-3">Feature</h1>
            <div className=" md:grid grid-cols-3 gap-6">
                <div className=" border rounded-lg p-4">
                    <div className="flex gap-3 text-lg mb-1">
                        <FaCoins></FaCoins>
                        <span>Complete task and earn coins</span>
                    </div>
                    <p>You can earn a handsome amount by completing your task. the more you complete your task, the more you earn coins</p>
                </div>
                <div className=" border rounded-lg p-4">
                    <div className="flex gap-3 text-lg mb-1">
                        <FaTasks></FaTasks>
                        <span>Create and manage tasks</span>
                    </div>
                    <p>You can easily create a task of your need. You can also manage it in very easy way. </p>
                </div>
                <div className=" border rounded-lg p-4">
                    <div className="flex gap-3 text-lg mb-1">
                        <FaDollarSign></FaDollarSign>
                        <span>Secure Payments</span>
                    </div>
                    <p>Your payment is secure with us We are running this with sincerely since 2015.</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;