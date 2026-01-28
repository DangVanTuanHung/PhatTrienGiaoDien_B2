import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Digital Clock</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}

export default DigitalClock;
