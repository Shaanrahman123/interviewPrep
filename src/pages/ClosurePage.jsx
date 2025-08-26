import React from "react";

const ClosurePage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">Closures in JavaScript</h1>
      <p className="mb-4 text-gray-700">
        A closure is a function that remembers the variables from its outer
        scope even after the outer function has finished executing.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`const vendingMachine = (initialAmount) => {
  let balance = initialAmount;
  return (itemPrice) => {
    if (!itemPrice) {
      console.log("please add item");
      return;
    }
    if (balance >= itemPrice) {
      balance -= itemPrice;
      console.log(\`item dispensed ! Remaining balance : \${balance}\`);
    } else {
      console.log(\`Insufficient Balance ! Remaining balance : \${balance}\`);
    }
  };
};

const shaan = vendingMachine(10);
shaan();
shaan(4);
shaan(2);
shaan(4);
shaan(3);`}
      </pre>
      <p className="mt-4 text-gray-700">
        Even after <code>vendingMachine</code> has executed, the inner function
        still retains access to <code>balance</code>, forming a closure. This is
        useful for maintaining state or creating private variables.
      </p>
    </div>
  );
};

export default ClosurePage;
