import {React, useState} from "react";
import { Component } from "react";
import { Dropdown, Form, Input } from "semantic-ui-react";
import api from "../services/api";
import axios from 'axios';
import { getValue } from "@testing-library/user-event/dist/utils";

// Creates the dropdown component on the homepage for the user to select which animal to view.
// const animals = ["", "Camelid", "Cat", "Cattle", "Dog", "Equine", "Goat/Sheep", "Swine",];
// const animalOptions = _.map(animals, (animal, index) => ({
//   key: animals[index],
//   text: animal,
//   value: animals[index],
// }))



export default class DropdownAnimalSearchQuery extends Component {
  state = { searchQuery: '' }

// Retrieve data from DB using Axios
  componentDidMount() {
    // Get animal information
    api.get('/animals')
    .then(response => {
      const animalOptions = response.data.map(animal => ({
        key: animal.animal_id,
        text: animal.name,
        value: animal.name
      }
      ));
      this.setState({animalOptions});
    })
    .catch(error => {
      console.error("Error: cannot receive animal data from DB")
    })
  }


  handleChange = (e, { searchQuery, value }) =>{
    if (value === 'Goat/Sheep') {
      value = 'goat_sheep'
    }
    window.location.href = `/drugs/${value}`
    this.setState({ searchQuery, value })
  }   

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  render() {
    const { searchQuery, value } = this.state

    return (
      <Dropdown
        fluid
        onChange={this.handleChange}
        onSearchChange={this.handleSearchChange}
        options={this.state.animalOptions}
        placeholder='Animal'
        search
        searchQuery={searchQuery}
        selection
        value={value}
      />
    )
  }
}