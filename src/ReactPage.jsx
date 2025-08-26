import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">React Concepts</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/reactexplain">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">Explain react</h2>
          </div>
        </Link>
        <Link to="/client-vs-server">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-[18px] font-semibold text-wrap">
              client vs server
            </h2>
          </div>
        </Link>
        <Link to="/LifecyclePage">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">React Lifecycle</h2>
          </div>
        </Link>
        <Link to="/virtualdom">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">Virtual Dom vs</h2>
          </div>
        </Link>
        <Link to="/controlleduncontrolled">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              controlled uncontrolled
            </h2>
          </div>
        </Link>
        <Link to="/memohookpage">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              usememo callback memo
            </h2>
          </div>
        </Link>
        <Link to="/EffectHooksPage">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              UseEffect UseLayoutEffect
            </h2>
          </div>
        </Link>

        <Link to="/OptimizationPage">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              Optimization splitting Lazy load
            </h2>
          </div>
        </Link>
        <Link to="/JSXBabelWebpackPage">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              JSX Babel Webpack
            </h2>
          </div>
        </Link>
        <Link to="/ReactPortalPage">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">React Portals</h2>
          </div>
        </Link>
        <Link to="/ClassVsFunctionComponentPage">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              Class Comp Vs Functional Comp
            </h2>
          </div>
        </Link>
        <Link to="/ReactHooksPage">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold text-wrap">
              useref usecontext useReducer
            </h2>
          </div>
        </Link>
        <Link to="/ReconciliationAndHOCPage">
          <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-xl transition-shadow cursor-pointer">
            <h2 className="text-[18px] font-semibold text-wrap">
              Reconciliation, Higher Order Comp
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
