import React from "react";

export default function DOMPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        🌳 DOM (Document Object Model)
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>DOM</strong> is a programming interface that represents a
        web page as a tree of nodes. Each element, attribute, and piece of text
        is a node in this tree.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-600">
        🔍 Why DOM Matters?
      </h2>
      <p className="text-gray-700 mb-4">
        JavaScript uses the DOM to dynamically read, change, add, or delete
        elements and content on a web page.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-600">
        📘 Basic Example
      </h2>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`<p id="greet">Hello</p>

<script>
  document.getElementById("greet").innerText = "Hello, World!";
</script>`}
      </pre>

      <p className="text-gray-700 mb-4">
        This example selects a paragraph by its ID and changes its text content
        using the DOM.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-600">
        🛠️ Common DOM Methods
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <code>getElementById()</code>
        </li>
        <li>
          <code>querySelector()</code>
        </li>
        <li>
          <code>createElement()</code>
        </li>
        <li>
          <code>appendChild()</code>
        </li>
        <li>
          <code>removeChild()</code>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-green-600">
        ⚡ Interactive Example
      </h2>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`<button onclick="changeColor()">Click Me</button>
<p id="text">Change my color!</p>

<script>
  function changeColor() {
    document.getElementById("text").style.color = "red";
  }
</script>`}
      </pre>

      <p className="text-gray-700">
        In this example, clicking the button changes the paragraph text color
        using DOM manipulation.
      </p>
    </div>
  );
}
