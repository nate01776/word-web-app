import React from 'react';

const SearchList = props => {
  let queryResults = props.queryResults;
  let outputResults = ""

  if (queryResults.length !== 0) {
    let i = 0;
    outputResults = queryResults.map(query => {
      let key = i;
      let newDef = "";
      let newType = "";
      if (query.senses[0].definition[0] !== null) {
        newDef = query.senses[0].definition[0];
        newType = query.part_of_speech + " - ";
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
      <h1>{props.displayWord}</h1>
      {outputResults}
    </div>
  )
}

export default SearchList;
