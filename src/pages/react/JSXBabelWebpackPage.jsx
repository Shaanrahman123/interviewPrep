import React from "react";

const JSXBabelWebpackPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        ⚛️ JSX, Babel & Webpack in React
      </h1>

      {/* JSX */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">
        📘 JSX (JavaScript XML)
      </h2>
      <p className="text-gray-700 mb-4">
        <strong>JSX</strong> is a syntax extension for JavaScript that allows
        you to write HTML-like code in your JavaScript files. It's used in React
        to describe UI structure clearly.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`const element = <h1>Hello, JSX!</h1>;`}
      </pre>
      <p className="text-gray-700 mb-6">
        JSX makes your code more readable and expressive, and it gets
        transformed into `React.createElement(...)` calls by Babel.
      </p>

      {/* Babel */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">🔧 Babel</h2>
      <p className="text-gray-700 mb-4">
        <strong>Babel</strong> is a JavaScript compiler that transforms JSX and
        modern ES6+ syntax into browser-compatible JavaScript.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`// JSX
const element = <h1>Hello</h1>;

// Transpiled by Babel
const element = React.createElement('h1', null, 'Hello');`}
      </pre>
      <p className="text-gray-700 mb-6">
        Babel ensures your React code works across all browsers by converting
        new syntax into older, compatible versions.
      </p>

      {/* Webpack */}
      <h2 className="text-2xl font-semibold text-blue-600 mb-2">📦 Webpack</h2>
      <p className="text-gray-700 mb-4">
        <strong>Webpack</strong> is a module bundler. It takes all your JS, CSS,
        assets, etc., and bundles them into optimized files that the browser can
        load efficiently.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Bundles JS files (including JSX)</li>
        <li>Handles assets (images, fonts, etc.)</li>
        <li>Uses plugins/loaders (e.g., Babel loader)</li>
      </ul>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`// Webpack config sample
module.exports = {
  module: {
    rules: [
      {
        test: /\\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};`}
      </pre>

      {/* Summary */}
      <h2 className="text-xl font-semibold text-blue-600 mt-8 mb-2">
        🧠 Summary
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <strong>JSX</strong>: HTML-like syntax for React
        </li>
        <li>
          <strong>Babel</strong>: Converts JSX and modern JS to ES5
        </li>
        <li>
          <strong>Webpack</strong>: Bundles files into one optimized package
        </li>
      </ul>
    </div>
  );
};

export default JSXBabelWebpackPage;
