import React from "react";

export default function RemoveDuplicatesPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">
        🔁 Remove Duplicates from an Array
      </h1>

      <p className="text-gray-700 mb-4">
        In JavaScript, you can remove duplicates from an array using several
        methods like <code>Set</code>, <code>filter()</code>, or a{" "}
        <code>for</code> loop.
      </p>

      <h2 className="text-xl font-semibold text-indigo-600 mb-2">
        ✅ Using <code>Set</code>
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]`}
      </pre>

      <h2 className="text-xl font-semibold text-indigo-600 mb-2 mt-6">
        ✅ Using <code>filter()</code>
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArr); // [1, 2, 3, 4, 5]`}
      </pre>

      <h2 className="text-xl font-semibold text-indigo-600 mb-2 mt-6">
        ✅ Using a <code>for</code> loop
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [];

for (let i = 0; i < arr.length; i++) {
  if (!unique.includes(arr[i])) {
    unique.push(arr[i]);
  }
}

console.log(unique); // [1, 2, 3, 4, 5]`}
      </pre>

      <p className="text-gray-700 mt-4">
        The most efficient and concise method is using <code>Set</code>, but
        other methods are helpful for understanding how de-duplication works
        internally.
      </p>
    </div>
  );
}
