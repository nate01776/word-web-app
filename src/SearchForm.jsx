import React from 'react';

const SearchForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <input type="text" placeholder="Search For Word" onChange={props.handleChange} className="search-bar"/>
      <input type="submit" hidden />
    </form>
  )
}
// I would add in prop validations here so people know what props to pass in

export default SearchForm;
