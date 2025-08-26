import React from "react";

const ClassVsFunctionComponentPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🆚 Class Component vs Functional Component in React
      </h1>

      <p className="text-gray-700 mb-4">
        React offers two ways to define components:{" "}
        <strong>Class Components</strong> and{" "}
        <strong>Functional Components</strong>. Modern React encourages using
        functional components with hooks.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
        🔍 Key Differences
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full table-auto border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2 border border-gray-300">Aspect</th>
              <th className="p-2 border border-gray-300">Class Component</th>
              <th className="p-2 border border-gray-300">
                Functional Component
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">Syntax</td>
              <td className="p-2 border border-gray-300">Uses ES6 class</td>
              <td className="p-2 border border-gray-300">
                Uses plain function
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">State Management</td>
              <td className="p-2 border border-gray-300">
                Via <code>this.state</code> and <code>this.setState</code>
              </td>
              <td className="p-2 border border-gray-300">
                Via <code>useState</code> Hook
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">Lifecycle Methods</td>
              <td className="p-2 border border-gray-300">
                Uses methods like <code>componentDidMount</code>
              </td>
              <td className="p-2 border border-gray-300">
                Uses <code>useEffect</code>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">Boilerplate</td>
              <td className="p-2 border border-gray-300">More verbose</td>
              <td className="p-2 border border-gray-300">
                Simpler and cleaner
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">Performance</td>
              <td className="p-2 border border-gray-300">
                Slightly heavier due to <code>this</code> binding
              </td>
              <td className="p-2 border border-gray-300">
                More optimized and modern
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-blue-600 mb-2">
        🧱 Class Component Example
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;`}
      </pre>

      <h2 className="text-xl font-semibold text-blue-600 mb-2">
        🧩 Functional Component Example
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;`}
      </pre>
    </div>
  );
};

export default ClassVsFunctionComponentPage;
