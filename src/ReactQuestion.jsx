import React from "react";
import { Link } from "react-router-dom";

export default function ReactQuestion() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">React Questions</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/todo1">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap"> Todo 1</h2>
            <span>add complete delete</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
