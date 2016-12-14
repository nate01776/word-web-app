import React from 'react';

const SearchList = props => {
  let outputWord = props.displayWord;
  let queryResults = props.queryResults;
  let outputResults = "";

  function handleSaveWord(word, type, def) {
    let exportWord = word.outputWord;
    let exportString = type.newType + "//" + def.newDef;
    localStorage.setItem(exportWord, exportString);
  };

  if (queryResults.length !== 0) {
    let i = 0;
    outputWord = outputWord.charAt(0).toUpperCase() + outputWord.slice(1);
    outputResults = queryResults.map(query => {
      let key = i;
      let newDef = "";
      let newType = "";

      if (query.defenition !== null) {
        newDef = query.defenition;
        newType = query.type;
      };

      if (newType === "suffix") {
        i ++;
        return (
          <div></div>
        )
      } else {
        i ++;
        return (
          <div key={key} className="search-result">
            <div className="result-text">
              <b>{newType} -</b> {newDef}
            </div>
            <div>
              <button className="result-button" onClick={() => handleSaveWord({outputWord}, {newType}, {newDef})}>Save</button>
            </div>
          </div>
      )}});
  };

  return (
    <div className="search-container">
      {outputResults}
    </div>
  )
}

export default SearchList;
