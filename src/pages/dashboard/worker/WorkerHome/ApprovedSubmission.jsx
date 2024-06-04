
const ApprovedSubmission = () => {
    return (
        <div>
            <div className="overflow-x-auto my-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Title</th>
                            <th>Payable Amount</th>
                            <th>Creator Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        {/* {
                            foods.map((food, idx) => <tr key={food?._id}>
                                <td>{idx + 1}</td>
                                <td>{food?.food_name}</td>
                                <td>{food?.quantity}</td>
                                <td>
                                    {new Date(food?.expired_date).toLocaleDateString()}
                                </td>
                                <td></td>
                            </tr>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovedSubmission;