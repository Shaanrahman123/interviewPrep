import React from "react";

const WhatIsReactPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        ⚛️ What is React?
      </h1>

      <p className="text-gray-700 mb-4">
        <strong>React</strong> is a popular JavaScript library used to build
        user interfaces, especially for single-page applications. It helps
        developers build fast, interactive, and reusable UI components.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-3">
        📌 Key Points:
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          🧩 <strong>Component-Based:</strong> UI is built using reusable
          components which manage their own state.
        </li>
        <li>
          ⚙️ <strong>JSX (JavaScript XML):</strong> React uses JSX syntax that
          allows HTML to be written inside JavaScript.
        </li>
        <li>
          🔄 <strong>Unidirectional Data Flow:</strong> Data in React flows from
          parent to child, making it predictable and easy to debug.
        </li>
        <li>
          🌐 <strong>Virtual DOM:</strong> React uses a virtual DOM to improve
          performance by minimizing direct DOM manipulations.
        </li>
        <li>
          📦 <strong>Rich Ecosystem:</strong> Includes tools like React Router,
          Redux, and Context API for routing and state management.
        </li>
        <li>
          🔄 <strong>Hooks:</strong> Introduced in React 16.8, hooks allow
          function components to use state and side effects.
        </li>
        <li>
          📱 <strong>React Native:</strong> React can also be used to build
          mobile apps using the same component-based architecture.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
        💡 Example JSX:
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Welcome name="React Learner" />`}
      </pre>
    </div>
  );
};

export default WhatIsReactPage;
