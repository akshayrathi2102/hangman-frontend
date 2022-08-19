import React, { useState } from "react";
import { createSession, playInSession } from "../api/session"
import Layout from "./layout";

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
      <h1 className="heading-game">Hangman</h1>
      <hr />
      <Layout isRunning={isRunning} session={session} start={start} guess={guess} />
    </>
  )
}

export default Game;