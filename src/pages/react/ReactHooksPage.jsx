import React, { useRef, useContext, useReducer, createContext } from "react";

const CounterContext = createContext();

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function ReactHooksPage() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        ⚙️ React Hooks: useRef, useContext, useReducer
      </h1>

      {/* useRef */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">
          📌 useRef
        </h2>
        <p className="text-gray-700 mb-4">
          <code>useRef</code> gives direct access to a DOM element or holds a
          mutable value without causing re-renders.
        </p>
        <input
          ref={inputRef}
          className="border p-2 rounded mb-2"
          placeholder="Click button to focus me"
        />
        <br />
        <button
          onClick={focusInput}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Focus Input
        </button>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mt-4">
          {`const inputRef = useRef(null);

<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>Focus</button>`}
        </pre>
      </section>

      {/* useContext */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">
          🌐 useContext
        </h2>
        <p className="text-gray-700 mb-4">
          <code>useContext</code> lets you access values from a React context
          without prop drilling.
        </p>
        <CounterContext.Provider value="React Context Value">
          <ChildComponent />
        </CounterContext.Provider>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mt-4">
          {`const MyContext = createContext();

<MyContext.Provider value="Hello">
  <Child />
</MyContext.Provider>

// Inside Child
const value = useContext(MyContext);`}
        </pre>
      </section>

      {/* useReducer */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">
          🔁 useReducer
        </h2>
        <p className="text-gray-700 mb-4">
          <code>useReducer</code> is used for managing more complex state logic
          (alternative to useState).
        </p>
        <div className="flex items-center gap-4 mb-2">
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
          <span className="text-lg font-bold">{state.count}</span>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
        </div>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
          {`const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);`}
        </pre>
      </section>
    </div>
  );
}

// Example child component for useContext
function ChildComponent() {
  const value = useContext(CounterContext);
  return (
    <p className="text-blue-600 mb-4">
      Context Value: <strong>{value}</strong>
    </p>
  );
}
