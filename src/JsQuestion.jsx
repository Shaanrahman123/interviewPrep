import React from "react";
import { Link } from "react-router-dom";

export default function JsQuestion() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">JavaScript Questions</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/palindrome">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap"> palindrome</h2>
          </div>
        </Link>
        <Link to="/reversestring">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap"> Reverse string</h2>
          </div>
        </Link>
        <Link to="/char-count">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              {" "}
              Character count occurence
            </h2>
          </div>
        </Link>
        <Link to="/prime-check">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap"> check prime</h2>
          </div>
        </Link>
        <Link to="/fibonacci">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">fibonacci</h2>
          </div>
        </Link>
        <Link to="/remove-duplicates">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              remove duplicates
            </h2>
          </div>
        </Link>
        <Link to="/count-vowels">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">count vowels</h2>
          </div>
        </Link>
        <Link to="/count-vowels">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">anagram check</h2>
          </div>
        </Link>
        <Link to="/unique-characters">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              unique char in string
            </h2>
          </div>
        </Link>
        <Link to="/largest-number">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              largest/smallest number in array
            </h2>
          </div>
        </Link>
        <Link to="/second-largest-number">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              Second largest/smallest number in array
            </h2>
          </div>
        </Link>
        <Link to="/sortings">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">sorting array</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
