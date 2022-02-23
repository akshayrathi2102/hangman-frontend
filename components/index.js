import React, { useState } from "react";
import Hangman from "./hangman";
import Keys from "./keys";
import MaskedWord from "./maskedWord";
import Start from "./start";
import { createSession, playInSession } from "../api/session"

const Game = () => {
  const [session, setSession] = useState(null);
  const isRunning = !!session;
  const guess = async (letter) => {
    const updatedSession = await playInSession(session.id, letter);
    console.log(updatedSession)
    setSession(updatedSession);
  }

  const start = async (name) => {
    const updatedSession = await createSession(name);
    setSession(updatedSession);
  }
  return (
    <>
      {
        isRunning && session.result &&
        <>
          <>
            {session.livesLeft === 0 ? <div> You Lost </div> : <div> You won </div>}
          </>
          <button onClick={async () => { await start(session.name) }}>Play Again</button>
        </>

      }
      {
        isRunning && !session.result &&
        <>
          <Hangman lives={session.livesLeft} />
          <MaskedWord maskedWord={session.maskedWord} />
          <Keys playedLetters={session.playedLetters} guess={guess} />
        </>
      }
      {
        !isRunning &&
        <>
          <Start onStart={start} />
        </>
      }
    </>)
}

export default Game;