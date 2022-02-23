import React from "react";

const Keys = ({ playedLetters, guess }) => {
  const playedLettersSet = new Set(playedLetters);
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lettersList = letters.split("");
  return (<>
    {
      lettersList.map((e, idx) => {
        return <button
          key={idx}
          disabled={playedLettersSet.has(e)}
          onClick={async () => { await guess(e) }}
        >
          {e}</button>
      })
    }
  </>)
}

export default Keys;