import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from '../../../../useHooks/useAxiosSecure'
import { useState } from "react";

const ManageUsers = () => {
    const [selected, setSelected] = useState('')
    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleUpdateUserRole = async (e, user) => {
        const updatedRole = e.target.value
        setSelected(updatedRole)
        console.log(typeof(updatedRole), updatedRole);
        try {
            axiosSecure.patch(`users/updateRole/${user?._id}`, {updatedRole})
                .then(res => {
                    console.log(res.data);
                    if (res.data?.modifiedCount > 0) {
                        refetch()
                        Swal.fire({ text: `${user?.email} is ${selected} now`, icon: 'success' })
                    }
                })
        } catch (err) {
            Swal.fire({ icon: 'error' })
            console.log('errorrrrr', err);
        }

    }

    const handleDeleteUser = (user) => {
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
                axiosSecure.delete(`/users/delete/${user?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
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
                            <th>Image asfasd</th>
                            <th>Name asdfasd</th>
                            <th>Email</th>
                            <th>Coin</th>
                            <th>User Role</th>
                            <th>Update Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user?._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="avatar mask mask-squircle w-12 h-12">
                                        <img src={user?.image} /> </div>
                                </td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.coin}</td>
                                <td>{user?.role}</td>
                                <td>
                                    {
                                         user?.role === "admin" ? 'Admin' :
                                         <select value={selected} onChange={(e) => handleUpdateUserRole(e, user)}>
                                        <option value={''} disabled>Update Role</option>
                                        <option value={"admin"}>Admin</option>
                                        <option value={"taskCreator"}>Task Creator</option>
                                        <option value={"worker"}>Worker</option>
                                    </select>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className=" text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;