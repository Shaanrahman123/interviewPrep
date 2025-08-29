import React, { useState } from "react";

const SearchFilterPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data
  const items = [
    "React",
    "Angular",
    "Vue",
    "Svelte",
    "Next.js",
    "Node.js",
    "Express",
    "JavaScript",
    "TypeScript",
  ];

  // Filtered items
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        🔍 Search Textbox Filter in ReactJS
      </h1>

      <p className="text-gray-700 mb-4">
        A **search filter** allows users to dynamically filter a list of items
        based on input text. In React, we achieve this using{" "}
        <code>useState</code> and <code>Array.filter()</code>.
      </p>

      {/* Working Example */}
      <div className="bg-white shadow p-6 rounded-lg w-80">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <ul className="list-disc pl-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index} className="text-gray-800">
                {item}
              </li>
            ))
          ) : (
            <p className="text-red-500">No results found.</p>
          )}
        </ul>
      </div>

      {/* Source Code */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 Full Source Code
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`import React, { useState } from "react";

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    "React",
    "Angular",
    "Vue",
    "Svelte",
    "Next.js",
    "Node.js",
    "Express",
    "JavaScript",
    "TypeScript",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
}`}
      </pre>
    </div>
  );
};

export default SearchFilterPage;
