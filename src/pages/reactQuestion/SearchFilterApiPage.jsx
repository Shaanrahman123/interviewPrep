import React, { useEffect, useState, Suspense } from "react";
// import axios from "axios";

const SearchFilterApiPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  // ✅ Live working example using fetch()
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        🔍 Search Filter with DummyJSON API
      </h1>

      <div className="bg-white shadow p-6 rounded-lg w-full max-w-lg">
        <input
          type="text"
          placeholder="Search products by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <ul className="list-disc pl-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li key={product.id} className="mb-2 text-gray-800">
                {product.title} -{" "}
                <span className="text-green-600">${product.price}</span>
              </li>
            ))
          ) : (
            <p className="text-red-500">No results found.</p>
          )}
        </ul>
      </div>

      {/* Full Source Code */}
      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">
        📌 3 Different Full Implementations
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`// ✅ 1. Using Fetch API
import React, { useEffect, useState } from "react";

export default function FetchExample() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search with Fetch</h2>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title"
      />
      <ul>
        {filtered.map(p => (
          <li key={p.id}>{p.title} - $ {p.price}</li>
        ))}
      </ul>
    </div>
  );
}


// ✅ 2. Using Axios
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosExample() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search with Axios</h2>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title"
      />
      <ul>
        {filtered.map(p => (
          <li key={p.id}>{p.title} - $ {p.price}</li>
        ))}
      </ul>
    </div>
  );
}


// ✅ 3. Using React 19 "use()" Hook + Suspense
import React, { useState, Suspense } from "react";
import { use } from "react";

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

function ProductsList({ searchTerm }) {
  const data = use(fetchProducts());
  const filtered = data.products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filtered.map(p => (
        <li key={p.id}>{p.title} - $ {p.price}</li>
      ))}
    </ul>
  );
}

export default function UseHookExample() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h2>Search with React 19 use()</h2>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title"
      />
      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList searchTerm={searchTerm} />
      </Suspense>
    </div>
  );
}
`}
      </pre>
    </div>
  );
};

export default SearchFilterApiPage;
