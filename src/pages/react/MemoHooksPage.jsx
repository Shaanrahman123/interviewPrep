import React, { useState, useMemo, useCallback } from "react";

const MemoHooksPage = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // useMemo: Memoizes expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  // useCallback: Memoizes the function reference
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        ⚡ useMemo, useCallback & React.memo
      </h1>

      {/* useMemo */}
      <h2 className="text-2xl font-semibold text-purple-600 mb-2">
        🧠 useMemo
      </h2>
      <p className="text-gray-700 mb-2">
        <strong>useMemo</strong> memoizes the result of a computation. Useful
        when an expensive calculation needs to be skipped unless dependencies
        change.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
      </pre>

      <div className="mb-6">
        <p className="text-gray-700 mb-2">
          Count: <strong>{count}</strong> — Expensive Result:{" "}
          <strong>{expensiveCalculation}</strong>
        </p>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded mr-2"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded"
          onClick={() => setOther(other + 1)}
        >
          Increment Other
        </button>
      </div>

      {/* useCallback */}
      <h2 className="text-2xl font-semibold text-purple-600 mb-2">
        🔁 useCallback
      </h2>
      <p className="text-gray-700 mb-2">
        <strong>useCallback</strong> memoizes the function reference. Helps
        prevent unnecessary re-renders when passing callbacks to child
        components.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const memoizedFn = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}
      </pre>

      <ChildComponent onClick={handleClick} />

      {/* React.memo */}
      <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-2">
        🧱 React.memo
      </h2>
      <p className="text-gray-700 mb-2">
        <strong>React.memo</strong> is a higher-order component that prevents a
        component from re-rendering unless its props change.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});`}
      </pre>

      {/* Summary Table */}
      <h2 className="text-xl font-semibold text-purple-600 mb-2">📋 Summary</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>
          <strong>useMemo</strong>: Caches calculated values.
        </li>
        <li>
          <strong>useCallback</strong>: Caches function references.
        </li>
        <li>
          <strong>React.memo</strong>: Avoids re-rendering of pure components.
        </li>
      </ul>
    </div>
  );
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return (
    <button
      onClick={onClick}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Call Memoized Function
    </button>
  );
});

export default MemoHooksPage;
