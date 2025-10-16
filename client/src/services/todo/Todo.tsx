import { useEffect, useState } from "react";
import "./Todo.scss";

const Task: React.FC = () => {
  interface Todo {
    id: number;
    title: string;
    url: string;
  }

  const [tasks, setTasks] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!title.trim() || !imgUrl.trim()) {
      alert("Please fill in both text and image URL");
      return;
    }

    const newTask: Todo = {
      id: Date.now(),
      title,
      url: imgUrl,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTitle("");
    setImgUrl("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <section className="todo-body-section">
      <div className="todo-container">
        <h1 className="todo-title">
          📋 You can also create your own product card
        </h1>

        <div className="input-group">
          <input
            className="todo-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
          />
          <input
            className="todo-input"
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder="Image URL"
          />
          <button className="add-btn" onClick={addTask}>
            ➕ Add
          </button>
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li className="task-item" key={task.id}>
              <img className="task-image" src={task.url} alt={task.title} />
              <span className="task-text">{task.title}</span>
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
                title="Delete task"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Task;
