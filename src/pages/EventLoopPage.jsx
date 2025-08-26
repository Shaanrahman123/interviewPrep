import React from "react";

export default function EventLoopPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        🔁 The JavaScript Event Loop
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>event loop</strong> is a fundamental part of JavaScript that
        enables non-blocking, asynchronous behavior, even though JavaScript is
        single-threaded.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        🔄 What is the Event Loop?
      </h2>
      <p className="text-gray-700 mb-4">
        It continuously monitors the <strong>call stack</strong> and the{" "}
        <strong>task queues</strong>. When the call stack is empty, it moves
        tasks from the queue to the stack to be executed.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        ⚙️ Components Involved
      </h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-2">
        <li>
          <strong>Call Stack</strong>: Where synchronous functions are executed
          (LIFO order).
        </li>
        <li>
          <strong>Web APIs</strong>: Provided by the browser to handle async
          tasks (e.g., <code>setTimeout</code>, <code>fetch</code>).
        </li>
        <li>
          <strong>Callback Queue</strong>: Holds tasks like timers, click
          handlers, etc.
        </li>
        <li>
          <strong>Microtask Queue</strong>: Holds high-priority tasks like
          Promises and MutationObservers.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        🔁 How the Event Loop Works
      </h2>
      <ol className="list-decimal ml-6 text-gray-700 mb-4 space-y-2">
        <li>Run all synchronous code in the call stack.</li>
        <li>
          When stack is empty, check the microtask queue and run all of it.
        </li>
        <li>
          Then take the first task from the callback queue and execute it.
        </li>
        <li>Repeat.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        🧠 Visual Example
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");`}
      </pre>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-500">
        🖨️ Output:
      </h3>
      <div className="bg-gray-100 text-gray-800 text-sm rounded p-3 mb-4 font-mono">
        Start
        <br />
        End
        <br />
        Promise
        <br />
        Timeout
      </div>

      <p className="text-gray-700 mb-6">
        <strong>Explanation:</strong> "Start" and "End" run first as synchronous
        code. The <code>Promise</code> resolves next from the microtask queue,
        and <code>setTimeout</code> runs last from the callback queue.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        🔍 Summary Table
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left text-sm mb-6">
          <thead className="bg-blue-50">
            <tr>
              <th className="p-2 border-b">Task Type</th>
              <th className="p-2 border-b">Queue</th>
              <th className="p-2 border-b">Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b font-medium">console.log</td>
              <td className="p-2 border-b">Call Stack</td>
              <td className="p-2 border-b">Highest</td>
            </tr>
            <tr>
              <td className="p-2 border-b font-medium">setTimeout</td>
              <td className="p-2 border-b">Callback Queue</td>
              <td className="p-2 border-b">Lower</td>
            </tr>
            <tr>
              <td className="p-2 border-b font-medium">Promise.then()</td>
              <td className="p-2 border-b">Microtask Queue</td>
              <td className="p-2 border-b">Higher</td>
            </tr>
            <tr>
              <td className="p-2 border-b font-medium">fetch().then()</td>
              <td className="p-2 border-b">Microtask Queue</td>
              <td className="p-2 border-b">Higher</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700">
        Understanding the event loop is crucial for mastering async behavior and
        performance in JavaScript applications.
      </p>
    </div>
  );
}
