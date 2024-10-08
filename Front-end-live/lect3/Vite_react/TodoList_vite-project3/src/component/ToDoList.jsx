import { useState } from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleClick = () => {
        const id = Math.floor(Math.random() * 1000);
        setTodos([...todos, { id, task, status: 'pending' }]);
        setTask('');
    };

    const updateTask = (id) => {
        setTodos(todos.map(item => {
            if (item.id === id) {
                return { ...item, status: 'completed' };
            }
            return item;
        }));
    };

    const deleteTask = (id) => {
        setTodos(todos.filter(item => item.id !== id));
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter your Task" 
                onChange={handleChange} 
                value={task || ''} 
            />
            <button onClick={handleClick}>Add task</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.task} ---- {todo.status}
                        <button onClick={() => updateTask(todo.id)}>Update</button>
                        <button onClick={() => deleteTask(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
