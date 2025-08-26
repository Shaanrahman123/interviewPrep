import React from "react";

export default function CharCountPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-rose-700 mb-6">
        🔤 Count Character Occurrences
      </h1>

      <p className="text-gray-700 mb-4">
        This function counts how many times each character appears in a string.
      </p>

      <h2 className="text-xl font-semibold text-rose-600 mb-2">
        📘 Example Code
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function countCharacters(str) {
  const result = {};
  for (let char of str) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}

console.log(countCharacters("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }`}
      </pre>

      <p className="text-gray-700 mt-4">
        This is useful for problems involving frequency analysis, anagrams, or
        basic text statistics.
      </p>
    </div>
  );
}
