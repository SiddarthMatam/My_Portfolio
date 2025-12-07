import { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";

export default function Todo() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task.trim() === "") {
            return;
        }

        const newTodo = {
            id: Date.now(),
            title: task,
        };

        setTodos([...todos, newTodo]);
        setTask("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(each => each.id !== id));
    };

    return (
        <div className="todo-container">
            <h1 className="todo-heading">To-Do List</h1>
            <div className="input-row">
                <input
                    className="todo-input"
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTodo();
                        }
                    }}
                />
                <button className="add-btn" onClick={addTodo}>
                    Add
                </button>
            </div>
            <div className="todo-list">
                {todos.map(each => (
                    <TodoItem
                        key={each.id}
                        todo={each}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
}
