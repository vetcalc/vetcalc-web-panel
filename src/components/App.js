import React from 'react';
import './App.css';
import Header from "./header";
import DropdownAnimalSearchQuery from './animalList';
import axios from 'axios'
import api from "../services/api";
import AddAnimal from './addAnimal';

function App() {
  
  return (
    <div className="ui container">
      <Header></Header>
      <br/>
      <h3 align='center'> Which Animal Would You Like to See?</h3>
      <DropdownAnimalSearchQuery></DropdownAnimalSearchQuery>
    </div>
  );
};

export default App;
