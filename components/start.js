import React, { useState } from "react";

const Start = ({ onStart }) => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={async () => { await onStart(name) }}
      >
        Play
      </button>
    </div>)
}

export default Start;