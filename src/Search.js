import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SearchList from './SearchList'
import Api_key from './config.js'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryWord:"",
      queryResults:"",
      displayWord: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let self = this;
    let searchWord = this.state.queryWord;
    let api_key = < Api_key />;

    fetch('https://api.pearson.com/v2/dictionaries/ldoce5/entries?headword=' + searchWord + '&apikey=' + api_key.type )
      .then(function(response) {
        return response.json()
      })
      .then(function(jsonResponse) {
        return jsonResponse.results
      })
      .then(function(results) {
        self.setState({
          displayWord: searchWord,
          queryResults: results
        })
    });
  }

  handleChange(event) {
    this.setState({
      queryWord: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <SearchList
            displayWord={this.state.displayWord}
            queryResults={this.state.queryResults}
          />
        </div>
      </div>
    );
  }
}

export default Search;
