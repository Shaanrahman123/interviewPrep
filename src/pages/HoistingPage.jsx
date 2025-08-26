import React from "react";

export default function HoistingPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-rose-700">
        📤 Hoisting in JavaScript
      </h1>

      <p className="text-gray-700 mb-4">
        <strong>Hoisting</strong> is a JavaScript mechanism where variable and
        function declarations are moved to the top of their scope before code
        execution.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-rose-600">
        🔹 What Gets Hoisted?
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
        <li>
          <strong>Function declarations</strong> are fully hoisted.
        </li>
        <li>
          <strong>var</strong> declarations are hoisted but initialized as{" "}
          <code>undefined</code>.
        </li>
        <li>
          <strong>let</strong> and <strong>const</strong> are hoisted, but not
          initialized (they are in a “temporal dead zone”).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-rose-600">
        💡 Example 1 (Function Hoisting)
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`greet();

function greet() {
  console.log("Hello!");
}

// Output: Hello!`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-rose-600">
        💡 Example 2 (var Hoisting)
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`console.log(a); // undefined
var a = 5;`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-rose-600">
        🚫 Example 3 (let/const are not usable before declaration)
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`console.log(b); // ReferenceError
let b = 10;`}
      </pre>

      <p className="text-gray-700">
        Understanding hoisting helps avoid bugs related to variable scope and
        initialization timing.
      </p>
    </div>
  );
}
