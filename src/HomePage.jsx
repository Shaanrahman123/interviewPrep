import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">JavaScript Concepts</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/global-execution-context">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              global execution context
            </h2>
          </div>
        </Link>
        <Link to="/memory-cache">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              heap, stack memory,cache
            </h2>
          </div>
        </Link>
        <Link to="/closure">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">Closure</h2>
          </div>
        </Link>
        <Link to="/event-loop">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">Event loop</h2>
          </div>
        </Link>
        <Link to="/promise">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              Promise & Async/Await
            </h2>
          </div>
        </Link>
        <Link to="/array-methods">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            {/* <h2 className="text-xl font-semibold text-wrap">Array methods</h2> */}
            <span>(map, foreach, filter, reduce, slice, splice)</span>
          </div>
        </Link>
        <Link to="/callapplybind">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">Call apply bind</h2>
          </div>
        </Link>
        <Link to="/memoization">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">memoization</h2>
          </div>
        </Link>
        <Link to="/hof-callback">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">hof-callback</h2>
          </div>
        </Link>
        <Link to="/how-js-works">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">JS Working</h2>
          </div>
        </Link>
        <Link to="/hoisting">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">Hoisting</h2>
          </div>
        </Link>
        <Link to="/debounce-throttle">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              Debouce/throttle
            </h2>
          </div>
        </Link>
        <Link to="/polyfills">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">Polyfills</h2>
          </div>
        </Link>
        <Link to="/dom">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">DOM</h2>
          </div>
        </Link>
        <Link to="/oops">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">OOPs</h2>
          </div>
        </Link>
        <Link to="/spread-rest-destructuring">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              Spread/Rest & Destructuring
            </h2>
          </div>
        </Link>
        <Link to="/thiskeyword">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">this keyword</h2>
          </div>
        </Link>
        <Link to="/shallowdeep">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              shallow deep copy
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
