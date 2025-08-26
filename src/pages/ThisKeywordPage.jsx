import React from "react";

const ThisKeywordPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">
        🔑 The <code>this</code> Keyword in JavaScript
      </h1>

      <p className="text-gray-700 mb-4">
        In JavaScript, the <code>this</code> keyword refers to the object from
        which a function is called. Its value depends on how and where the
        function is invoked.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        📌 Global Context
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`console.log(this); 
// In a browser, this refers to the window object.`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        👤 In an Object Method
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const person = {
  name: "Alice",
  greet() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Hello, Alice`}
      </pre>
      <p className="text-gray-700 mb-4">
        Here, <code>this</code> refers to the <code>person</code> object.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        ⚠️ Detached Function
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const greet = person.greet;
greet(); // this is undefined or window in non-strict mode`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        🧷 Using <code>bind</code>, <code>call</code>, and <code>apply</code>
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function greet() {
  console.log("Hello, " + this.name);
}

const user = { name: "Bob" };

greet.call(user);   // Hello, Bob
greet.apply(user);  // Hello, Bob
const boundGreet = greet.bind(user);
boundGreet();       // Hello, Bob`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        🚀 In Arrow Functions
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const obj = {
  name: "Charlie",
  greet: () => {
    console.log("Hello, " + this.name);
  }
};

obj.greet(); // "Hello, undefined" because arrow functions don't have their own this`}
      </pre>
      <p className="text-gray-700 mb-4">
        Arrow functions inherit <code>this</code> from the surrounding (lexical)
        scope.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        🔄 Summary Table
      </h2>
      <table className="min-w-full bg-white border border-gray-300 text-sm mb-6">
        <thead>
          <tr className="bg-purple-100 text-left">
            <th className="p-2 border">Context</th>
            <th className="p-2 border">
              Value of <code>this</code>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Global Scope (non-strict)</td>
            <td className="p-2 border">
              <code>window</code> object
            </td>
          </tr>
          <tr>
            <td className="p-2 border">Inside Object Method</td>
            <td className="p-2 border">The object</td>
          </tr>
          <tr>
            <td className="p-2 border">Arrow Function</td>
            <td className="p-2 border">Inherited from lexical scope</td>
          </tr>
          <tr>
            <td className="p-2 border">
              <code>bind</code>, <code>call</code>, <code>apply</code>
            </td>
            <td className="p-2 border">Explicitly set</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ThisKeywordPage;
