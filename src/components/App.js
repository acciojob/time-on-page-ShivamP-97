import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Time on Page: {seconds} seconds</h1>
    </div>
  );
};

export default App;
