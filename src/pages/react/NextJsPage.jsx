import React from "react";

const NextJsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        ⚡ Next.js Explained
      </h1>

      <p className="text-gray-700 mb-4">
        <strong>Next.js</strong> is a React framework for building{" "}
        <strong>full-stack web applications</strong>. It provides features like
        server-side rendering (SSR), static site generation (SSG), API routes,
        image optimization, and routing out-of-the-box. While React is only for
        building UI components, Next.js extends React into a **framework** for
        building complete applications.
      </p>

      {/* Key Features */}
      <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
        🌟 Key Features of Next.js
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <strong>File-based Routing</strong> → Pages are created using the{" "}
          <code>pages/</code> or <code>app/</code> directory.
        </li>
        <li>
          <strong>Server-Side Rendering (SSR)</strong> → Render pages
          dynamically on the server.
        </li>
        <li>
          <strong>Static Site Generation (SSG)</strong> → Generate pages at
          build time for fast loading.
        </li>
        <li>
          <strong>Incremental Static Regeneration (ISR)</strong> → Update static
          pages without full rebuild.
        </li>
        <li>
          <strong>API Routes</strong> → Build backend APIs inside Next.js
          without separate server.
        </li>
        <li>
          <strong>Image Optimization</strong> → Automatic resizing, lazy
          loading, and format conversion.
        </li>
        <li>
          <strong>Built-in CSS & Sass support</strong> → Plus support for CSS
          Modules and Tailwind CSS.
        </li>
        <li>
          <strong>Server + Client Rendering</strong> → Hybrid rendering based on
          needs.
        </li>
      </ul>

      {/* How it Works */}
      <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
        ⚙️ How Next.js Works
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <strong>Server-Side</strong> → Next.js can render components on the
          server before sending HTML to the browser.
        </li>
        <li>
          <strong>Client-Side</strong> → Once the page loads, React takes over,
          making the app interactive.
        </li>
        <li>
          <strong>Hybrid</strong> → You can mix SSR, SSG, ISR, and client-side
          fetching in one app.
        </li>
      </ul>

      {/* Difference from React */}
      <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
        🔄 Next.js vs React
      </h2>
      <table className="w-full border border-gray-300 text-left text-gray-700">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Feature</th>
            <th className="p-2 border">React</th>
            <th className="p-2 border">Next.js</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Type</td>
            <td className="p-2 border">Library (UI-focused)</td>
            <td className="p-2 border">Framework (Full-stack)</td>
          </tr>
          <tr>
            <td className="p-2 border">Routing</td>
            <td className="p-2 border">Requires React Router</td>
            <td className="p-2 border">Built-in File-based Routing</td>
          </tr>
          <tr>
            <td className="p-2 border">Rendering</td>
            <td className="p-2 border">Client-side only</td>
            <td className="p-2 border">SSR, SSG, ISR, CSR</td>
          </tr>
          <tr>
            <td className="p-2 border">API</td>
            <td className="p-2 border">Needs external backend</td>
            <td className="p-2 border">API routes built-in</td>
          </tr>
          <tr>
            <td className="p-2 border">Performance</td>
            <td className="p-2 border">Depends on setup</td>
            <td className="p-2 border">Optimized by default</td>
          </tr>
        </tbody>
      </table>

      {/* Example SSR */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Example: Server-Side Rendering (SSR) in Next.js
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`// pages/index.js
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();
  return { props: { post } };
}

export default function Home({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}`}
      </pre>

      {/* Example SSG */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Example: Static Site Generation (SSG)
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`// pages/blog.js
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}`}
      </pre>

      {/* Example API Route */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Example: API Route in Next.js
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Next.js API 🚀" });
}`}
      </pre>
    </div>
  );
};

export default NextJsPage;
