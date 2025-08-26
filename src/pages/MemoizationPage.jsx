import React from "react";

export default function MemoizationPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-700">
        ⚡ Memoization in JavaScript
      </h1>

      <p className="text-gray-700 mb-4">
        <strong>Memoization</strong> is an optimization technique that speeds up
        function calls by caching the result based on its input parameters. If
        the function is called again with the same arguments, the cached result
        is returned instead of recalculating.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">
        🧠 Why Use Memoization?
      </h2>
      <p className="text-gray-700 mb-4">
        It’s especially useful for expensive or repeated operations (e.g.,
        recursive functions, API calls, complex calculations).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">
        💡 Code Example
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`function memoizedAddTo256(){
  var cache = {};

  return function(num){
    if(num in cache){
      console.log("cached value");
      return cache[num]
    } else {
      cache[num] = num + 256;
      return cache[num];
    }
  }
}

var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-500">
        📦 Explanation:
      </h3>
      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-2">
        <li>
          The function <code>memoizedAddTo256</code> returns an inner function
          that performs the addition.
        </li>
        <li>
          It checks if the result for a given <code>num</code> already exists in{" "}
          <code>cache</code>.
        </li>
        <li>
          If it exists, it returns the cached result and logs “cached value”.
        </li>
        <li>
          If not, it computes <code>num + 256</code>, stores it in the cache,
          and returns the result.
        </li>
      </ul>

      <div className="bg-gray-100 text-gray-800 p-4 rounded font-mono text-sm">
        memoizedFunc(20);{" "}
        <span className="text-green-600">// ➜ 276 (computed)</span>
        <br />
        memoizedFunc(20);{" "}
        <span className="text-green-600">// ➜ 276 (cached)</span>
      </div>

      <p className="text-gray-700 mt-6">
        Memoization is a powerful tool to reduce redundant computations and
        improve performance in your JavaScript code, especially when working
        with pure functions.
      </p>
    </div>
  );
}
