import React from "react";

export default function FibonacciPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        🔢 Fibonacci Sequence
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>Fibonacci sequence</strong> is a series of numbers where
        each number is the sum of the two preceding ones. It starts from 0 and
        1.
      </p>

      <h2 className="text-xl font-semibold text-purple-600 mb-2">
        📘 JavaScript Code
      </h2>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function printFibonacci(n) {
  let fib = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    fib.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  return fib;
}

console.log(printFibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`}
      </pre>

      <p className="text-gray-700 mt-4">
        This function uses a loop to generate <code>n</code> Fibonacci numbers
        and returns them as an array.
      </p>
    </div>
  );
}
