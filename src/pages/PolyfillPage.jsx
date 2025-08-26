import React from "react";

export default function PolyfillPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">
        🛠️ Polyfills in JavaScript
      </h1>

      <p className="text-gray-700 mb-4">
        A <strong>polyfill</strong> is custom JavaScript code that implements a
        feature that is not natively supported in some environments. Here's how
        you can polyfill common array methods like <code>map</code>,{" "}
        <code>filter</code>, and <code>reduce</code>.
      </p>

      {/* map polyfill */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        🔷 Polyfill for map()
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto  mb-4">
        {`Array.prototype.myMap = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Usage
const arr = [1, 2, 3];
console.log(arr.myMap(num => num * 2)); // [2, 4, 6]`}
      </pre>

      {/* filter polyfill */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        🔸 Polyfill for filter()
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`Array.prototype.myFilter = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Usage
const arr = [1, 2, 3, 4];
console.log(arr.myFilter(num => num % 2 === 0)); // [2, 4]`}
      </pre>

      {/* reduce polyfill */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        🔻 Polyfill for reduce()
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  for(let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// Usage
const arr = [1, 2, 3, 4];
console.log(arr.myReduce((acc, curr) => acc + curr, 0)); // 10`}
      </pre>

      <p className="text-gray-700 mt-4">
        These polyfills mimic the original behavior of the native methods and
        help understand how they work internally.
      </p>
    </div>
  );
}
