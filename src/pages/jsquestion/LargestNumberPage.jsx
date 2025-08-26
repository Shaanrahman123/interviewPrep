import React from "react";

export default function LargestNumberPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-red-700 mb-6">
        🔢 Find the Largest & Smallest Number in an Array
      </h1>

      <p className="text-gray-700 mb-4">
        In JavaScript, you can find the largest and smallest number in an array
        using <code>Math.max()</code>, <code>Math.min()</code>, or by iterating
        through the array manually.
      </p>

      {/* Largest Number */}
      <h2 className="text-xl font-semibold text-red-600 mb-2">
        ✅ Largest Number Using <code>Math.max()</code>
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const numbers = [4, 9, 1, 42, 7];

const largest = Math.max(...numbers);

console.log(largest); // Output: 42`}
      </pre>

      <h2 className="text-xl font-semibold text-red-600 mt-6 mb-2">
        🚫 Largest Number Without Built-ins
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findLargest([4, 9, 1, 42, 7])); // Output: 42`}
      </pre>

      {/* Smallest Number */}
      <h2 className="text-xl font-semibold text-green-600 mt-10 mb-2">
        ✅ Smallest Number Using <code>Math.min()</code>
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const numbers = [4, 9, 1, 42, 7];

const smallest = Math.min(...numbers);

console.log(smallest); // Output: 1`}
      </pre>

      <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">
        🚫 Smallest Number Without Built-ins
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function findSmallest(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findSmallest([4, 9, 1, 42, 7])); // Output: 1`}
      </pre>
    </div>
  );
}
