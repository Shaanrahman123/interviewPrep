import React, { useState, useEffect } from "react";

const StopwatchPage = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // cleanup when stop/reset/unmount
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Convert seconds → mm:ss
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        ⏱️ Simple Stopwatch
      </h1>

      {/* Display */}
      <div className="text-5xl font-mono text-gray-800 mb-6">
        {formatTime(time)}
      </div>

      {/* Buttons */}
      <div className="space-x-4">
        <button
          onClick={start}
          className="bg-green-500 text-white px-4 py-2 rounded shadow"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="bg-red-500 text-white px-4 py-2 rounded shadow"
        >
          Reset
        </button>
      </div>

      {/* Full Source Code */}
      <h2 className="text-xl font-semibold text-purple-700 mt-10 mb-2">
        📌 Full Source Code
      </h2>
      <pre className="bg-gray-900 text-white text-sm p-4 rounded overflow-x-auto w-full max-w-3xl">
        {`import React, { useState, useEffect } from "react";

export default function StopwatchPage() {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return \`\${mins}:\${secs}\`;
  };

  return (
    <div>
      <h1>Simple Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`}
      </pre>
    </div>
  );
};

export default StopwatchPage;
