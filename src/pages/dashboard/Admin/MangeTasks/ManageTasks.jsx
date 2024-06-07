import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageTasks = () => {
    const axiosSecure = useAxiosSecure()

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['allTasks'],
        queryFn: async () => {
            const res = await axiosSecure.get('/tasks/get')
            return res.data
        }
    })

    const handleDeleteTask = (task) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/tasks/${task?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
           <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Title</th>
                            <th>Task Quantity</th>
                            <th>Payable Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.length > 0 &&
                            tasks.map((task, idx) =>
                                <tr key={task?._id}>
                                    <th>{idx + 1}</th>
                                    <th>{task?.taskTitle}</th>
                                    <th>{task?.taskQuantity}</th>
                                    <th>{task?.payableAmount}</th>
                                    <th>
                                        <button onClick={() => handleDeleteTask(task)}><FaTrashAlt className=" text-red-600 text-lg"></FaTrashAlt></button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTasks;