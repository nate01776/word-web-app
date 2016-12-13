import React from 'react';

const SearchForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <input type="text" placeholder="Search For Word" onChange={props.handleChange} />
      <input type="submit" />
    </form>
  )
}

export default SearchForm;
