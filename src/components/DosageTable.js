import React, { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from "./header";
import AddDosage from "./addDosage";
import DosageList from "./dosageList";
import { useParams } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import VitalsCard from './vitalsList';

// Main animal page with add/edit/delete handlers and data for specific animals
function DosageTable() {
  let {animal}=useParams()
  const LOCAL_STORAGE_KEY = "dosages";
  const [dosages, setDosages] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  let animalDosages=dosages.filter(d=>d.animal.toLowerCase()===animal.toLowerCase());
  console.log(animal)
  console.log(animalDosages);
  console.log(dosages);

  const addDosageHandler = (dosage) => {
    console.log(dosage);
    setDosages([...dosages, { id: uuid(), animal:animal, ...dosage }]);
  };

  const editDosageHandler = (dosage) => {
    let newDosages = [...dosages]
    let index = newDosages.findIndex(d => d.id === dosage.id)
    if (index < 0) return addDosageHandler(dosage)
    newDosages[index] = dosage
    console.log(dosage);
    setDosages(newDosages);
  };

  const removeDosageHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?") === true){
    const newDosageList = dosages.filter((dosage) => {
      return dosage.id !== id;
    });

    setDosages(newDosageList);
  };
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dosages));
  }, [dosages]);

  return (
    <div className="ui container">
      <Header></Header>
      <Button href="javascript: history.go(-1)">Back</Button>
      <h1>{animal}</h1>
      <h3>Vitals</h3>
      <VitalsCard></VitalsCard>
      <h3>Dosage List for {animal}</h3>
      <DosageList dosages={animalDosages} editDosageHandler={editDosageHandler} deleteDosageHandler={removeDosageHandler}></DosageList>
      <AddDosage animal={animal} AnimalHandler={addDosageHandler}> </AddDosage>      
    </div>
  );
};

export default DosageTable;
