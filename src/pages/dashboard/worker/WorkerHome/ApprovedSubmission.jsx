import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../useHooks/useAuth";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";

const ApprovedSubmission = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()


    const { data: allSubmissions = [] } = useQuery({
        queryKey: ['tasks'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/submission/${user?.email}`)
            return data
        }
    })

    const submissions = allSubmissions.filter(s => s?.status === 'approve')
    console.log(submissions);

    return (
        <div className=" my-10">
            <h1 className=" mb-3 text-center text-2xl">Approved Submission</h1>
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

export default ApprovedSubmission;