import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SearchList from './SearchList'

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
    let searchWord = this.state.queryWord.toLowerCase();

    fetch("/api/connect/" + searchWord)
      .then(function(response) {
        return response.json()
      })
      .then(function(jsonResponse) {
        debugger;
      })
      .then(function(results) {
        self.setState({
          displayWord: searchWord,
          queryResults: results
        })
    });

    // fetch('https://owlbot.info/api/v1/dictionary/' + searchWord + '?format=json', {
    //   mode: "cors",
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   }})
    //   .then(function(response) {
    //     return response.json()
    //   })
    //   .then(function(jsonResponse) {
    //     return jsonResponse
    //   })
    //   .then(function(results) {
    //     self.setState({
    //       displayWord: searchWord,
    //       queryResults: results
    //     })
    // });
  }

  handleChange(event) {
    this.setState({
      queryWord: event.target.value
    });
  };

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
