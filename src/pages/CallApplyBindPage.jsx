import React from "react";

export default function CallApplyBindPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">
        Call, Apply, and Bind in JavaScript
      </h1>

      <p className="text-gray-700 mb-4">
        In JavaScript, <strong>functions are first-class objects</strong>, which
        means you can assign them to variables, pass them around, and call them
        with different contexts. The methods <code>call()</code>,{" "}
        <code>apply()</code>, and <code>bind()</code> allow you to manually set
        the value of <code>this</code> inside a function.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 call()</h2>
      <p className="text-gray-700 mb-2">
        The <code>call()</code> method invokes a function with a specified{" "}
        <code>this</code> value and arguments passed individually.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const person = {
  name: "Alice",
};

function greet(greeting) {
  console.log(\`\${greeting}, \${this.name}!\`);
}

greet.call(person, "Hello"); // Hello, Alice!`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 apply()</h2>
      <p className="text-gray-700 mb-2">
        The <code>apply()</code> method is very similar to <code>call()</code>,
        but it takes the arguments as an array.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`greet.apply(person, ["Hi"]); // Hi, Alice!`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🔹 bind()</h2>
      <p className="text-gray-700 mb-2">
        The <code>bind()</code> method returns a new function with a specific{" "}
        <code>this</code> value. It does not execute the function immediately.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const greetAlice = greet.bind(person, "Hey");
greetAlice(); // Hey, Alice!`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">📌 Summary Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border-b">Method</th>
              <th className="p-2 border-b">When It Executes</th>
              <th className="p-2 border-b">Arguments</th>
              <th className="p-2 border-b">Returns</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b font-medium">call()</td>
              <td className="p-2 border-b">Immediately</td>
              <td className="p-2 border-b">Individual arguments</td>
              <td className="p-2 border-b">Function result</td>
            </tr>
            <tr>
              <td className="p-2 border-b font-medium">apply()</td>
              <td className="p-2 border-b">Immediately</td>
              <td className="p-2 border-b">Arguments as array</td>
              <td className="p-2 border-b">Function result</td>
            </tr>
            <tr>
              <td className="p-2 border-b font-medium">bind()</td>
              <td className="p-2 border-b">Later (on invocation)</td>
              <td className="p-2 border-b">Individual arguments</td>
              <td className="p-2 border-b">New function</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 mt-6">
        These methods are extremely helpful when working with event handlers,
        callbacks, and when controlling the execution context of a function.
      </p>
    </div>
  );
}
