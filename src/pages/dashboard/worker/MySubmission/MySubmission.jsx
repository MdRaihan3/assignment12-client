import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../useHooks/useAxiosSecure";
import useAuth from "../../../../useHooks/useAuth";
import './WorkerSubmission.css'
import { useState } from "react";

const MySubmission = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [currentPage, setCurrentPage] = useState(1)

    const { data: allSubmissionsCount = {} } = useQuery({
        queryKey: ['all-sub'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/mySubmissionCount?email=${user?.email}`)
            return res.data?.totalSubmissionCount
        }
    }) 
    console.log(allSubmissionsCount);

    const { data: submissions = [], refetch } = useQuery({
        queryKey: ['pagination'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/mySubmissions?email=${user?.email}&currentPage=${currentPage-1}`)
            return res.data
        }
    })
    console.log(submissions);

    const itemsPerPage = 2
    let numOfPages = 1;
    if (allSubmissionsCount > 2) { numOfPages = Math.ceil(allSubmissionsCount / itemsPerPage) }
    const pages = [...Array(numOfPages).keys()]
    console.log(pages);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            refetch()
        }
    }

    const handleNextPage = () => {
        if(currentPage < numOfPages){
            setCurrentPage(currentPage + 1)
            refetch()
        }     
    }

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
                            submissions.length > 0 &&
                            submissions.map((s, idx) =>
                                <tr key={s?._id}>
                                    <th>{idx + 1}</th>
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
            <div className="pagination my-3 ">
                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === (page + 1) ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page + 1)}
                        key={page}>{page + 1}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
            </div>

        </div>
    );
};

export default MySubmission;