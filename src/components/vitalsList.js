import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import api from "../services/api";
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;


// Creates the table with the animals expected biometrics

class VitalsCard extends Component {
    state = {
        animalOptions: [],
    }

    // Get animal information
    componentDidMount() {
        api.get('/animals')
          .then(response => {
            const animalOptions = response.data.map(animal => ({
              key: animal.animal_id,
              text: animal.name,
              temperature_low: animal.temperature_low,
              temperature_high: animal.temperature_high,
              heart_rate_low: animal.heart_rate_low,
              heart_rate_high: animal.heart_rate_high,
              respiratory_rate_low: animal.respiratory_rate_low,
              respiratory_rate_high: animal.respiratory_rate_high
            }));
            this.setState({ animalOptions });
          })
          .catch(error => {
            console.error("Error: cannot receive animal data from DB")
          })
      }

    render() {
        const { searchQuery, value, animalOptions } = this.state
        // Get the animal name from URL
        const pathname = window.location.pathname;
        const target = pathname.substring(pathname.lastIndexOf('/') + 1);

        // Isolate the current animal
        const currAnimal = animalOptions.find(animal => animal.text === `${target}`)
        console.log(typeof currAnimal)
        console.log(currAnimal)
        return (
            <Table>
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
                            <div>0</div>
                        </Table.Cell>
                        <Table.Cell>
                            <div>0</div>
                        </Table.Cell>
                        <Table.Cell>
                            <div>0</div>
                        </Table.Cell>
                        <Table.Cell>
                            <div>0</div>
                        </Table.Cell>
                        <Table.Cell>
                            <div>0</div>
                        </Table.Cell>
                        <Table.Cell>
                            <div>0</div>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}

export default VitalsCard
