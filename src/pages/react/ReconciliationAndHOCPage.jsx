import React from "react";

const ReconciliationAndHOCPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">
        🔄 Reconciliation & 📦 Higher Order Component (HOC) in React
      </h1>

      {/* Reconciliation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
          🔄 Reconciliation in React
        </h2>
        <p className="text-gray-700 mb-4">
          Reconciliation is the process by which React updates the DOM
          efficiently. When state or props change, React compares the new
          virtual DOM with the previous one and updates only the parts of the
          DOM that changed.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-indigo-500">
          ⚙️ Key Concepts:
        </h3>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Uses a virtual DOM to detect changes.</li>
          <li>Uses keys to identify elements in a list.</li>
          <li>Performs diffing algorithm to compute minimal updates.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-indigo-500">
          🧠 Example:
        </h3>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
          {`const [count, setCount] = useState(0);

return (
  <div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
  </div>
);
// Only <h1> updates, not the whole DOM.`}
        </pre>
      </section>

      {/* HOC */}
      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
          📦 Higher Order Component (HOC)
        </h2>
        <p className="text-gray-700 mb-4">
          A Higher Order Component is a function that takes a component and
          returns a new component with enhanced behavior.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-indigo-500">
          📘 Syntax:
        </h3>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
          {`const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Rendering", WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
};

const MyComponent = () => <div>Hello</div>;

const Enhanced = withLogger(MyComponent);`}
        </pre>

        <h3 className="text-xl font-semibold mb-2 text-indigo-500">
          🧩 Use Cases:
        </h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Code reuse across components</li>
          <li>Inject additional props or logic</li>
          <li>Conditional rendering or access control</li>
        </ul>
      </section>
    </div>
  );
};

export default ReconciliationAndHOCPage;
