import React from "react";
import DropdownAnimalSearchQuery from "./animalList";
import InputConcentration from "./inputConcentration";
import InputDosage from "./inputDosage";

class addDrug extends React.Component {
    state = {
        // animal: "",
        name: "",
        concentration: "",
        dosage: "",
        notes: ""
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "") {
            alert("Drug field is mandatory!");
            return;
        }
        this.props.addDrugHandler(this.state);
        this.setState({ name: "", concentration: "", dosage: "", notes: "" });
    };
    render() {
        return (
            <div className="ui main">
                <h2> Add Drug</h2>
                <form className="ui form" onSubmit={this.add}>
                <label></label>
                    {/* <DropdownAnimalSearchQuery>
                        <input
                        name = "animal"
                        value={this.state.animal}
                        onChange={(e) => this.setState({ animal: e.target.value })}>       
                        </input>   
                    </DropdownAnimalSearchQuery> */}
                    <div className="field">
                        <label>Drug</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Drug Name"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}>
                        </input>
                    </div>
                    <div className="field">
                        <label>Concentration</label>
                        <InputConcentration>
                        <input 
                        type="text" 
                        name="concentration" 
                        placeholder="Concentration"
                        value={this.state.concentration}
                        onChange={(e) => this.setState({ concentration: e.target.value })}>
                        </input>
                        </InputConcentration>
                    </div>
                    <div className="field">
                        <label>Dosage</label>
                        <InputDosage>
                        <input 
                        type="text" 
                        name="dosage" 
                        placeholder="Dosage"
                        value={this.state.dosage}
                        onChange={(e) => this.setState({ dosage: e.target.value })}>
                        </input>
                        </InputDosage>
                    </div>
                    <div className="field">
                        <label>Notes</label>
                        <input 
                        type="text" 
                        name="notes" 
                        placeholder="Notes"
                        value={this.state.notes}
                        onChange={(e) => this.setState({ notes: e.target.value })}>
                        </input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default addDrug;