import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";
import useAuth from "../../../../useHooks/useAuth";

const MySubmission = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: submissions = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/submission/${user?.email}`)
            return res.data
        }
    })
    console.log(submissions);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task Title</th>
                            <th>Task Creator Email</th>
                            <th>Payable Amount(coin)</th>
                            <th>Status</th>
                            <th>Completion Date</th>
                            <th>Submission Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submissions.map((s, idx)=>
                                <tr key={s?._id}>
                                    <th>{idx+1}</th>
                                    <td>{s?.taskTitle}</td>
                                    <td>{s?.creatorEmail}</td>
                                    <td>{s?.payableAmount}</td>
                                    <td>{s?.status}</td>
                                    <td>{new Date(s?.completionDate).toLocaleDateString()}</td>
                                    <td>{new Date(s?.submissionDate).toLocaleDateString()}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySubmission;