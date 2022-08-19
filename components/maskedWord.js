import React from "react";

const MaskedWord = ({ maskedWord }) => {
  return (<div className="masked-word">
    <p>{maskedWord.join(" ")}</p>
  </div>)
}

export default MaskedWord;