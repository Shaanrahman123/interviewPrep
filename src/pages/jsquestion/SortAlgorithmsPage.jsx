import React from "react";

const SortAlgorithmsPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        📊 Sorting an Array using Different Algorithms
      </h1>

      <p className="text-gray-700 mb-4">
        Sorting algorithms are used to arrange elements in a specific order
        (usually ascending or descending). Below are implementations of some
        common sorting algorithms.
      </p>

      {/* Bubble Sort */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        🔁 Bubble Sort
      </h2>
      <p className="text-gray-700 mb-2">
        Compares adjacent elements and swaps them if they are in the wrong
        order. Repeats until the array is sorted.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));`}
      </pre>

      {/* Insertion Sort */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        📥 Insertion Sort
      </h2>
      <p className="text-gray-700 mb-2">
        Builds the sorted array one item at a time by comparing and inserting
        the current element into the correct position.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([5, 3, 8, 4, 2]));`}
      </pre>

      {/* Quick Sort */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        ⚡ Quick Sort
      </h2>
      <p className="text-gray-700 mb-2">
        A divide-and-conquer algorithm that picks a pivot and partitions the
        array into elements smaller and larger than the pivot.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2]));`}
      </pre>

      {/* Merge Sort */}
      <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">
        🧩 Merge Sort
      </h2>
      <p className="text-gray-700 mb-2">
        Another divide-and-conquer algorithm that recursively divides the array
        and merges sorted parts.
      </p>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto">
        {`function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5, 3, 8, 4, 2]));`}
      </pre>

      <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
        📌 Summary
      </h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>🔁 Bubble Sort: Easy but inefficient (O(n²))</li>
        <li>📥 Insertion Sort: Good for small/mostly sorted arrays (O(n²))</li>
        <li>⚡ Quick Sort: Fast average case (O(n log n))</li>
        <li>🧩 Merge Sort: Consistent O(n log n), uses more memory</li>
      </ul>
    </div>
  );
};

export default SortAlgorithmsPage;
