import React from "react";

export default function CountVowelsPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-rose-700 mb-6">
        🔤 Count Vowels in a String
      </h1>

      <p className="text-gray-700 mb-4">
        In JavaScript, you can count vowels by iterating over the string and
        checking each character.
      </p>

      <h2 className="text-xl font-semibold text-rose-600 mb-2">
        ✅ Example Code
      </h2>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World")); // Output: 3`}
      </pre>

      <p className="text-gray-700 mt-4">
        This method checks each character against the list of vowels. Both
        uppercase and lowercase vowels are counted.
      </p>

      <h2 className="text-xl font-semibold text-rose-600 mb-2 mt-6">
        🧪 Test Example
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`countVowels("ChatGPT is Amazing!") // Output: 6`}
      </pre>
    </div>
  );
}
