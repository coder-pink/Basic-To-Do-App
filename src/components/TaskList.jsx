
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions/actions';
import './TaskList.css'; 

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <li key={task.id} className="task-item">
                    <span>{task.text}</span>
                    <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
