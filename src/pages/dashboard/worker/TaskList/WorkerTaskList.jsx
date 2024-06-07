import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";
import { Link } from "react-router-dom";

const WorkerTaskList = () => {
    const axiosSecure = useAxiosSecure()

    const { data: tasks = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/task-list')
            return res.data
        }
    })
    console.log(tasks);

    return (
        < div className=" my-8">
            <div className=" md:grid grid-cols-2 gap-6">
                {
                    tasks.map(task =>
                        <div key={task?._id} className=" border rounded-md p-4 space-y-1">
                            <h1 className=" text-xl">{task?.taskTitle}</h1>
                            <hr className=" mb-4" />
                            <p>Creator Name: {task?.creatorName}</p>
                            <p>Completion Date(mm/dd/yy): {new Date(task?.completionDate).toLocaleDateString()}</p>
                            <p>Payable Amount(coin): {task?.payableAmount}</p>
                            <p>Task Quantity: {task?.taskQuantity}</p>
                            <Link to={`/dashboard/taskDetail/${task?._id}`}>
                                <button className=" btn btn-outline btn-accent">View Details</button>
                            </Link>
                        </div>)
                }

            </div>
        </div >
    );
};

export default WorkerTaskList;