import { useState } from "react";
import { v4 as uuid } from "uuid";
import CreateTimer from "./components/CreateTimer";
import TimerCard from "./components/TimerCard";
import "./styles.css";

function App() {
  const [timers, setTimers] = useState([]);

  const addTimer = (seconds, description) => {
    const newTimer = {
      id: uuid(),
      initial: seconds,
      time: seconds,
      description,
      status: "paused"
    };

    setTimers([...timers, newTimer]);
  };

  const deleteTimer = (id) => {
    setTimers(timers.filter((t) => t.id !== id));
  };

  const updateTimer = (id, updates) => {
    setTimers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  return (
    <div className="container">
      <h1>Timers</h1>

      <CreateTimer addTimer={addTimer} />

      <div className="timer-grid">
        {timers.map((timer) => (
          <TimerCard
            key={timer.id}
            timer={timer}
            updateTimer={updateTimer}
            deleteTimer={deleteTimer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;