import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateMyTask = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const task = useLoaderData()
    const { taskTitle, taskDetail, submissionInfo } = task
    console.log(task)

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const taskTitle = form.taskTitle.value;
        const taskDetail = form.taskDetail.value;
        const submissionInfo = form.submissionInfo.value;
        const taskData = { taskTitle, taskDetail, submissionInfo }
        console.log(taskData)
        axiosSecure.patch(`/task/update/${task?._id}`, taskData)
            .then(res => {
                console.log(res.data)
                if(res.data?.modifiedCount > 0){
                    navigate('/dashboard/myTasks')
                    Swal.fire({icon: 'success', text:'Data Updated Successfully'})
                }
            })
    }

return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update My Task</h1>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input name="taskTitle" type="text" defaultValue={taskTitle} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Details</span>
                            </label>
                            <input name="taskDetail" type="text" defaultValue={taskDetail} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Submission Info</span>
                            </label>
                            <input name="submissionInfo" type="text" defaultValue={submissionInfo} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
};

export default UpdateMyTask;