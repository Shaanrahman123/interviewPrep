import React, { useState } from "react";

const TodoPage = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        📝 React Todo App with Source Code
      </h1>

      {/* Live App */}
      <div className="bg-white shadow-md rounded p-4 mb-10 max-w-2xl mx-auto">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 border px-4 py-2 rounded"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-2 rounded"
            >
              <span
                className={`flex-1 ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => toggleComplete(index)}
                className="bg-yellow-500 text-white px-2 py-1 rounded text-sm mr-2 hover:bg-yellow-600"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Code Display */}
      <h2 className="text-2xl font-semibold text-green-700 mb-2 text-center">
        💻 Source Code of This Todo App
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`import React, { useState } from "react";

const TodoCompletePage = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        📝 React Todo App with Source Code
      </h1>

      <div className="bg-white shadow-md rounded p-4 mb-10 max-w-2xl mx-auto">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 border px-4 py-2 rounded"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-2 rounded"
            >
              <span
                className={\`flex-1 \${todo.completed ? "line-through text-gray-500" : ""}\`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => toggleComplete(index)}
                className="bg-yellow-500 text-white px-2 py-1 rounded text-sm mr-2 hover:bg-yellow-600"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoCompletePage;`}
      </pre>
    </div>
  );
};

export default TodoPage;
