import React from "react";

const CopyConceptPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🧠 Shallow Copy vs Deep Copy in JavaScript
      </h1>

      <p className="text-gray-700 mb-4">
        When you copy objects or arrays in JavaScript, it’s important to
        understand the difference between <strong>shallow</strong> and{" "}
        <strong>deep</strong> copies.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        📌 Shallow Copy
      </h2>
      <p className="text-gray-700 mb-4">
        A <strong>shallow copy</strong> copies the top-level structure, but
        nested objects still reference the same memory.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const original = { a: 1, b: { c: 2 } };

const shallowCopy = { ...original };
shallowCopy.b.c = 42;

console.log(original.b.c); // 42 → affected!`}
      </pre>

      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        📦 Methods to Create Shallow Copy
      </h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>
          <code>Object.assign({}, obj)</code>
        </li>
        <li>
          <code>{`{ ...obj }`}</code> (spread operator)
        </li>
        <li>
          <code>Array.prototype.slice()</code> for arrays
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        🔁 Deep Copy
      </h2>
      <p className="text-gray-700 mb-4">
        A <strong>deep copy</strong> duplicates all levels of an object or
        array, including nested structures.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const original = { a: 1, b: { c: 2 } };

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 42;

console.log(original.b.c); // 2 → unaffected`}
      </pre>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
        ⚠️ Limitations of JSON method
      </h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Doesn’t support functions</li>
        <li>
          Ignores <code>undefined</code> values
        </li>
        <li>Loses special types like Date, Map, Set</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
        ✅ Better Deep Copy (for complex cases)
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`// Using structuredClone (modern browsers)
const deep = structuredClone(original);`}
      </pre>
      <p className="text-gray-700 mt-2">
        Or use libraries like <code>lodash</code>: <code>_.cloneDeep(obj)</code>
      </p>
    </div>
  );
};

export default CopyConceptPage;
