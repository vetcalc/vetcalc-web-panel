import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Header from "./header";
import AddDosage from "./addDosage";
import DosageList from "./dosageList";
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import VitalsCard from './vitalsList';
import { AnimalContext } from '../context/animal_context';
import processDosages from '../services/deref';

const dosageUri = `${process.env.REACT_APP_TLD}/dosages`

// Main animal page with add/edit/delete handlers and data for specific animals
const DosageTable = () => {
  const navigate = useNavigate();
  const context = useContext(AnimalContext);

  const [dosages, setDosages] = useState({
    dosages: [],
  });

  useEffect(() => {
    getDosages();
  }, []);


  const getDosages = async () => {
    const animal_id = context.currentAnimal.animal_id;
    const newDosages = await processDosages(`${dosageUri}?animal_id=${animal_id}`);
    
    setDosages({
      ...dosages, 
      dosages: newDosages,
    });

  }

    const addDosageHandler = (dosage) => {
    console.log('adding dosage');
  };

  const editDosageHandler = (dosage) => {
    console.log('editing dosage');
    // let newDosages = [...dosages]
    // let index = newDosages.findIndex(d => d.id === dosage.id)
    // if (index < 0) return addDosageHandler(dosage)
    // newDosages[index] = dosage
    // console.log(dosage);
    // setDosages(newDosages);
  };

  const removeDosageHandler = (id) => {
    console.log('removing dosage');
    // if (window.confirm("Are you sure you want to delete?") === true){
    // const newDosageList = dosages.filter((dosage) => {
      // return dosage.id !== id;
    // });

    // setDosages(newDosageList);
    //};
  }

  const showInfo = async () => {
    console.log(dosages);
  }

  return (
    <div className="ui container">
      <Header></Header>
      <Button onClick={()=>navigate(-1)}>Back</Button>
      <h1>{context.currentAnimal.name}</h1>
      <h3>Vitals</h3>
      <VitalsCard></VitalsCard>
      <h3>Dosage List for {context.currentAnimal.name}</h3>
      <DosageList dosages={dosages.dosages} editDosageHandler={editDosageHandler} deleteDosageHandler={removeDosageHandler}></DosageList>
      <AddDosage animal={context.currentAnimal.name} AnimalHandler={addDosageHandler}> </AddDosage> 

    <button onClick={showInfo}>Show Dosages for {context.currentAnimal.name}</button>
    </div>
  );
};

export default DosageTable;
