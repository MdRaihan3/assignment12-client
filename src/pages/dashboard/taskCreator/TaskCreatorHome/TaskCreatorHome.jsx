import TaskCreatorHomeState from "./TaskCreatorHomeState";
import TaskReview from "./TaskReview";

const TaskCreatorHome = () => {
    return (
        <div>
            <TaskCreatorHomeState></TaskCreatorHomeState>
            <TaskReview></TaskReview>
        </div>
    );
};

export default TaskCreatorHome;