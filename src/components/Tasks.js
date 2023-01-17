import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {      
    return (
        // usestate is mutable cant change by- tasks.push()
        // to do that we do - setTasks([...tasks,{}])
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete}
                onToggle={onToggle}
                />
            ))}
        </>
    );
};

export default Tasks;
