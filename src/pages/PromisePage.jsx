import React from "react";

const PromisePage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        Promise / Async / Await in JavaScript
      </h1>

      <p className="text-gray-700 mb-4">
        A <strong>Promise</strong> is like a "commitment to do something in the
        future" in JavaScript. It is used to handle asynchronous operations like
        fetching data from a server or reading a file.
      </p>

      <p className="text-gray-700 mb-4">
        <strong>Async/await</strong> is a way to write asynchronous code that
        looks like synchronous code, making it easier to read and understand. It
        allows you to pause the execution of a function until a Promise is
        resolved or rejected.
      </p>

      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>
          <strong>Pending</strong>: The process is not yet completed
        </li>
        <li>
          <strong>Fulfilled</strong>: The process is successful
        </li>
        <li>
          <strong>Rejected</strong>: The process failed
        </li>
      </ul>

      {/* Promise Example */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        📦 Example using Promise:
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const order = () => {
  const hellow = new Promise((resolve, reject) => {
    console.log("Order Placed ...");

    setTimeout(() => {
      let success = Math.random() * 10 > 5;
      console.log(success);
      if (success) {
        resolve("Pizza delivered !");
      } else {
        reject("Your order has been cancelled !");
      }
    }, 3000);
  });
  return hellow;
};

order()
  .then((message) => console.log(message))
  .catch((err) => console.log(err))
  .finally(() => console.log("Thanks for Ordering"));`}
      </pre>

      {/* Async Await */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">
        🕒 Using async/await:
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const placeOrder = async () => {
  try {
    const message = await order();
    console.log(message);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Thanks for Ordering");
  }
};

placeOrder();`}
      </pre>

      {/* Promise.all */}
      <h2 className="text-2xl font-semibold mt-10 mb-2 text-green-700">
        🧩 Promise.all
      </h2>
      <p className="text-gray-700 mb-2">
        Waits for all Promises to resolve. If any one fails, it rejects.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then((values) => {
  console.log(values); // [1, 2, 3]
});`}
      </pre>

      {/* Promise.allSettled */}
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-green-700">
        📋 Promise.allSettled
      </h2>
      <p className="text-gray-700 mb-2">
        Waits for all Promises to finish, no matter resolved or rejected.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`Promise.allSettled([
  Promise.resolve("✅ Success"),
  Promise.reject("❌ Failed"),
]).then((results) => {
  console.log(results);
/*
[
  { status: "fulfilled", value: "✅ Success" },
  { status: "rejected", reason: "❌ Failed" }
]
*/
});`}
      </pre>

      {/* Promise.race */}
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-green-700">
        🏁 Promise.race
      </h2>
      <p className="text-gray-700 mb-2">
        Returns the result of the first Promise that resolves or rejects.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`Promise.race([
  new Promise((res) => setTimeout(() => res("First!"), 100)),
  new Promise((res) => setTimeout(() => res("Second!"), 200)),
]).then((value) => {
  console.log(value); // "First!"
});`}
      </pre>

      {/* Promise.any */}
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-green-700">
        🔍 Promise.any
      </h2>
      <p className="text-gray-700 mb-2">
        Resolves as soon as one Promise is fulfilled. Ignores rejections unless
        all fail.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`Promise.any([
  Promise.reject("Error"),
  Promise.resolve("Yay!"),
  Promise.resolve("Another Success"),
]).then((result) => {
  console.log(result); // "Yay!"
});`}
      </pre>
    </div>
  );
};

export default PromisePage;
