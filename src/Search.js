import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SearchList from './SearchList'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryWord:"",
      queryResults:"",
      displayWord: "",
      displayType: "",
      displayDefinition: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let self = this;
    let searchWord = this.state.queryWord;
    let results = "";
    fetch('https://api.pearson.com/v2/dictionaries/ldoce5/entries?headword=' + searchWord + '&apikey=LUMBmlGorsNOG9EIGPhASqmdSGcLKFJv')
      .then(function(response) {
        return response.json()
      })
      .then(function(jsonResponse) {
        return jsonResponse.results
      })
      .then(function(results) {
        let type = results[0].part_of_speech
        let definition = results[0].senses[0].definition[0]
        self.setState({
          displayWord: searchWord,
          displayType: type,
          displayDefinition: definition
        })
      })
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
            displayDefinition={this.state.displayDefinition}
            displayType={this.state.displayType}
          />
        </div>
      </div>
    );
  }
}

export default Search;
