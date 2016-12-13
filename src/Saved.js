import React from 'react'

const Saved = props => {
  let savedWords = localStorage;
  let savedKeys = [];
  let outputWords = "";

  for (var n = 0; n < savedWords.length; n++) {
    let currentWord = savedWords.key(n)
    savedKeys.push(currentWord)
  }

  outputWords = savedKeys.map(key => {
    console.log(key)
  })

  return (
    <div>
      <h2>Saved Words</h2>
      {outputWords}
    </div>
  );
}

export default Saved;
