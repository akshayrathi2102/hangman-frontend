import React from 'react'

const Hangman = ({ lives }) => {
  return (
    <div>
      <div className='lives'>Lives: {lives}</div>
      <div className="hangman-container">
        <div className="pole"></div>
        <div className={`hangman hangman-${6 - lives}`}>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
        </div>
      </div>
    </div>
  )
}

export default Hangman;