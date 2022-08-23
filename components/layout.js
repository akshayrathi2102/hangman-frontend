import React from "react";
import Hangman from "./hangman";
import Keys from "./keys";
import MaskedWord from "./maskedWord";
import Start from "./start";
import Hint from "./hint";

const Layout = ({ isRunning, session, start, guess }) => {
  return (
    <>
      {
        isRunning && session.result &&
        <div className="start-container">
          <div className="result">
            <p>{session.livesLeft === 0 ? "You Lost" : "You won"}</p>
            <p>The word was {session.actualWord}</p>
          </ div>
          <button className="btn-play" onClick={async () => { await start(session.name) }}>Play Again</button>
        </ div>

      }
      {
        isRunning && !session.result &&
        <div className="game-container">
          <Hangman lives={session.livesLeft} />
          <div className="keyboard-container">
            <Hint hint={"fruit"}/>
            <MaskedWord maskedWord={session.maskedWord} />
            <Keys playedLetters={session.playedLetters} guess={guess} />
          </div>
        </div>
      }
      {
        !isRunning &&
        <>
          <Start onStart={start} />
        </>
      }
    </>)
}

export default Layout;