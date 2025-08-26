import React from "react";

const OptimizationPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🚀 Optimizing React Applications
      </h1>

      {/* Optimization Techniques */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          🛠️ General Optimization Tips
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Use <code>React.memo</code> to prevent unnecessary re-renders.
          </li>
          <li>
            Use <code>useMemo</code> and <code>useCallback</code> to cache
            values/functions.
          </li>
          <li>Break large components into smaller reusable components.</li>
          <li>Use keys properly in lists to optimize diffing.</li>
          <li>Avoid inline functions in JSX (especially in large lists).</li>
          <li>
            Use proper state management (e.g., Context API, Redux, Zustand).
          </li>
          <li>Remove unused code or dependencies.</li>
          <li>Use dynamic imports and lazy loading for large components.</li>
        </ul>
      </section>

      {/* Code Splitting */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          ✂️ Code Splitting in React
        </h2>
        <p className="text-gray-700 mb-4">
          Code splitting allows you to split your bundle into smaller chunks so
          users don’t have to download the entire app at once. React supports
          this through dynamic <code>import()</code>.
        </p>

        <h3 className="text-xl font-semibold text-blue-500 mb-2">
          📦 Example of Code Splitting:
        </h3>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
          {`import React, { lazy, Suspense } from 'react';

const About = lazy(() => import('./About'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}`}
        </pre>
        <p className="text-gray-700">
          In this example, the <code>About</code> component is loaded only when
          needed.
        </p>
      </section>

      {/* Lazy Loading */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          💤 Lazy Loading in React
        </h2>
        <p className="text-gray-700 mb-4">
          Lazy loading means loading a component or resource only when it's
          required. It helps reduce the initial load time of your application.
        </p>

        <h3 className="text-xl font-semibold text-blue-500 mb-2">
          ⏳ Use Case:
        </h3>
        <p className="text-gray-700 mb-2">
          Instead of loading an entire admin dashboard at the start, load it
          only when the user navigates to it.
        </p>

        <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
          {`const AdminDashboard = React.lazy(() => import('./AdminDashboard'));

<Suspense fallback={<div>Loading dashboard...</div>}>
  <AdminDashboard />
</Suspense>`}
        </pre>
        <p className="text-gray-700">
          Use <code>Suspense</code> to wrap the lazy-loaded component and show a
          fallback UI while it's loading.
        </p>
      </section>
    </div>
  );
};

export default OptimizationPage;
