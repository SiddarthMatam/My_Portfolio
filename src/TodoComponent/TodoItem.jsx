import "./Todo.css";

function TodoItem({ todo, deleteTodo }) {
    const { id, title } = todo;

    return (
        <div className="todo-item">
            <p className="todo-title">{title}</p>
            <button className="delete-btn" onClick={() => deleteTodo(id)}>
                Delete
            </button>
        </div>
    );
}

export default TodoItem