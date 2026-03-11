import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function TimerCard({ timer, updateTimer, deleteTimer }) {

  useEffect(() => {

  if (timer.status !== "playing") return;

  const interval = setInterval(() => {

    if (timer.time <= 1) {
      updateTimer(timer.id, {
        time: 0,
        status: "finished"
      });
      clearInterval(interval);
    } else {
      updateTimer(timer.id, {
        time: timer.time - 1
      });
    }

  }, 1000);

  return () => clearInterval(interval);

}, [timer]);

  const play = () => {
    updateTimer(timer.id, { status: "playing" });
  };

  const pause = () => {
    updateTimer(timer.id, { status: "paused" });
  };

  const stop = () => {
    updateTimer(timer.id, {
    status: "paused",
    time: timer.initial
    });
  };

  return (
    <div className="timer-card">

    <h2>{formatTime(timer.time)}</h2>

    <div className="controls">
      <button className="play" onClick={play}>▶</button>
      <button className="stop" onClick={stop}>⏹</button>
      <button
        className="delete"
        onClick={() => deleteTimer(timer.id)}
      >
        <FaTrash />
      </button>
    </div>

    <input
      value={timer.description}
      readOnly
    />

    <p className="status">
    Status: <strong>{timer.status}</strong>
    </p>

  </div>
  );
}

export default TimerCard;