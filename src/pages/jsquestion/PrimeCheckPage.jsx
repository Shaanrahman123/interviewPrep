import React from "react";

export default function PrimeCheckPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🔎 Prime Number Check
      </h1>

      <p className="text-gray-700 mb-4">
        A <strong>prime number</strong> is a number greater than 1 that has no
        positive divisors other than 1 and itself.
      </p>

      <h2 className="text-xl font-semibold text-blue-600 mb-2">
        📘 JavaScript Code
      </h2>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false`}
      </pre>

      <p className="text-gray-700 mt-4">
        This function checks divisibility up to the square root of the number,
        which improves performance for larger inputs.
      </p>
    </div>
  );
}
