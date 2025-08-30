import React from "react";

function MemoryAndCachePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        🧠 Heap Memory, Stack Memory & Cache in JavaScript
      </h1>

      <p className="text-gray-700 mb-4">
        When JavaScript runs, it manages memory in two main areas:{" "}
        <b>Stack Memory</b> and <b>Heap Memory</b>. Additionally, for
        performance, we use <b>Cache</b> to store data that can be quickly
        reused.
      </p>

      {/* Stack Section */}
      <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
        📚 Stack Memory
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          Stores <b>primitive values</b> (numbers, strings, booleans, null,
          undefined, symbols, BigInt).
        </li>
        <li>
          Also stores <b>function call contexts</b> (Execution Contexts in the
          Call Stack).
        </li>
        <li>
          Memory is <b>fixed-size and fast</b>.
        </li>
      </ul>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`let a = 10;   // Stored in Stack
let b = "Hi";  // Stored in Stack

function sum(x, y) {
  return x + y; // Execution context (stack frame)
}

sum(5, 7); // pushed & popped from the Call Stack`}
      </pre>

      {/* Heap Section */}
      <h2 className="text-2xl font-semibold text-purple-700 mt-6 mb-2">
        🗄️ Heap Memory
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          Used for <b>reference types</b> (objects, arrays, functions).
        </li>
        <li>
          Memory is <b>dynamically allocated</b> and <b>non-structured</b>.
        </li>
        <li>Variables in the stack point to objects in the heap.</li>
      </ul>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`let user = {
  name: "Alice",
  age: 25
};
// 'user' (stack) → points to object in heap`}
      </pre>

      {/* Cache Section */}
      <h2 className="text-2xl font-semibold text-orange-700 mt-6 mb-2">
        ⚡ Cache
      </h2>
      <p className="text-gray-700 mb-2">
        <b>Cache</b> is temporary storage used to store frequently accessed data
        so that it can be retrieved quickly instead of recomputing or refetching
        it.
      </p>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          Example: Browser cache stores images, CSS, JS files to load websites
          faster.
        </li>
        <li>
          Example: In React apps, we may cache API responses so the same data
          isn’t fetched repeatedly.
        </li>
      </ul>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`// Example: Caching API response in memory
const cache = {};

async function fetchData(url) {
  if (cache[url]) {
    console.log("From Cache:", cache[url]);
    return cache[url];
  }
  const res = await fetch(url);
  const data = await res.json();
  cache[url] = data; // Store in cache
  console.log("From API:", data);
  return data;
}

fetchData("https://dummyjson.com/products"); // first call → API
fetchData("https://dummyjson.com/products"); // second call → cache`}
      </pre>

      {/* Handling Cache */}
      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
        🔧 How to Handle Cache
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>Memory Cache:</b> Store data in memory (objects, maps). Fast but
          clears when app reloads.
        </li>
        <li>
          <b>LocalStorage / SessionStorage:</b> Browser-based persistent
          caching.
        </li>
        <li>
          <b>Service Workers:</b> Can cache API calls, files, and assets
          offline.
        </li>
        <li>
          <b>HTTP Cache-Control headers:</b> Let the browser cache API responses
          or assets.
        </li>
      </ul>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`// Example: Using LocalStorage as Cache
async function fetchWithLocalCache(url) {
  const cached = localStorage.getItem(url);
  if (cached) {
    console.log("From LocalStorage:", JSON.parse(cached));
    return JSON.parse(cached);
  }
  const res = await fetch(url);
  const data = await res.json();
  localStorage.setItem(url, JSON.stringify(data));
  console.log("From API:", data);
  return data;
}`}
      </pre>

      <h2 className="text-2xl font-bold text-green-700 mt-6 mb-2">
        🎯 Summary
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>Stack Memory</b> → fast, fixed-size, for primitives & function
          calls.
        </li>
        <li>
          <b>Heap Memory</b> → dynamic, for objects, arrays, functions.
        </li>
        <li>
          <b>Cache</b> → speeds up data retrieval (memory, localStorage, browser
          cache).
        </li>
        <li>
          <b>Handling cache</b> → in-memory cache, LocalStorage, Service
          Workers, HTTP headers.
        </li>
      </ul>
    </div>
  );
}

export default MemoryAndCachePage;
