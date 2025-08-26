import React from "react";

export default function HowJSWorksPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">
        🧠 How JavaScript Works (Short Explanation)
      </h1>

      <p className="text-gray-700 mb-4">
        JavaScript is a <strong>single-threaded</strong>,{" "}
        <strong>synchronous</strong> language with a powerful{" "}
        <strong>asynchronous</strong> capability through its runtime
        environment.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        🔧 Key Components
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
        <li>
          <strong>Call Stack</strong>: Executes your code one frame at a time
          (LIFO).
        </li>
        <li>
          <strong>Heap</strong>: Stores memory like objects and variables.
        </li>
        <li>
          <strong>Web APIs</strong>: Provided by the browser (e.g.,{" "}
          <code>setTimeout</code>, <code>fetch</code>).
        </li>
        <li>
          <strong>Callback & Microtask Queues</strong>: Hold tasks waiting to be
          executed when the stack is empty.
        </li>
        <li>
          <strong>Event Loop</strong>: Keeps checking if the stack is empty to
          push queued tasks in.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        ⚙️ Simple Flow
      </h2>
      <ol className="list-decimal ml-6 text-gray-700 space-y-2 mb-4">
        <li>Code is parsed and compiled.</li>
        <li>Synchronous code is executed in the Call Stack.</li>
        <li>
          Async tasks (like Promises or setTimeout) are handled by Web APIs.
        </li>
        <li>Once complete, they're moved to queues (Microtask or Callback).</li>
        <li>
          The Event Loop pushes tasks from queues to the Call Stack when it's
          empty.
        </li>
      </ol>

      <p className="text-gray-700">
        JavaScript's design allows it to handle asynchronous behavior
        efficiently, even with just one main thread!
      </p>
    </div>
  );
}
