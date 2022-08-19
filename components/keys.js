import React from "react";

const Keys = ({ playedLetters, guess }) => {
  const playedLettersSet = new Set(playedLetters);
  const letters = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"]];

  return (<div className="keyboard">
    {
      letters.map((lettersList, idx) => {
        return (
          <div className="keyboard keyboard__row" key={idx}>
            {
              lettersList.map((e, idx) => {
                return <button
                  className="key"
                  key={idx}
                  disabled={playedLettersSet.has(e)}
                  onClick={async () => { await guess(e) }}
                >
                  {e}</button>
              })
            }
          </div>
        )
      })
    }
  </div>)
}

export default Keys;