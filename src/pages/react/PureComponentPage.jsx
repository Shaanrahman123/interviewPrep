import React, { PureComponent, useState } from "react";

function PureComponentPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        ⚛️ React PureComponent
      </h1>

      <p className="text-gray-700 mb-4">
        <b>PureComponent</b> is a type of React component that implements{" "}
        <code>shouldComponentUpdate</code> with a **shallow comparison** of
        props and state. This means React will re-render the component only if{" "}
        <b>props or state have changed</b>, avoiding unnecessary re-renders.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
        🌟 Key Points
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>PureComponent vs Component:</b> Both are class components, but
          <code>PureComponent</code> does a shallow comparison automatically.
        </li>
        <li>
          Prevents <b>unnecessary re-renders</b> when props/state remain the
          same.
        </li>
        <li>
          Works only with <b>class components</b>. For function components, use{" "}
          <code>React.memo</code>.
        </li>
        <li>
          Shallow comparison → only checks first level of objects/arrays (deep
          changes may not be detected).
        </li>
      </ul>

      {/* Example: Normal Component */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Example 1: Normal React Component
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`import React, { Component } from "react";

class NormalCounter extends Component {
  render() {
    console.log("Normal Component Rendered");
    return <h3>Count: {this.props.count}</h3>;
  }
}

export default NormalCounter;`}
      </pre>

      {/* Example: PureComponent */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Example 2: PureComponent
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`import React, { PureComponent } from "react";

class PureCounter extends PureComponent {
  render() {
    console.log("Pure Component Rendered");
    return <h3>Count: {this.props.count}</h3>;
  }
}

export default PureCounter;`}
      </pre>

      {/* Example: Using Both Together */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Example 3: Using Normal vs PureComponent
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`import React, { useState } from "react";
import NormalCounter from "./NormalCounter";
import PureCounter from "./PureCounter";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>🔄 PureComponent vs Component</h2>
      <button onClick={() => setCount(count)}>Update (no change)</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <NormalCounter count={count} />
      <PureCounter count={count} />
    </div>
  );
}`}
      </pre>

      <p className="text-gray-700 mt-4">
        👉 When clicking <b>Update (no change)</b>, the <b>Normal Component</b>{" "}
        still re-renders, but the <b>PureComponent</b> skips rendering (since
        count didn’t change).
      </p>

      {/* Summary */}
      <h2 className="text-xl font-bold text-green-700 mt-6 mb-2">🎯 Summary</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          Use <code>PureComponent</code> for class components to optimize
          performance.
        </li>
        <li>
          For function components, prefer <code>React.memo</code>.
        </li>
        <li>
          Be careful with deep objects/arrays → shallow comparison won’t detect
          internal changes.
        </li>
      </ul>
    </div>
  );
}

export default PureComponentPage;
