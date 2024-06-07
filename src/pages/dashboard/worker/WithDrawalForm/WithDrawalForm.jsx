import { useForm } from "react-hook-form";
import useRole from "../../../../useHooks/useRole";
import Swal from "sweetalert2";

// import useAuth from "../../../../useHooks/useAuth";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";

const WithDrawalForm = () => {
    const [, , userDB] = useRole()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure()

    const coinWithdraw = watch('coinToWithdraw')
    let withdraw_amount = 0
    if (coinWithdraw > 0) { withdraw_amount = parseFloat(coinWithdraw / 20) }

    const handleWithDraw = async (data) => {
        const coinToWithdraw = parseInt(data?.coinToWithdraw)
        if (userDB?.coin < 1) {
            Swal.fire({ text: 'Not enough coin', icon: 'error' })
            return;
        }
        if (coinToWithdraw < 1) {
            Swal.fire({ text: 'Not enough coin', icon: 'error' })
            return;
        }
        if (coinToWithdraw > userDB?.coin) {
            Swal.fire({ text: 'Not enough coin', icon: 'error' })
            return;
        }
        const withdrawAmount = parseFloat(coinToWithdraw/20)
        const paymentSystem = data?.selectPaymentSystem
        const accountNumber = data?.accountNumber
        const workerName = userDB?.name;
        const workerEmail = userDB?.email;
        const withdrawalRequestTime = new Date()

        const withdrawalInfo = {
            workerName, workerEmail, coinToWithdraw, withdrawAmount, paymentSystem, withdrawalRequestTime, accountNumber
        }
        axiosSecure.post('/withdraw', withdrawalInfo)
        .then(res => {
            if(res.data?.insertedId){
                Swal.fire({ text: 'Requested successfully', icon: 'success' })
            }
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Withdrawal Form</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleWithDraw)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Coin to WithDraw</span>
                                </label>
                                <input type="number" placeholder="Coin to WithDraw"
                                    {...register("coinToWithdraw", {  required: true })}
                                    className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className=' text-red-600'>Name is required </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Withdraw Amount(US dollar)</span>
                                </label>
                                <input value={withdraw_amount}
                                    {...register("withdrawAmount")}
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Payment System</span>
                                </label>
                                <select {...register("selectPaymentSystem")}>
                                    <option value={'bkash'}>Bkash</option>
                                    <option value={'nagad'}>Nagad</option>
                                    <option value={'rocket'}>Rocket</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Account Number</span>
                                </label>
                                <input type="number" placeholder="Account Number"
                                    {...register("accountNumber", { min: { value: 0 }, required: true })}
                                    className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className=' text-red-600'>Account number is required </p>}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Withdraw</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithDrawalForm;