"use client";
import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function addTask(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim()) {
      setTasks([input, ...tasks]);
      setInput("");
    }
  }

  function removeTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-xl p-6 shadow border border-gray-100 dark:border-gray-800 transition-colors">
      <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Simple To-Do List</h4>
      <form className="flex gap-2 mb-3" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white font-semibold transition"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {tasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 italic">No tasks yet!</li>
        ) : (
          tasks.map((task, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-2 rounded shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <span>{task}</span>
              <button
                aria-label="Remove task"
                className="ml-3 text-red-500 hover:text-red-700 text-xs font-bold"
                onClick={() => removeTask(idx)}
                type="button"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
