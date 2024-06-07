import { useLoaderData } from "react-router-dom";
import useAuth from "../../../../useHooks/useAuth";
import useAxiosPublic from "../../../../useHooks/useAxiosPublic";
import Swal from "sweetalert2";

const TaskDetail = () => {
    const task = useLoaderData()
    const axiosPublic = useAxiosPublic()
    console.log(task);
    const { taskTitle, taskDetail, taskQuantity, payableAmount, submissionInfo, completionDate, creatorName, creatorEmail, taskImage } = task
    const { user } = useAuth()
    console.log(user);

    const handleSubmit = async e => {
        e.preventDefault()
        const submissionDetail = e.target.submissionDetail?.value;
        const submissionData = {
            submissionDetail,
            taskId: task?._id,
            workerName: user?.displayName,
            workerEmail: user?.email,
            submissionDate: new Date(),
            status: 'pending',
            taskTitle, taskDetail, taskQuantity, payableAmount, submissionInfo, completionDate, creatorName, creatorEmail, taskImage
        }
        console.log(submissionData);
        axiosPublic.post('/submission', submissionData)
        .then(res => {
            console.log(res.data)
            if(res.data?.insertedId){
                Swal.fire({icon: 'success', text:'Submitted successfully'})
            }
        })
    }

    // task_detail
    // task_img_url
    // payable_amount
    // worker_email
    // submission_details
    // worker_name 
    // creator_name
    // creator_email
    // current_date
    // status
    // Pending/ approved / rejected 


    {/* task_id
            ● task_title
            ● task_detail
            ● task_img_url
            ● payable_amount
            ● worker_email
            ● submission_details
            ● worker_name
            ● creator_name
            ● creator_email
            ● current_date
            ● status ( pending ) */}

    return (
        <div>

            <div className=" border max-w-xl mx-auto p-4 my-8 rounded-md">
                <div className=" flex justify-center w-full mt-4 mb-3">
                    <img className=" w-8 h-8 rounded-full" src={task?.taskImage} alt="" />
                    <h1 className=" text-2xl ml-3">{task?.taskTitle}</h1>
                </div>

                <div className=" md:grid grid-cols-2 space-y-1">
                    <p>Creator Name: {task?.creatorName}</p>
                    <p>Creator Eamil: {task?.creatorEmail}</p>
                    <p>Task Detail: {task?.taskDetail}</p>
                    <p>Submission Detail: {task?.submissionInfo}</p>
                    <p>Payable Amount(coin): {task?.payableAmount}</p>
                    <p>Task Quantity: {task?.taskQuantity}</p>
                    <p>Completion Date: {new Date(task?.completionDate).toLocaleDateString()}</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label className="label">
                            <span className="text-lg mt-6">Submission Details:</span>
                        </label>
                        <textarea name="submissionDetail" id="" className=" textarea  textarea-bordered"></textarea>
                        <br />
                        <button type="submit" className=" btn btn-outline btn-success">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default TaskDetail;