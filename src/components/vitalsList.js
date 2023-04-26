import React, { useEffect } from "react";
import { Item, Table } from "semantic-ui-react";
import api from "../services/api";


// Creates the table with the animals expected biometrics

const VitalsCard = (props) => {
    useEffect(()=>{
        console.log(props.currentAnimal);
    })
    // function get(){
    //     api.get('/animals', {
    //         //drug_id: 161,
    //         name: this.state.name,
    //         temperature_low: this.state.temperature_low,
    //         temperature_high: this.state.temperature_high,
    //         heart_rate_low: this.state.heart_rate_low,
    //         heart_rate_high: this.state.heart_rate_high,
    //         respiratory_rate_low: this.state.respiratory_rate_low,
    //         respiratory_rate_high: this.state.respiratory_rate_high,
    //         Authentication: "simian_army_makes_chaos"
    //       })
          
    //       .then(response=> response.json().
    //         then(data=>{
    //             ReactDOM.render(<Table data={data}/>, document.getElementById())

    //         }))
            
        

          
    //     return;
    // }
    // const { temperature_low, temperature_high, 
    //     heart_rate_low, heart_rate_high, 
    //     respiratory_rate_low, respiratory_rate_high} = "5";

    return(<Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Temp Low</Table.HeaderCell>
                <Table.HeaderCell>Temp High</Table.HeaderCell>
                <Table.HeaderCell>Heart Rate Low</Table.HeaderCell>
                <Table.HeaderCell>Heart Rate High</Table.HeaderCell>
                <Table.HeaderCell>Respiratory Rate Low</Table.HeaderCell>
                <Table.HeaderCell>Respiratory Rate High</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
        <Table.Row>
            <Table.Cell>
                <div>{props.currentAnimal.temperature_low}</div>
            </Table.Cell>
            <Table.Cell>
                <div>{props.currentAnimal.temperature_high}</div>
            </Table.Cell>
            <Table.Cell>
                <div>{props.currentAnimal.heart_rate_low}</div>
            </Table.Cell>
            <Table.Cell>
                <div>{props.currentAnimal.heart_rate_high}</div>
            </Table.Cell>
            <Table.Cell>
                <div>{props.currentAnimal.respiratory_rate_low}</div>
            </Table.Cell>
            <Table.Cell>
                <div>{props.currentAnimal.respiratory_rate_high}</div>
            </Table.Cell>
        </Table.Row>
        
        </Table.Body>
        </Table>
    );
};

export default VitalsCard