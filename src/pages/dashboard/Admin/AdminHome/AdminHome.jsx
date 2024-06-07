import AdminHomeState from "./AdminHomeState";
import WithdrawRequest from "./WithdrawRequest";

const AdminHome = () => {
    return (
        <div>
            <AdminHomeState></AdminHomeState>
            <WithdrawRequest></WithdrawRequest>
        </div>
    );
};

export default AdminHome;