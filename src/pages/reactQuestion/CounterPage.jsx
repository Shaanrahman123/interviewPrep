import React, { useReducer } from "react";

const CounterPage = () => {
  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  };

  // useReducer Hook
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        🎯 Counter Example with useReducer
      </h1>

      <p className="text-gray-700 mb-4">
        The <code>useReducer</code> hook is an alternative to{" "}
        <code>useState</code> when managing more complex state logic. It uses a{" "}
        <strong>reducer function</strong> (state + action → newState).
      </p>

      {/* Working Example */}
      <div className="bg-white shadow p-6 rounded-lg w-64 text-center">
        <h2 className="text-2xl font-semibold mb-4">Counter: {state.count}</h2>
        <div className="space-x-2">
          <button
            className="px-3 py-1 bg-green-600 text-white rounded"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            ➕ Increment
          </button>
          <button
            className="px-3 py-1 bg-red-600 text-white rounded"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            ➖ Decrement
          </button>
        </div>
        <button
          className="mt-3 px-3 py-1 bg-gray-700 text-white rounded"
          onClick={() => dispatch({ type: "RESET" })}
        >
          🔄 Reset
        </button>
      </div>

      {/* Source Code */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Full Source Code
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}`}
      </pre>
    </div>
  );
};

export default CounterPage;
