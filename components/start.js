import React, { useState } from "react";

const Start = ({ onStart }) => {
  const [name, setName] = useState("");
  return (
    <div className="start-container">
      <input
        className="inp-name"
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        className="btn-play"
        onClick={async () => { await onStart(name) }}
      >
        Play
      </button>
    </div>)
}

export default Start;