import React, { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from "./header";
//import DropdownAnimalSearchQuery from "./animalList";
import AddDrug from "./addDrug";
import DrugList from "./drugList";
import { useParams } from 'react-router-dom';
import { textTransform } from '@mui/system';

function DrugTable() {
  let {animal}=useParams()
  const LOCAL_STORAGE_KEY = "drugs";
  const [drugs, setDrugs] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  let animalDrugs=drugs.filter(d=>d.animal.toLowerCase()===animal);
  console.log(animalDrugs);
  console.log(drugs);

  const addDrugHandler = (drug) => {
    console.log(drug);
    setDrugs([...drugs, { id: uuid(), animal:animal, ...drug }]);
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
      <a href="javascript: history.go(-1)">Go Back</a>
      <h1>{animal}</h1>
      <AddDrug addDrugHandler={addDrugHandler}> </AddDrug>
      <DrugList drugs={animalDrugs} deleteDrugHandler={removeDrugHandler}></DrugList>
    </div>
  );
};

export default DrugTable;
