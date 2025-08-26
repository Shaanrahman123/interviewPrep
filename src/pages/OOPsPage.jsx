import React from "react";

export default function OOPsPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">
        🧱 OOPs Concepts in JavaScript
      </h1>

      <p className="text-gray-700 mb-4">
        Object-Oriented Programming (OOP) is a programming paradigm based on the
        concept of <strong>objects</strong>, which contain both data and
        behavior. JavaScript supports OOP through objects, prototypes, and ES6
        classes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        1. 🔹 Class
      </h2>
      <p className="text-gray-700 mb-2">
        A blueprint for creating objects with specific properties and methods.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
}

const p1 = new Person("Alice");
p1.greet();`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        2. 🔹 Object
      </h2>
      <p className="text-gray-700 mb-2">
        An instance of a class. It holds data and methods.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        3. 🔹 Inheritance
      </h2>
      <p className="text-gray-700 mb-2">
        Allows a class to inherit properties and methods from another class.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // from parent
d.bark();  // from child`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        4. 🔹 Encapsulation
      </h2>
      <p className="text-gray-700 mb-2">
        Restricting access to certain details. Helps protect internal object
        state.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance());`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-purple-600">
        5. 🔹 Polymorphism
      </h2>
      <p className="text-gray-700 mb-2">
        Allows different classes to define methods with the same name but
        different behavior.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto mb-4">
        {`class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing circle");
  }
}

const s1 = new Shape();
const s2 = new Circle();

s1.draw(); // Drawing shape
s2.draw(); // Drawing circle`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-purple-600">
        📦 Summary
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <strong>Class:</strong> Template for creating objects
        </li>
        <li>
          <strong>Object:</strong> Instance of a class
        </li>
        <li>
          <strong>Inheritance:</strong> Sharing features between classes
        </li>
        <li>
          <strong>Encapsulation:</strong> Hiding internal details
        </li>
        <li>
          <strong>Polymorphism:</strong> Same method, different behavior
        </li>
      </ul>
    </div>
  );
}
