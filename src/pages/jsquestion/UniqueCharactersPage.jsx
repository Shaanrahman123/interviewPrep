import React from "react";

export default function UniqueCharactersPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        ✨ Get Unique Characters from a String
      </h1>

      <p className="text-gray-700 mb-4">
        To extract unique characters from a string, you can use a{" "}
        <code>Set</code> or iterate manually while tracking seen characters.
      </p>

      <h2 className="text-xl font-semibold text-purple-600 mb-2">
        ✅ Example Using Set
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function getUniqueCharacters(str) {
  return [...new Set(str)].join("");
}

console.log(getUniqueCharacters("programming")); // Output: "progamin"`}
      </pre>

      <p className="text-gray-700 mt-4">
        A <code>Set</code> automatically removes duplicates. We then convert it
        back to a string.
      </p>

      <h2 className="text-xl font-semibold text-purple-600 mt-6 mb-2">
        🚫 Without Using Set
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function getUniqueCharactersManual(str) {
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}

console.log(getUniqueCharactersManual("success")); // Output: "suc"`}
      </pre>

      <p className="text-gray-700 mt-4">
        This method uses a loop to build a string with only the first
        occurrences of each character.
      </p>
    </div>
  );
}
