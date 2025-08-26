import React from "react";

export default function PalindromePage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">🔁 Palindrome</h1>

      <p className="text-gray-700 mb-4">
        A <strong>palindrome</strong> is a word or phrase that reads the same
        forward and backward. Examples: <code>madam</code>, <code>racecar</code>
        , <code>121</code>.
      </p>

      <h2 className="text-xl font-semibold text-purple-600 mb-2">
        📘 Method 1: Using Built-in Methods
      </h2>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true`}
      </pre>

      <h2 className="text-xl font-semibold text-purple-600 mb-2 mt-6">
        📘 Method 2: Manual Reverse with Loop
      </h2>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

console.log(isPalindrome("level")); // true`}
      </pre>

      <h2 className="text-xl font-semibold text-purple-600 mb-2 mt-6">
        📘 Method 3: Two-Pointer Approach (No inbuilt methods)
      </h2>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("noon")); // true`}
      </pre>
    </div>
  );
}
