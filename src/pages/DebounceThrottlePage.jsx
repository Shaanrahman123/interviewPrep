import React from "react";

export default function DebounceThrottlePage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-700">
        ⚡ Debouncing vs Throttling
      </h1>

      {/* Debouncing */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">
        🕓 What is Debouncing?
      </h2>
      <p className="text-gray-700 mb-4">
        <strong>Debouncing</strong> is a technique to delay the execution of a
        function until a certain time has passed since it was last called. It's
        commonly used to limit API calls during typing or resizing events.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-500">
        💡 Example:
      </h3>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded mb-4 overflow-x-auto">
        {`function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const handleInput = debounce(() => {
  console.log("API call triggered");
}, 500);

// call handleInput on each key press`}
      </pre>

      {/* Throttling */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">
        🚀 What is Throttling?
      </h2>
      <p className="text-gray-700 mb-4">
        <strong>Throttling</strong> ensures a function is only called once every
        specified period, no matter how many times the event occurs. It's useful
        for scroll or resize events.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-500">
        💡 Example:
      </h3>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded mb-4 overflow-x-auto">
        {`function throttle(func, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scroll event processed");
}, 1000);

// call handleScroll on window scroll`}
      </pre>

      {/* Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">
        🔍 Summary
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <strong>Debounce:</strong> Waits before running after a pause in
          events.
        </li>
        <li>
          <strong>Throttle:</strong> Limits how often a function can be run over
          time.
        </li>
      </ul>
    </div>
  );
}
