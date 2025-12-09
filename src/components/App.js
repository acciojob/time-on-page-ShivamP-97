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
      <p>You've been on this page for {seconds} seconds.</p>
    </div>
  );
};

export default App;
