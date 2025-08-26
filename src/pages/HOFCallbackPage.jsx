import React from "react";

export default function HOFCallbackPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">
        🔁 Higher-Order Functions & Callback Functions
      </h1>

      {/* HOF Section */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">
        🔹 What is a Higher-Order Function?
      </h2>
      <p className="text-gray-700 mb-4">
        A <strong>Higher-Order Function</strong> is a function that either takes
        another function as an argument or returns a function as its result.
        These are commonly used in JavaScript, especially in array methods like{" "}
        <code>map</code>, <code>filter</code>, and <code>reduce</code>.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-indigo-500">
        💡 Example:
      </h3>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]`}
      </pre>

      <p className="text-gray-700 mb-6">
        In the example above, <code>map()</code> is a higher-order function
        because it accepts a function as an argument.
      </p>

      {/* Callback Section */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">
        🔹 What is a Callback Function?
      </h2>
      <p className="text-gray-700 mb-4">
        A <strong>Callback Function</strong> is a function that is passed into
        another function to be executed later, usually after some operation or
        event. It is commonly used to handle asynchronous behavior in
        JavaScript.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-indigo-500">
        💡 Example:
      </h3>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`function sayHi() {
  console.log("Hi after 2 seconds!");
}

setTimeout(sayHi, 2000); // sayHi is the callback function`}
      </pre>

      <p className="text-gray-700 mb-4">
        In the example above, <code>sayHi</code> is passed as a callback to{" "}
        <code>setTimeout</code>. It gets executed after a 2-second delay.
      </p>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">
        🧠 Summary
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <strong>Higher-order functions</strong> accept functions or return
          them.
        </li>
        <li>
          <strong>Callback functions</strong> are passed to other functions to
          run after something happens.
        </li>
        <li>
          Both are foundational for understanding JavaScript's functional and
          asynchronous programming patterns.
        </li>
      </ul>
    </div>
  );
}
