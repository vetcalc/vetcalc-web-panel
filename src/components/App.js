import React, { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from "./header";
import DrugList from './drugList';
import DropdownAnimalSearchQuery from './animalList';
import { Button } from 'semantic-ui-react';
//import value from DropdownAnimalSearchQuery;

function App() {
  const LOCAL_STORAGE_KEY = "drugs";
  const [drugs, setDrugs] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addDrugHandler = (drug) => {
    console.log(drug);
    setDrugs([...drugs, { id: uuid(), ...drug }]);
  };

  const removeDrugHandler = (id) => {
    const newDrugList = drugs.filter((drug) => {
      return drug.id !== id;
    });

    setDrugs(newDrugList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(drugs));
  }, [drugs]);

  return (
    <div className="ui container">
      <Header></Header>
      <DropdownAnimalSearchQuery>  </DropdownAnimalSearchQuery>
      <Button basic color='violet' href='/drugs/cat'>Cat</Button>
      <Button basic color='violet' href='/drugs/camelid'>Camelid</Button>
      <Button basic color='violet' href='/drugs/cattle'>Cattle</Button>
      <Button basic color='violet' href='/drugs/dog'>Dog</Button>
      <Button basic color='violet' href='/drugs/equine'>Equine</Button>
      <Button basic color='violet' href='/drugs/goat_sheep'>Goat/Sheep</Button>
      <Button basic color='violet' href='/drugs/swine'>Swine</Button>
      <Button basic color='violet' href='/drugs'>All</Button>
    </div>
  );
};

export default App;
