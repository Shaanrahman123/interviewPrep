import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ReactPage from "./ReactPage";
import JsQuestion from "./JsQuestion";
import ReactQuestion from "./ReactQuestion";
import ClosurePage from "./pages/ClosurePage";
import PromisePage from "./pages/PromisePage";
import CallApplyBindPage from "./pages/CallApplyBindPage";
import EventLoopPage from "./pages/EventLoopPage";
import MemoizationPage from "./pages/MemoizationPage";
import HOFCallbackPage from "./pages/HOFCallbackPage";
import HowJSWorksPage from "./pages/HowJSWordsPaage";
import HoistingPage from "./pages/HoistingPage";
import DebounceThrottlePage from "./pages/DebounceThrottlePage";
import ArrayMethodsPage from "./pages/ArrayMethodsPage";
import PolyfillPage from "./pages/PolyfillPage";
import DOMPage from "./pages/DOMPage";
import Navbar from "./Navbar";
import OOPsPage from "./pages/OOPsPage";
import SpreadRestDestructuring from "./pages/SpreadRestDestructuring";
import ThisKeywordPage from "./pages/ThisKeywordPage";
import CopyConceptPage from "./pages/CopyConceptPage";
import PalindromePage from "./pages/jsquestion/PalindromePage";
import ReverseStringPage from "./pages/jsquestion/ReverseStringPage";
import CharCountPage from "./pages/jsquestion/CharCountPage";
import PrimeCheckPage from "./pages/jsquestion/PrimeCheckPage";
import FibonacciPage from "./pages/jsquestion/FibonacciPage";
import RemoveDuplicatesPage from "./pages/jsquestion/RemoveDuplicatesPage";
import CountVowelsPage from "./pages/jsquestion/CountVowelsPage";
import AnagramCheckPage from "./pages/jsquestion/AnagramCheckPage";
import UniqueCharactersPage from "./pages/jsquestion/UniqueCharactersPage";
import LargestNumberPage from "./pages/jsquestion/LargestNumberPage";
import SecondExtremePage from "./pages/jsquestion/SecondExtremePage";
import SortAlgorithmsPage from "./pages/jsquestion/SortAlgorithmsPage";

import WhatIsReactPage from "./pages/react/WhatIsReactPage";
import React19Page from "./pages/react/React19Page";
import NextJsPage from "./pages/react/NextJsPage";
import PureComponentPage from "./pages/react/PureComponentPage";
import VirtualDomVsDomPage from "./pages/react/VirtualDomVsDomPage";
import ControlledVsUncontrolledPage from "./pages/react/ControlledVsUncontrolledPage";
import MemoHooksPage from "./pages/react/MemoHooksPage";
import EffectHooksPage from "./pages/react/EffectHooksPage";
import LifecyclePage from "./pages/react/LifecyclePage";
import JSXBabelWebpackPage from "./pages/react/JSXBabelWebpackPage";
import ReactPortalPage from "./pages/react/ReactPortalPage";
import ClassVsFunctionComponentPage from "./pages/react/ClassVsFunctionComponentPage";
import ReactHooksPage from "./pages/react/ReactHooksPage";
import ReconciliationAndHOCPage from "./pages/react/ReconciliationAndHOCPage";
import OptimizationPage from "./pages/react/OptimizationPage";
import ClientVsServerPage from "./pages/react/ClientVsServerPage";
import TodoPage from "./pages/reactQuestion/TodoPage";
import CounterPage from "./pages/reactQuestion/CounterPage";
import SearchFilterPage from "./pages/reactQuestion/SearchFilterPage";
import SearchFilterApiPage from "./pages/reactQuestion/SearchFilterApiPage";
import StopwatchPage from "./pages/reactQuestion/StopwatchPage";
import AirlineBookingPage from "./pages/react/AirlineBookingPage";
import GlobalExecutionContextPage from "./pages/GlobalExecutionContentPage";
import MemoryAndCachePage from "./pages/MemoryAndCachePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/js-question" element={<JsQuestion />} />
        <Route path="/react-question" element={<ReactQuestion />} />
        <Route path="/closure" element={<ClosurePage />} />
        <Route path="/event-loop" element={<EventLoopPage />} />
        <Route path="/promise" element={<PromisePage />} />
        <Route path="/callapplybind" element={<CallApplyBindPage />} />
        <Route path="/memoization" element={<MemoizationPage />} />
        <Route path="/hof-callback" element={<HOFCallbackPage />} />
        <Route path="/how-js-works" element={<HowJSWorksPage />} />
        <Route path="/hoisting" element={<HoistingPage />} />
        <Route path="/dom" element={<DOMPage />} />
        <Route path="/debounce-throttle" element={<DebounceThrottlePage />} />
        <Route path="/array-methods" element={<ArrayMethodsPage />} />
        <Route path="/polyfills" element={<PolyfillPage />} />
        <Route path="/oops" element={<OOPsPage />} />
        <Route path="/thiskeyword" element={<ThisKeywordPage />} />
        <Route path="/shallowdeep" element={<CopyConceptPage />} />
        <Route
          path="/global-execution-context"
          element={<GlobalExecutionContextPage />}
        />
        <Route path="/memory-cache" element={<MemoryAndCachePage />} />
        <Route
          path="/spread-rest-destructuring"
          element={<SpreadRestDestructuring />}
        />
        {/* js questions routes  */}
        <Route path="/palindrome" element={<PalindromePage />} />
        <Route path="/reversestring" element={<ReverseStringPage />} />
        <Route path="/char-count" element={<CharCountPage />} />
        <Route path="/prime-check" element={<PrimeCheckPage />} />
        <Route path="/fibonacci" element={<FibonacciPage />} />
        <Route path="/remove-duplicates" element={<RemoveDuplicatesPage />} />
        <Route path="/count-vowels" element={<CountVowelsPage />} />
        <Route path="/anagram-check" element={<AnagramCheckPage />} />
        <Route path="/unique-characters" element={<UniqueCharactersPage />} />
        <Route path="/largest-number" element={<LargestNumberPage />} />
        <Route path="/second-largest-number" element={<SecondExtremePage />} />
        <Route path="/sortings" element={<SortAlgorithmsPage />} />
        {/* react definition routes  */}
        <Route path="/reactexplain" element={<WhatIsReactPage />} />
        <Route path="/airline-booking" element={<AirlineBookingPage />} />
        <Route path="/react19" element={<React19Page />} />
        <Route path="/nextjs" element={<NextJsPage />} />
        <Route path="/virtualdom" element={<VirtualDomVsDomPage />} />
        <Route path="/purecomponent" element={<PureComponentPage />} />
        <Route
          path="/controlleduncontrolled"
          element={<ControlledVsUncontrolledPage />}
        />
        <Route path="/memohookpage" element={<MemoHooksPage />} />
        <Route path="/EffectHooksPage" element={<EffectHooksPage />} />
        <Route path="/LifecyclePage" element={<LifecyclePage />} />
        <Route path="/JSXBabelWebpackPage" element={<JSXBabelWebpackPage />} />
        <Route path="/ReactPortalPage" element={<ReactPortalPage />} />
        <Route
          path="/ClassVsFunctionComponentPage"
          element={<ClassVsFunctionComponentPage />}
        />
        <Route path="/ReactHooksPage" element={<ReactHooksPage />} />
        <Route
          path="/ReconciliationAndHOCPage"
          element={<ReconciliationAndHOCPage />}
        />
        <Route path="/OptimizationPage" element={<OptimizationPage />} />
        <Route path="/client-vs-server" element={<ClientVsServerPage />} />
        react question routes
        <Route path="/todo1" element={<TodoPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/searchfilter" element={<SearchFilterPage />} />
        <Route path="/searchfilterapi" element={<SearchFilterApiPage />} />
        <Route path="/stopwatch" element={<StopwatchPage />} />
      </Routes>
    </>
  );
}

export default App;
