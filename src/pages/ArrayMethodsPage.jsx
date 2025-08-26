import React from "react";

export default function ArrayMethodsPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        🧩 Array Methods in JavaScript
      </h1>

      {/* map */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        🔷 map()
      </h2>
      <p className="text-gray-700 mb-2">
        Creates a new array by applying a function to each element.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]`}
      </pre>

      {/* forEach */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        🔹 forEach()
      </h2>
      <p className="text-gray-700 mb-2">
        Executes a function for each element in the array (no return value).
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const nums = [1, 2, 3];
nums.forEach(n => console.log(n)); // Logs: 1, 2, 3`}
      </pre>

      {/* filter */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        🔸 filter()
      </h2>
      <p className="text-gray-700 mb-2">
        Returns a new array with elements that pass a given condition.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const nums = [1, 2, 3, 4];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]`}
      </pre>

      {/* reduce */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        🔻 reduce()
      </h2>
      <p className="text-gray-700 mb-2">
        Reduces the array to a single value by applying a function.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10`}
      </pre>

      {/* slice */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        ✂️ slice()
      </h2>
      <p className="text-gray-700 mb-2">
        Returns a shallow copy of a portion of an array without modifying the
        original.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const fruits = ["apple", "banana", "cherry", "date"];
const sliced = fruits.slice(1, 3);
console.log(sliced); // ["banana", "cherry"]`}
      </pre>

      {/* splice */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        🧷 splice()
      </h2>
      <p className="text-gray-700 mb-2">
        Adds or removes items from an array (modifies the original array).
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const items = ["a", "b", "c", "d"];
items.splice(2, 1, "x");
console.log(items); // ["a", "b", "x", "d"]`}
      </pre>

      <p className="text-gray-700 mt-4">
        These array methods are essential for transforming, filtering, and
        managing lists effectively in JavaScript.
      </p>
    </div>
  );
}
