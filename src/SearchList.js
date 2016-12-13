import React from 'react';

const SearchList = props => {
  let outputWord = props.displayWord;
  let queryResults = props.queryResults;
  let outputResults = "";

  if (queryResults.length !== 0) {
    let i = 0;
    outputResults = queryResults.map(query => {
      let key = i;
      let newDef = "";
      let newType = "";

      if (query.defenition !== null) {
        newDef = query.defenition;
        newType = query.type + " - ";
      };
      i ++;
      return (
        <div key={key}>
          {newType} {newDef}
        </div>
      )
    })
  }

  return (
    <div>
      <h1>{outputWord}</h1>
      {outputResults}
    </div>
  )
}

export default SearchList;
