import React from 'react';

const SearchForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <input type="text" placeholder="Search For Word" onChange={props.handleChange} className="search-bar"/>
      <input type="submit" hidden />
    </form>
  )
}

export default SearchForm;
