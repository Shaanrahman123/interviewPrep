import React, { useEffect, useState } from "react";

const LifecyclePage = () => {
  const [count, setCount] = useState(0);

  // Functional Lifecycle Equivalent
  useEffect(() => {
    console.log("🔵 componentDidMount / componentDidUpdate");

    return () => {
      console.log("🔴 componentWillUnmount");
    };
  }, [count]); // runs on mount and when count changes

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        🔄 React Lifecycle Methods
      </h1>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">
        📘 Class Component Lifecycle
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <strong>constructor()</strong> – Initializes state and binds methods.
        </li>
        <li>
          <strong>componentDidMount()</strong> – Runs after first render.
        </li>
        <li>
          <strong>componentDidUpdate()</strong> – Runs after updates to props or
          state.
        </li>
        <li>
          <strong>componentWillUnmount()</strong> – Runs just before component
          is removed.
        </li>
      </ul>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`class MyComponent extends React.Component {
  constructor() {
    super();
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Will Unmount");
  }

  render() {
    return <div>Hello</div>;
  }
}`}
      </pre>

      <h2 className="text-2xl font-semibold text-purple-600 mb-2">
        ⚙️ Functional Equivalent
      </h2>
      <p className="text-gray-700 mb-4">
        In functional components, we handle lifecycle using{" "}
        <strong>Hooks</strong>, mainly:
        <code className="bg-gray-200 px-1 mx-1 rounded">useEffect</code>,
        <code className="bg-gray-200 px-1 mx-1 rounded">useLayoutEffect</code>,
        and
        <code className="bg-gray-200 px-1 mx-1 rounded">useRef</code>.
      </p>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`useEffect(() => {
  // componentDidMount + componentDidUpdate

  return () => {
    // componentWillUnmount
  };
}, [dependencies]);`}
      </pre>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Update Count ({count})
      </button>

      <h2 className="text-xl font-semibold text-purple-600 mt-8 mb-2">
        🧠 Summary
      </h2>
      <table className="table-auto w-full text-left text-sm">
        <thead className="bg-purple-100">
          <tr>
            <th className="p-2">Class Lifecycle</th>
            <th className="p-2">Functional Hook</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2">constructor</td>
            <td className="p-2">useState, useRef</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">componentDidMount</td>
            <td className="p-2">useEffect(() =&gt; {}, [])</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">componentDidUpdate</td>
            <td className="p-2">useEffect(() =&gt; {}, [deps])</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">componentWillUnmount</td>
            <td className="p-2">return () =&gt; {} in useEffect</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LifecyclePage;
