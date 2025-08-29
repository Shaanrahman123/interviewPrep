import React from "react";

const React19Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        🚀 React 19 - What's New?
      </h1>

      <p className="text-gray-700 mb-4">
        React 19 is the upcoming major release of React that focuses on{" "}
        <strong>
          performance, better developer experience, and built-in features
        </strong>
        . It brings new hooks, improved server components, async handling, and
        better integration for forms and actions.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
        🌟 Key Highlights of React 19
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          New <strong>React hooks</strong> for handling async actions and forms.
        </li>
        <li>
          Improved <strong>Server Components</strong> for better SSR and
          streaming.
        </li>
        <li>
          Better <strong>performance and bundle size optimizations</strong>.
        </li>
        <li>
          Built-in <strong>async support</strong> with Suspense and Actions.
        </li>
        <li>
          Improved <strong>developer ergonomics</strong> with new APIs.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-700 mt-6 mb-2">
        🪝 New Hooks in React 19
      </h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <code>useActionState</code> → Handle async actions (like form
          submission).
        </li>
        <li>
          <code>useOptimistic</code> → Optimistic UI updates (instant feedback
          before server confirms).
        </li>
        <li>
          <code>useFormStatus</code> → Check the status of form submission.
        </li>
        <li>
          <code>use</code> → use() lets you directly read promises inside
          components without manually managing useEffect and state.
        </li>
      </ul>

      {/* Example useActionState */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Example: useActionState (React 19)
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`import { useActionState } from "react";

async function submitForm(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { message: "Form submitted successfully ✅" };
}

export default function MyForm() {
  const [state, formAction] = useActionState(submitForm, { message: "" });

  return (
    <form action={formAction}>
      <input type="text" name="username" placeholder="Enter name" />
      <button type="submit">Submit</button>
      <p>{state.message}</p>
    </form>
  );
}`}
      </pre>

      {/* Example useOptimistic */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Example: useOptimistic (React 19)
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`import { useOptimistic } from "react";

export default function LikeButton() {
  const [likes, setLikes] = React.useState(0);

  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes, newLike) => currentLikes + newLike
  );

  const handleLike = async () => {
    addOptimisticLike(1); // UI updates instantly
    await new Promise((r) => setTimeout(r, 1500)); // simulate API
    setLikes((l) => l + 1); // confirm from server
  };

  return (
    <div>
      <p>👍 {optimisticLikes}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}`}
      </pre>

      {/* Example use hook */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Example: use() Hook (React 19)
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`import React, { use } from "react";

async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
}

export default function UserComponent() {
  const user = use(fetchUser()); // Suspends until resolved

  return (
    <div>
      <h2>👤 {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}`}
      </pre>

      {/* Example transform */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Example: transform API (React 19 Server Components)
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`// Server Component
import { transform } from "react";

function ServerComponent() {
  const bigData = { message: "Hello World", date: new Date() };

  return (
    <ClientComponent
      data={transform(bigData, (d) => ({
        ...d,
        formattedDate: d.date.toDateString(),
      }))}
    />
  );
}

// Client Component
function ClientComponent({ data }) {
  return (
    <div>
      <p>{data.message}</p>
      <p>{data.formattedDate}</p>
    </div>
  );
}`}
      </pre>
    </div>
  );
};

export default React19Page;
