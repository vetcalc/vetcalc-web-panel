import React, { Component } from "react";
import { Button, Dropdown, Form, Icon, Input, List } from "semantic-ui-react";
import api from "../services/api";
import axios from 'axios';
import { getValue } from "@testing-library/user-event/dist/utils";
import AddAnimal from './addAnimal';

export default class DropdownAnimalSearchQuery extends Component {
  state = {
    searchQuery: '',
    animalOptions: []
  }

  // Get animal information
  componentDidMount() {
    api.get('/animals')
      .then(response => {
        const animalOptions = response.data.map(animal => ({
          key: animal.animal_id,
          text: animal.name,
          value: animal.name
        }));
        this.setState({ animalOptions });
      })
      .catch(error => {
        console.error("Error: cannot receive animal data from DB")
      })
  }

  handleChange = (e, { searchQuery, value }) => {
    if (value === 'Goat/Sheep') {
      value = 'goat_sheep'
    }
    window.location.href = `/dosages/${value}`
    this.setState({ searchQuery, value })
  }

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  render() {
    const { searchQuery, value, animalOptions } = this.state

  // Render animalOptions as a list
  const animalList = animalOptions.map(animal => {
  return (
    <List.Item className="animalListItem" key={animal.key}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href='#' onClick={() => this.handleChange(null, animal)} style={{ flex: 1 }}>
          {animal.text}
        </a>
          <a href='#' onClick={() => this.handleChange(null, animal)} style={{ marginLeft: '10px' }}>
            <Button icon color="blue">
              <Icon name='pencil'></Icon>
            </Button>
          </a>
          <a href='#' onClick={() => this.handleChange(null, animal)} style={{ marginLeft: '10px' }}>
            <Button icon color="red">
              <Icon name='delete'></Icon>
            </Button>
          </a>
      </div>
    </List.Item>
  )
})

    return (
      <>
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

      <AddAnimal></AddAnimal>
      
      <List className="animalList" divided relaxed>
        {animalList}
      </List>
      </>
    )
  }
}
