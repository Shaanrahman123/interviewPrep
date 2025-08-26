import React from "react";

const ControlledVsUncontrolledPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🎛️ Controlled vs Uncontrolled Components
      </h1>

      <p className="text-gray-700 mb-4">
        In React, form elements like inputs can be either{" "}
        <strong>controlled</strong> or <strong>uncontrolled</strong> depending
        on how their value is managed.
      </p>

      {/* Controlled Component */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        ✅ Controlled Components
      </h2>
      <p className="text-gray-700 mb-4">
        A controlled component is one where the form data is handled by the
        React component using <code>useState</code>. The input's value is
        controlled by React state.
      </p>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`import React, { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`}
      </pre>

      {/* Uncontrolled Component */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        🔓 Uncontrolled Components
      </h2>
      <p className="text-gray-700 mb-4">
        In uncontrolled components, form data is handled by the DOM itself. We
        access it using a <code>ref</code> instead of storing it in React state.
      </p>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert("Value: " + inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}`}
      </pre>

      {/* Comparison Table */}
      <h2 className="text-xl font-semibold text-blue-600 mb-3">
        🔍 Comparison Table
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full text-sm text-left text-gray-700 border border-gray-300">
          <thead className="bg-gray-100 font-semibold">
            <tr>
              <th className="px-4 py-2 border">Feature</th>
              <th className="px-4 py-2 border">Controlled</th>
              <th className="px-4 py-2 border">Uncontrolled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Data Management</td>
              <td className="px-4 py-2 border">React State</td>
              <td className="px-4 py-2 border">DOM via Refs</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Initial Value</td>
              <td className="px-4 py-2 border">via state</td>
              <td className="px-4 py-2 border">via defaultValue</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Ease of Validation</td>
              <td className="px-4 py-2 border">Easier</td>
              <td className="px-4 py-2 border">Manual</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Use Case</td>
              <td className="px-4 py-2 border">Controlled forms</td>
              <td className="px-4 py-2 border">Simple forms, fast rendering</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <h2 className="text-xl font-semibold text-blue-600 mb-2">🧠 Summary</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Controlled = React is in charge</li>
        <li>Uncontrolled = DOM is in charge</li>
        <li>
          Use controlled for complex forms, validation, or dynamic behavior
        </li>
        <li>Use uncontrolled for simple or non-critical inputs</li>
      </ul>
    </div>
  );
};

export default ControlledVsUncontrolledPage;
