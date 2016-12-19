import React from 'react'

// This doesn't work properly.  It ouputs all of local storage even things not
// saved in your specific namespace. Instead of using all of local storage keys
// for each word I would namespace all your apps saved words into a single key.
// like localStorage.setItem('word-app', JSON_STRINGIFIED_VERSION_OF_ALL_WORDS)
const Saved = props => {
  let savedWords = localStorage;
  let savedKeys = [];
  let outputWords = "";
  let x = 0;

  for (var n = 0; n < savedWords.length; n++) {
    let currentWord = savedWords.key(n);
    savedKeys.push(currentWord);
  };

  outputWords = savedKeys.map(keyWord => {
    let key = x;
    let text = savedWords[keyWord].split("//");
    x ++;
    return(
      <div key={key}>
        <h3><span className="saved-word">{keyWord}</span>  <b className="type-word">({text[0]}) - </b>{text[1]}</h3>
      </div>
    );
  });

  return (
    <div className="saved-container">
      <div>
        <h2 className="saved-title">Saved Words</h2>
      </div>
      <div>
        <hr />
      </div>
      <div>
        {outputWords}
      </div>
    </div>
  );
}

export default Saved;
