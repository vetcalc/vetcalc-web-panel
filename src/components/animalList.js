import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios';

const animalUri = `${process.env.REACT_APP_TLD}/animals`

const getAnimals = async () => {
    let response = await axios.get(animalUri);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unable to get ${animalUri}`);
    }
  }

// Creates the dropdown component on the homepage for the user to select which animal to view.

export default class DropdownAnimalSearchQuery extends Component {
  state = { 
    searchQuery: '',
    selectOptions: [],
  }

  componentDidMount() {
    this.setOptions();
  }

  setOptions = async () => {
    try {
      const response = await getAnimals();
      const options = this.mapOptions(response);

      this.setState({
        ...this.state,
        selectOptions: options,
      })

    } catch (e) {
      this.setState({
        ...this.state,
        selectOptions: [],
      })
    
    }
  }

  mapOptions = (animals) => {
    const options = animals.map(animal => ({
        key: animal.name,
        text: animal.name,
        value: animal.name,
    }));

    return options
  }

  handleChange = (e, { searchQuery, value }) =>{
    const encodedValue = encodeURIComponent(value);
    window.location.href = `/drugs/${encodedValue}`;
    this.setState({ ...this.state, searchQuery: value });
  }   

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  render() {
    const { searchQuery, value } = this.state

    return (
      <Dropdown
        fluid
        onChange={this.handleChange}
        onSearchChange={this.handleSearchChange}
        options={this.state.selectOptions}
        placeholder='Animal'
        search
        searchQuery={searchQuery}
        selection
        value={value}
      />
    )
  }
}
