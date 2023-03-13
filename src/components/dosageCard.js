import React from "react";
import { Table } from "semantic-ui-react";
import EditDosageModal from "./Modal";

// Creates the table with the dosage information
const DosageCard = (props) => {
    const { id, name, method, concentration, concentrationUnit, doseLow, doseHigh, doseUnit, notes } = props.dosage;
    return (
        <Table.Row>
                <Table.Cell>
                    <div>{name}</div>
                </Table.Cell>
                <Table.Cell>
                    <div>{method}</div>
                </Table.Cell>
                <Table.Cell>
                    <div>{concentration}</div>
                </Table.Cell>
                <Table.Cell>
                    <div>{concentrationUnit}</div>
                </Table.Cell>
                <Table.Cell>
                    <div>{doseLow}</div>
                </Table.Cell>
                <Table.Cell>
                    <div>{doseHigh}</div>
                </Table.Cell>
                <Table.Cell>
                    <div>{doseUnit}</div>
                </Table.Cell>
                <Table.Cell>
                    <div> {notes} </div>
                </Table.Cell>

                <Table.Cell>
                <EditDosageModal drug={props.dosage} editDrug={props.editDosageHandler}/>              
                </Table.Cell>
                
                <Table.Cell>
                <i 
                className="trash alternate outline icon"
                style={{color:"red", marginTop:"7px"}}
                onClick={() => props.clickHandler(id)}>
                </i>  
                </Table.Cell>
            </Table.Row>
        );
    };

   export default DosageCard
