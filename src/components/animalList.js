import React, {useState, useEffect} from 'react'
import { Dropdown } from 'semantic-ui-react'
import get from '../services/get';
import { AnimalContext } from  '../context/animal_context';
import { useNavigate } from 'react-router-dom';

// Creates the dropdown component on the homepage for the user to select which animal to view.
const animalUri = `${process.env.REACT_APP_TLD}/animals`

const DropdownAnimalSearchQuery = () => {
  const [state, setState] = useState({
    value: '',
    searchQuery: '',
    options: [],
  });

  const navigate = useNavigate();

  useEffect( () => {
    setOptions();
  }, []);

  const setOptions = async () => {
    try {
      const response = await get(animalUri);
      const options = mapOptions(response);

      setState({
        ...state,
        options: options,
      })

    } catch (e) {
      setState({
        ...state,
        options: [],
      })
    
    }
  }

  const mapOptions = (animals) => {
    const options = animals.map(animal => ({
        key: animal.animal_id,
        text: animal.name,
        value: animal.name,
    }));

    return options
  }
    
  const handleChange = (e, {searchQuery, value}) => {
    setState({
      ...state,
      searchQuery: searchQuery,
      value: value,
    });
    navigate(`/dosages/${value}`);
  };   

  const handleSearchChange = (e, { searchQuery }) => {
    setState({ 
      ...state,
      searchQuery: searchQuery 
    });
  };

  return (
    <Dropdown
      fluid
      onChange={handleChange}
      onSearchChange={handleSearchChange}
      options={state.options}
      placeholder='Animal'
      search
      searchQuery={state.searchQuery}
      selection
      value={state.value}
    />
  )
}

export default DropdownAnimalSearchQuery;
