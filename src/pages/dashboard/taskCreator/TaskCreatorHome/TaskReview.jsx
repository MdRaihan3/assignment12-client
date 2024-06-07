import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../useHooks/useAuth";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";
import Swal from "sweetalert2";

const TaskReview = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: allSubmissions = [], refetch } = useQuery({
        queryKey: ['tasks'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/submission/creatorEmail/${user?.email}`)
            return data
        }
    })
    const submissions = allSubmissions.filter(s => s?.status === 'pending')
    console.log(submissions);

    const handleApprove = async (submission) => {
        const workerInfo = {
            workerEmail: submission?.workerEmail,
            coin: submission?.payableAmount
        }

        axiosSecure.patch(`/approve/${submission?._id}`, workerInfo)
            .then(res => {
                console.log(res.data)
                if (res.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire({ icon: 'success', text: 'This submission is approved' })
                }
            })
    }

    const handleReject = async (id) => {
        axiosSecure.patch(`/reject/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire({ icon: 'success', text: 'This submission is rejected' })
                }
            })
    }

    return (
        <div className=" my-12">
            <h1 className=" text-center text-2xl mt-3">Task To Review</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Worker Name and Email</th>
                            <th>Task Title</th>
                            <th>Payable Amount</th>
                            <th>View Submission</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submissions.map((s, idx) =>
                                <tr key={s?._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div>
                                            <div className="font-bold">{s?.workerName}</div>
                                            <div className="text-sm opacity-50">{s?.workerEmail}</div>
                                        </div>
                                    </td>
                                    <td>{s?.taskTitle}</td>
                                    <td>{s?.payableAmount}</td>
                                    <td><button className=" btn btn-outline btn-primary">View Submission</button></td>
                                    <td><button onClick={() => handleApprove(s)} className=" btn btn-outline btn-success">Approve</button></td>
                                    <td><button onClick={() => handleReject(s?._id)} className=" btn btn-outline btn-warning">Reject</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskReview;