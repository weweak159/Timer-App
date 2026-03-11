import { useState } from "react";

function CreateTimer({ addTimer }) {
  const [seconds, setSeconds] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!seconds) return;

    addTimer(Number(seconds), description);

    setSeconds("");
    setDescription("");
  };

  return (
    <form className="timer-form" onSubmit={handleSubmit}>
      <h3>Create Timer</h3>

      <input
        type="number"
        placeholder="Seconds"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div>
        <button type="submit" className="save">Save</button>
        <button type="button" onClick={() => {
          setSeconds("")
          setDescription("")
        }}>Clear</button>
      </div>
    </form>
  );
}

export default CreateTimer;