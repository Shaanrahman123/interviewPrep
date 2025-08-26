import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const EffectHooksPage = () => {
  const [count, setCount] = useState(0);
  const boxRef = useRef(null);

  // useEffect example
  useEffect(() => {
    console.log("✅ useEffect - Runs after paint");
  }, [count]);

  // useLayoutEffect example
  useLayoutEffect(() => {
    console.log("🔧 useLayoutEffect - Runs before paint");
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = "lightblue";
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🧩 useEffect vs useLayoutEffect
      </h1>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        📌 useEffect
      </h2>
      <p className="text-gray-700 mb-4">
        <strong>useEffect</strong> runs <em>after</em> the component is painted
        on the screen. It's used for side effects like API calls, timers,
        subscriptions, etc.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`useEffect(() => {
  // Side-effect logic here
  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]);`}
      </pre>

      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ⚙️ useLayoutEffect
      </h2>
      <p className="text-gray-700 mb-4">
        <strong>useLayoutEffect</strong> runs <em>before</em> the component is
        painted. It is mostly used for layout measurements or synchronous DOM
        mutations to avoid visual flickering.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`useLayoutEffect(() => {
  // Runs before painting the UI
}, [dependencies]);`}
      </pre>

      <div
        ref={boxRef}
        className="w-full md:w-1/2 h-20 rounded text-center flex items-center justify-center bg-gray-200 text-lg font-medium mb-4 transition-all duration-300"
      >
        Watch this box
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase Count ({count})
      </button>

      <h2 className="text-xl font-semibold text-blue-600 mt-8 mb-2">
        🔍 Difference
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>
          <strong>useEffect</strong>: Runs after painting the UI → non-blocking.
        </li>
        <li>
          <strong>useLayoutEffect</strong>: Runs before paint → can block
          rendering.
        </li>
        <li>
          Only use <code>useLayoutEffect</code> when you need to measure or
          manipulate the DOM synchronously.
        </li>
      </ul>
    </div>
  );
};

export default EffectHooksPage;
