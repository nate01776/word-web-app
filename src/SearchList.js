import React from 'react';

const SearchList = props => {
  return (
    <div>
      <h1>{props.displayWord}</h1>
      <h2>{props.displayType}</h2>
      <p>{props.displayDefinition}</p>
    </div>
  )
}

export default SearchList;
