import React from "react";

const SpreadRestDestructuring = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        ✨ Spread, Rest & Destructuring in JavaScript
      </h1>

      {/* Spread Operator */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">
          🔹 Spread Operator
        </h2>
        <p className="text-gray-700 mb-2">
          The spread operator (`...`) expands elements of an iterable (like an
          array or object).
        </p>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
          {`const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); // [1, 2, 3, 4, 5]`}
        </pre>
      </section>

      {/* Rest Operator */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">
          🔹 Rest Operator
        </h2>
        <p className="text-gray-700 mb-2">
          The rest operator collects all remaining elements into an array.
        </p>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto ">
          {`function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // 6`}
        </pre>
      </section>

      {/* Destructuring */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">
          🔹 Destructuring
        </h2>
        <p className="text-gray-700 mb-2">
          Destructuring allows unpacking values from arrays or properties from
          objects into variables.
        </p>

        {/* Array Destructuring */}
        <h3 className="text-lg font-medium text-blue-500 mt-4">
          Array Destructuring
        </h3>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
          {`const [a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20`}
        </pre>

        {/* Object Destructuring */}
        <h3 className="text-lg font-medium text-blue-500">
          Object Destructuring
        </h3>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
          {`const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name); // John
console.log(age);  // 30`}
        </pre>
      </section>

      <div className="mt-6 text-gray-600">
        ✅ These tools make your code cleaner, shorter, and easier to manage!
      </div>
    </div>
  );
};

export default SpreadRestDestructuring;
