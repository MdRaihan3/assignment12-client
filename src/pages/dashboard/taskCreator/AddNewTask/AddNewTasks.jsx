import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import useAuth from "../../../../useHooks/useAuth";
import useAxiosPublic from "../../../../useHooks/useAxiosPublic";
import Swal from 'sweetalert2'
import useRole from "../../../../useHooks/useRole";

const imageHostingApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`

const AddNewTasks = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [ , , userDB] = useRole()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [startDate, setStartDate] = useState(new Date())

    const handleAddNewTask = async (data) => {
        if ((data?.payableAmount*data?.taskQuantity) > userDB?.coin) {
            Swal.fire({
                icon: 'error',
                text: 'Not enough coin!!'
            })
            return 
        }

        const imageFile = { image: data.image[0] }
        const res = await axios.post(imageHostingApi, imageFile, {
            headers: { "content-type": 'multipart/form-data' }
        })
        console.log(res?.data?.data?.display_url);
        const taskInfo = {
            creatorEmail: user?.email,
            creatorName: user?.displayName,
            taskTitle: data?.taskTitle, taskDetail: data?.taskDetail,
            taskQuantity: parseInt(data?.taskQuantity),
            payableAmount: parseInt(data?.payableAmount),
            submissionInfo: data?.submissionInfo,
            taskImage: res?.data?.data?.display_url,
            completionDate: startDate,
            currentTime: new Date()
        }
        console.log(taskInfo);
        axiosPublic.post('/tasks', taskInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({ icon: 'success', text: 'Task Added Successfully' })
                }
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleAddNewTask)} className="card-body ">
                            <div className="md:grid grid-cols-2 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Task Title</span>
                                    </label>
                                    <input type="text" placeholder="Task Title"
                                        {...register("taskTitle", { required: true })}
                                        className="input input-bordered" />
                                    {errors.taskTitle === 'required' && <p className=' text-red-600'>Task Title is required </p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Task Detail</span>
                                    </label>
                                    <input type="text" placeholder="Task Detail"
                                        {...register("taskDetail", { required: true })}
                                        className="input input-bordered" />
                                    {errors.taskDetail?.type === 'required' && <p className=' text-red-600'>Task Detail is required </p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Task Quantity</span>
                                    </label>
                                    <input type="number" placeholder="Task Quantity"
                                        {...register("taskQuantity", { required: true })}
                                        className="input input-bordered" />
                                    {errors.taskQuantity?.type === 'required' && <p className=' text-red-600'>Task Quantity is required </p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Payable Amount(coin)</span>
                                    </label>
                                    <input type="text" placeholder="Payable Amount"
                                        {...register("payableAmount", { required: true })}
                                        className="input input-bordered" />
                                    {errors.payableAmount?.type === 'required' && <p className=' text-red-600'>Payable Amount is required </p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Submission Info</span>
                                    </label>
                                    <input type="text" placeholder="Submission Info"
                                        {...register("submissionInfo", { required: true })}
                                        className="input input-bordered" />
                                    {errors.submissionInfo?.type === 'required' && <p className=' text-red-600'>Submission Info is required </p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Completion Date(mm/dd/yy)</span>
                                    </label>
                                    <DatePicker className="pl-3 py-3 border rounded-md input-bordered bg-transparent bg-opacity-10"
                                        selected={startDate} onChange={(date) => {
                                            setStartDate(date)
                                        }}></DatePicker>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="file" {...register("image", { required: true })} />
                                    {errors.password?.type === 'required' && <p className=' text-red-600'>Image is required </p>}
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewTasks;