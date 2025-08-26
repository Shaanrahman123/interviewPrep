import React from "react";

export default function ReverseStringPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">
        🔁 Reverse a String
      </h1>

      <p className="text-gray-700 mb-4">
        Reversing a string means rearranging its characters in opposite order.
      </p>

      <h2 className="text-xl font-semibold text-indigo-600 mb-2">
        📘 Method 1: Using Built-in Methods
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"`}
      </pre>

      <h2 className="text-xl font-semibold text-indigo-600 mt-6 mb-2">
        📘 Method 2: Using a For Loop
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("world")); // "dlrow"`}
      </pre>

      <h2 className="text-xl font-semibold text-indigo-600 mt-6 mb-2">
        📘 Method 3: Using Recursion
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("chat")); // "tahc"`}
      </pre>
    </div>
  );
}
