import ApprovedSubmission from "./ApprovedSubmission";
import WorkerHomeState from "./WorkerHomeState";

const WorkersHome = () => {
    return (
        <div>
            <WorkerHomeState></WorkerHomeState>
            <ApprovedSubmission></ApprovedSubmission>
        </div>
    );
};

export default WorkersHome;