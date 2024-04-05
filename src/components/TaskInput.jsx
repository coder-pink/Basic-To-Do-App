
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/actions';
import './TaskInput.css'; 

const TaskInput = () => {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskText.trim() !== '') {
            dispatch(addTask({ id: Date.now(), text: taskText }));
            setTaskText('');
        }
    };

    return (
        <div className="task-input-container">
            <input
                className="task-input"
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddTask();
                }}
            />
            <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
