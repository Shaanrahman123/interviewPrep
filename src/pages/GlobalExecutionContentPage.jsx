import React from "react";

function GlobalExecutionContextPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        🌍 JavaScript Global Execution Context (GEC)
      </h1>

      <p className="text-gray-700 mb-4">
        In JavaScript, whenever code runs, it runs inside an{" "}
        <b>Execution Context</b>. The very first context created by the JS
        engine is called the <b>Global Execution Context (GEC)</b>.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
        🔑 Key Points about GEC
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>GEC is created when the JavaScript file starts executing.</li>
        <li>
          It has two main phases: <b>Creation Phase</b> and{" "}
          <b>Execution Phase</b>.
        </li>
        <li>
          It contains:
          <ul className="list-decimal ml-6 mt-2">
            <li>
              <b>Memory Component</b> (Variable Environment)
            </li>
            <li>
              <b>Code Component</b> (Thread of Execution)
            </li>
          </ul>
        </li>
        <li>
          Only <b>one Global Execution Context</b> exists per program.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        🛠️ 1. Creation Phase
      </h2>
      <p className="text-gray-700 mb-2">
        In this phase, memory is allocated for variables and functions:
      </p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>
          Variables are initialized with <b>undefined</b>.
        </li>
        <li>Functions are stored as whole functions.</li>
      </ul>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`console.log(x); // undefined
sayHello(); // Hello!

var x = 10;

function sayHello() {
  console.log("Hello!");
}`}
      </pre>

      <p className="text-gray-700 mt-2">
        👉 During the creation phase: - <code>x</code> is stored in memory as{" "}
        <code>undefined</code>. - <code>sayHello</code> is fully stored in
        memory.
      </p>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        🏃 2. Execution Phase
      </h2>
      <p className="text-gray-700 mb-2">
        In this phase, the code runs line by line:
      </p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Values are assigned to variables.</li>
        <li>Functions are executed when called.</li>
      </ul>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`var x = 10;   // x now gets value 10
sayHello();   // Executes function → prints "Hello!"`}
      </pre>

      <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
        📦 Components of Execution Context
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>Memory Component (Variable Environment)</b>: Stores variables and
          functions.
        </li>
        <li>
          <b>Code Component (Thread of Execution)</b>: Executes the code line by
          line.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        ⚡ Call Stack & GEC
      </h2>
      <p className="text-gray-700 mb-2">
        The <b>Call Stack</b> keeps track of all execution contexts. - The{" "}
        <b>GEC is created first</b> and stays at the bottom. - When functions
        are called, new execution contexts are created and stacked on top. -
        Once functions finish, their contexts are removed from the stack.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function a() {
  console.log("Inside A");
  b();
}
function b() {
  console.log("Inside B");
}

a();

/*
Call Stack:
1. GEC created
2. a() context pushed
3. b() context pushed
4. b() finished → pop
5. a() finished → pop
6. GEC stays until program ends
*/`}
      </pre>

      <h2 className="text-xl font-bold text-green-700 mt-6 mb-2">🎯 Summary</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>GEC is the default context created when JS runs.</li>
        <li>It has 2 phases → Creation & Execution.</li>
        <li>It consists of Memory Component + Code Component.</li>
        <li>Call Stack always starts with GEC at the bottom.</li>
      </ul>
    </div>
  );
}

export default GlobalExecutionContextPage;
