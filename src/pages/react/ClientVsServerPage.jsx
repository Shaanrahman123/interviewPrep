import React from "react";

const ClientVsServerPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        🧭 Client-Side vs Server-Side Components
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">
          🌐 Client-Side Components
        </h2>
        <p className="text-gray-700 mb-4">
          Client-side components are rendered entirely in the browser after the
          initial page load.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Used for interactive UI and handling events.</li>
          <li>
            Can use browser APIs like <code>localStorage</code>,{" "}
            <code>window</code>, etc.
          </li>
          <li>Better suited for dynamic behavior (dropdowns, modals, etc.).</li>
          <li>Load time may be slightly longer due to JavaScript execution.</li>
        </ul>
        <h3 className="font-semibold text-purple-500">Example:</h3>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
          {`// ClientComponent.jsx
"use client"; // Required in Next.js 13+

import React, { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">
          🖥️ Server-Side Components
        </h2>
        <p className="text-gray-700 mb-4">
          Server-side components are rendered on the server before sending HTML
          to the browser.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Faster initial page load (HTML is ready to render).</li>
          <li>Better for SEO, static/dynamic content generation.</li>
          <li>Can securely access server-only resources (databases, APIs).</li>
          <li>
            Cannot use browser-specific features or React hooks like{" "}
            <code>useState</code>.
          </li>
        </ul>
        <h3 className="font-semibold text-purple-500">Example:</h3>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
          {`// ServerComponent.jsx (in Next.js, no "use client")
export default async function ServerComponent() {
  const data = await fetch("https://api.example.com/posts").then(res => res.json());
  return (
    <div>
      <h2>Blog Posts</h2>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">
          ⚖️ Comparison Table
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 text-sm text-left">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-4 py-2 border">Aspect</th>
                <th className="px-4 py-2 border">Client Component</th>
                <th className="px-4 py-2 border">Server Component</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Rendered</td>
                <td className="px-4 py-2 border">Browser</td>
                <td className="px-4 py-2 border">Server</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">SEO</td>
                <td className="px-4 py-2 border">Poor</td>
                <td className="px-4 py-2 border">Excellent</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Performance</td>
                <td className="px-4 py-2 border">Slower initial load</td>
                <td className="px-4 py-2 border">Faster initial load</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Interactivity</td>
                <td className="px-4 py-2 border">High</td>
                <td className="px-4 py-2 border">Low / None</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Access to browser APIs</td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">No</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Use React Hooks</td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ClientVsServerPage;
