import React from 'react'

const Saved = props => {
  let savedWords = localStorage;
  let savedKeys = [];
  let outputWords = "";
  let x = 0;

  for (var n = 0; n < savedWords.length; n++) {
    let currentWord = savedWords.key(n)
    savedKeys.push(currentWord)
  }

  outputWords = savedKeys.map(keyWord => {
    let key = x;
    let text = savedWords[keyWord].split("//")
    x ++;
    return(
      <div key={key}>
        <h3>{keyWord} - {text[0]} - {text[1]}</h3>
      </div>
    )
  })

  return (
    <div className="saved-container">
      <h2 className="saved-title">Saved Words</h2>
      {outputWords}
    </div>
  );
}

export default Saved;
