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
        <Link to="/counter">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              {" "}
              counter reducer
            </h2>
            <span>incre decre reset</span>
          </div>
        </Link>
        <Link to="/searchfilter">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap"> Search filter</h2>
            <span>search textbox filter</span>
          </div>
        </Link>
        <Link to="/searchfilterapi">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              api Search filter
            </h2>
            <span>search api filter</span>
          </div>
        </Link>
        <Link to="/stopwatch">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">stop watch</h2>
            <span>start stop reset</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
