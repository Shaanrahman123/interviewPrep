import React from "react";

export default function AnagramCheckPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🔁 Check if Two Strings are Anagrams
      </h1>

      <p className="text-gray-700 mb-4">
        Two strings are <strong>anagrams</strong> if they contain the same
        characters in the same frequency, but in a different order. For example,{" "}
        <code>"listen"</code> and <code>"silent"</code> are anagrams.
      </p>

      <h2 className="text-xl font-semibold text-blue-600 mb-2">
        ✅ Example Code
      </h2>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function isAnagram(str1, str2) {
  // Remove non-alphabet characters and convert to lowercase
  str1 = str1.replace(/[^a-z]/gi, "").toLowerCase();
  str2 = str2.replace(/[^a-z]/gi, "").toLowerCase();

  if (str1.length !== str2.length) return false;

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

// Test
console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("hello", "world"));    // false`}
      </pre>

      <p className="text-gray-700 mt-4">
        This code works by normalizing the input (removing non-letters and
        converting to lowercase), then sorting and comparing both strings.
      </p>
    </div>
  );
}
