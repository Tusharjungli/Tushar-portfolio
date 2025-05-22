"use client";
import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-900 dark:bg-gray-700 p-6 rounded-xl shadow mb-6">
      <h4 className="text-xl font-bold mb-2">Simple To-Do List</h4>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 px-2 py-1 rounded border border-gray-600 bg-gray-800 text-white"
          placeholder="Add a task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white font-bold"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.length === 0 && (
          <li className="text-gray-400 italic">No tasks yet!</li>
        )}
        {tasks.map((task, i) => (
          <li key={i} className="bg-gray-800 p-2 rounded">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
