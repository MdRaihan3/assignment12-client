import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const PurchaseCoin = () => {
    return (
        <div>
            <h1 className=" text-3xl text-center mt-6 mb-3 ">Purchase Coin</h1>
            <div className=" md:grid grid-cols-4 my-6 gap-5">
                <Link to={'/dashboard/payment/1'}>
                    <div className=" text-center space-y-3 border border-orange-400 rounded-lg p-3">
                        <h1 className=" text-2xl"><span className=" text-orange-400">10 </span>Coin</h1>
                        <FaCoins className=" text-amber-400 text-4xl text-center w-full"></FaCoins>
                        <button className=" btn btn-outline btn-warning">Purchase $1</button>
                    </div>
                </Link>
                <Link to={'/dashboard/payment/9'}>
                    <div className=" text-center space-y-3 border border-orange-400 rounded-lg p-3">
                        <h1 className=" text-2xl"><span className=" text-orange-400">100 </span>Coin</h1>
                        <FaCoins className=" text-amber-400 text-4xl text-center w-full"></FaCoins>
                        <button className=" btn btn-outline btn-warning">Purchase $9</button>
                    </div>
                </Link>
                <Link to={'/dashboard/payment/19'}>
                    <div className=" text-center space-y-3 border border-orange-400 rounded-lg p-3">
                        <h1 className=" text-2xl"><span className=" text-orange-400">500 </span>Coin</h1>
                        <FaCoins className=" text-amber-400 text-4xl text-center w-full"></FaCoins>
                        <button className=" btn btn-outline btn-warning">Purchase $19</button>
                    </div>
                </Link>
                <Link to={'/dashboard/payment/39'}>
                    <div className=" text-center space-y-3 border border-orange-400 rounded-lg p-3">
                        <h1 className=" text-2xl"><span className=" text-orange-400">1000 </span>Coin</h1>
                        <FaCoins className=" text-amber-400 text-4xl text-center w-full"></FaCoins>
                        <button className=" btn btn-outline btn-warning">Purchase $39</button>
                    </div>
                </Link>




            </div>
        </div>
    );
};

export default PurchaseCoin;