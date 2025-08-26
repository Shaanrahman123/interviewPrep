import React from "react";

const SecondExtremePage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">
        🔢 Second Largest & Second Smallest in an Array
      </h1>

      <p className="text-gray-700 mb-4">
        You can find the second largest and second smallest elements in an array
        by sorting or using manual comparison logic.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
        📌 Second Largest
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const arr = [10, 5, 20, 8, 15];

let first = -Infinity;
let second = -Infinity;

for (let num of arr) {
  if (num > first) {
    second = first;
    first = num;
  } else if (num > second && num !== first) {
    second = num;
  }
}

console.log("Second Largest:", second); // 15`}
      </pre>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-2">
        📉 Second Smallest
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const arr = [10, 5, 20, 8, 15];

let smallest = Infinity;
let secondSmallest = Infinity;

for (let num of arr) {
  if (num < smallest) {
    secondSmallest = smallest;
    smallest = num;
  } else if (num < secondSmallest && num !== smallest) {
    secondSmallest = num;
  }
}

console.log("Second Smallest:", secondSmallest); // 8`}
      </pre>

      <h2 className="text-xl font-semibold text-indigo-600 mt-6 mb-2">
        ✅ Notes
      </h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Make sure the array has at least two unique values.</li>
        <li>This approach avoids sorting and runs in O(n) time.</li>
      </ul>
    </div>
  );
};

export default SecondExtremePage;
