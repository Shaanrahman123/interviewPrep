import React from "react";

const ReactPortalPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        📌 React Portals
      </h1>

      <p className="text-gray-700 mb-4">
        A <strong>Portal</strong> allows you to render a component outside of
        its parent component hierarchy, but still stay logically connected to
        the React tree.
      </p>

      <p className="text-gray-700 mb-4">
        This is particularly useful for UI elements like modals, tooltips, and
        dropdowns that need to visually "break out" of a container without
        breaking React context or event bubbling.
      </p>

      <h2 className="text-2xl font-semibold text-purple-600 mt-6 mb-2">
        🛠 How to Use a Portal
      </h2>
      <p className="text-gray-700 mb-2">
        First, add a portal target in your HTML (usually in{" "}
        <code>public/index.html</code>):
      </p>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`<!-- index.html -->
<body>
  <div id="root"></div>
  <div id="portal-root"></div>
</body>`}
      </pre>

      <p className="text-gray-700 mb-2">
        Then use <code>ReactDOM.createPortal</code> to render a component into
        that node:
      </p>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`// Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600"
        >
          ❌
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;`}
      </pre>

      <p className="text-gray-700 mb-2">
        Now you can use the modal like a regular component:
      </p>

      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-6">
        {`// App.js or any other component
import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-bold mb-2">Hello from Portal!</h2>
          <p>This modal is rendered outside the main DOM tree.</p>
        </Modal>
      )}
    </div>
  );
};

export default App;`}
      </pre>

      <h2 className="text-xl font-semibold text-purple-600 mt-8 mb-2">
        🧠 Why Use Portals?
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Overlay modals outside scrollable containers</li>
        <li>Prevent z-index or CSS overflow issues</li>
        <li>Keep logical component structure with visual separation</li>
        <li>Maintain React context and event bubbling</li>
      </ul>
    </div>
  );
};

export default ReactPortalPage;
