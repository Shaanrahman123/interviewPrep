import React from "react";

const VirtualDomVsDomPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        🌐 DOM vs Virtual DOM
      </h1>

      <p className="text-gray-700 mb-4">
        Understanding the difference between the <strong>DOM</strong> and the{" "}
        <strong>Virtual DOM</strong> is crucial for grasping how modern frontend
        frameworks like <strong>React</strong> work.
      </p>

      {/* DOM Section */}
      <h2 className="text-2xl font-semibold text-purple-600 mb-2">
        📘 What is the DOM?
      </h2>
      <p className="text-gray-700 mb-4">
        The <strong>Document Object Model (DOM)</strong> is a programming
        interface provided by the browser that represents the structure of a web
        page as a tree of nodes (elements, attributes, and text).
      </p>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`<div id="root">
  <h1>Hello World</h1>
</div>

<script>
  document.getElementById("root").innerHTML = "<h1>Hi!</h1>";
</script>`}
      </pre>

      <p className="text-gray-700 mb-6">
        The DOM is updated directly using JavaScript. But frequent updates can
        slow down performance, especially with large applications.
      </p>

      {/* Virtual DOM Section */}
      <h2 className="text-2xl font-semibold text-purple-600 mb-2">
        ⚛️ What is the Virtual DOM?
      </h2>
      <p className="text-gray-700 mb-4">
        The <strong>Virtual DOM</strong> is a lightweight JavaScript object that
        is a copy of the real DOM. It is used in frameworks like React to
        improve performance.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>React creates a virtual copy of the real DOM in memory.</li>
        <li>
          When changes happen, it compares the new Virtual DOM with the old one
          (using a process called <strong>diffing</strong>).
        </li>
        <li>
          Then React updates only the parts of the real DOM that actually
          changed (using <strong>reconciliation</strong>).
        </li>
      </ul>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello from React!</h1>);`}
      </pre>

      {/* Comparison Table */}
      <h2 className="text-xl font-semibold text-purple-600 mt-6 mb-3">
        🔍 DOM vs Virtual DOM Comparison
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700 border border-gray-300">
          <thead className="bg-gray-200 font-semibold">
            <tr>
              <th className="px-4 py-2 border">Feature</th>
              <th className="px-4 py-2 border">DOM</th>
              <th className="px-4 py-2 border">Virtual DOM</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2 border">Speed</td>
              <td className="px-4 py-2 border">Slower with frequent updates</td>
              <td className="px-4 py-2 border">
                Faster due to minimal updates
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 border">Update</td>
              <td className="px-4 py-2 border">Direct manipulation</td>
              <td className="px-4 py-2 border">Batch + optimized updates</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 border">Used In</td>
              <td className="px-4 py-2 border">Vanilla JavaScript, jQuery</td>
              <td className="px-4 py-2 border">React, Vue, etc.</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 border">Performance</td>
              <td className="px-4 py-2 border">
                Can cause reflows and repaints
              </td>
              <td className="px-4 py-2 border">Efficient and optimized</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-6 text-purple-600 mb-2">
        💡 Summary
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>DOM is the real structure rendered in the browser.</li>
        <li>
          Virtual DOM is a smart copy used to efficiently update the real DOM.
        </li>
        <li>React uses the Virtual DOM to enhance UI performance.</li>
      </ul>
    </div>
  );
};

export default VirtualDomVsDomPage;
